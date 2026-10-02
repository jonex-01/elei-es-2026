"""Estatísticas nominais ponderadas da PNAD 2º tri/2026, sem dependências externas.

Uso: python scripts/calculate_income.py PNADC_022026.zip dados/renda-pnad-2026-2tri.json
O ZIP oficial é lido em fluxo; os microdados individuais não são exportados.
"""
import argparse
import hashlib
import json
import zipfile
from pathlib import Path


def calculate(path):
    histogram = {}
    sample_count = 0
    occupied_weight = 0.0
    with zipfile.ZipFile(path) as archive:
        with archive.open("PNADC_022026.txt") as records:
            for record in records:
                if record[:5] != b"20262":
                    raise ValueError("Esperado arquivo do segundo trimestre de 2026")
                # Posições 1-based do input oficial de 31/10/2022.
                if record[409:410] != b"1":  # VD4002: ocupado, 14 anos ou mais
                    continue
                weight = float(record[49:64])  # V1028: peso calibrado
                if weight <= 0:
                    raise ValueError("Peso de expansão não positivo")
                occupied_weight += weight
                income = record[443:451].strip()  # VD4019: habitual, todos os trabalhos
                if not income or int(income) <= 0:
                    continue
                income = int(income)
                histogram[income] = histogram.get(income, 0.0) + weight
                sample_count += 1
    population = sum(histogram.values())
    mean = sum(value * weight for value, weight in histogram.items()) / population
    # Validação independente: SIDRA 6472, variável 5929, período 202602.
    if abs(mean - 3738) >= 1 or abs(occupied_weight / 1000 - 103057) >= 1:
        raise ValueError("Média ou população ocupada não reproduz a divulgação do SIDRA")
    quantiles = {}
    cumulative = 0.0
    for value, weight in sorted(histogram.items()):
        cumulative += weight
        for percentile in (10, 25, 50, 75, 90):
            if str(percentile) not in quantiles and cumulative >= population * percentile / 100:
                quantiles[str(percentile)] = value
    return {
        "period": "2026-Q2", "reference": "abr–jun/2026",
        "currency": "BRL nominal; preços do próprio trimestre",
        "population": "Pessoas de 14 anos ou mais ocupadas, com rendimento habitual positivo em todos os trabalhos",
        "income_variable": "VD4019", "occupation_variable": "VD4002=1", "weight_variable": "V1028",
        "method": "Quantil ponderado: menor renda cuja soma acumulada dos pesos alcança a fração do percentil. Não interpolado.",
        "sample_count": sample_count, "weighted_people": population,
        "occupied_people_validation": occupied_weight, "mean": mean,
        "percentiles": quantiles,
        "share_at_most_minimum_wage_1621": sum(w for v, w in histogram.items() if v <= 1621) / population * 100,
        "share_below_mean": sum(w for v, w in histogram.items() if v < mean) / population * 100,
        "official_nominal_mean_validation": 3738,
        "validation_url": "https://apisidra.ibge.gov.br/values/t/6472/n1/all/v/5929/p/202602",
        "source_url": "https://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_continua/Trimestral/Microdados/2026/PNADC_022026.zip",
        "dictionary_url": "https://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_continua/Trimestral/Microdados/Documentacao/Dicionario_e_input_20221031.zip",
        "source_sha256": hashlib.file_digest(Path(path).open("rb"), "sha256").hexdigest(),
        "review": "2026-10-02",
        "limits": "Estimativas pontuais calculadas pelo projeto, sem intervalos de confiança. Não são renda domiciliar per capita nem mediana oficial do trimestre móvel jun–ago/2026. Sem renda de transferências; rendimentos não são líquidos."
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("zip", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--module", type=Path, help="Exportação ES module para a página e o gerador")
    args = parser.parse_args()
    result = calculate(args.zip)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if args.module:
        args.module.write_text("// Gerado por scripts/calculate_income.py.\nexport const INCOME_ESTIMATES = " + json.dumps(result, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"Média: {result['mean']:.2f}; mediana: {result['percentiles']['50']}; observações: {result['sample_count']}")

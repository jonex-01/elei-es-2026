"""Compara rendimentos ponderados do 2º trimestre de 2022, 2025 e 2026.

Uso: python scripts/calculate_income_history.py PASTA_ZIPS IPCA_JSON MEDIAS_SIDRA_JSON SAIDA_JSON
Entradas oficiais: PNAD trimestral, SGS 433 e SIDRA 6472/5929.
Não exporta microdados. Deflação aproximada pelo IPCA nacional médio de cada trimestre.
"""
import argparse
import hashlib
import json
import zipfile
from pathlib import Path


def distribution(path, year, official_mean):
    histogram = {}
    count = 0
    with zipfile.ZipFile(path) as archive:
        names = [name for name in archive.namelist() if name.endswith('.txt') and 'PNADC_02' in name]
        if len(names) != 1:
            raise ValueError('Esperado um arquivo de registros trimestrais')
        with archive.open(names[0]) as records:
            for record in records:
                if record[:5] != f'{year}2'.encode():
                    raise ValueError('Período incompatível')
                if record[409:410] != b'1':
                    continue
                weight = float(record[49:64])
                value = record[443:451].strip()
                if weight <= 0:
                    raise ValueError('Peso não positivo')
                if not value or int(value) <= 0:
                    continue
                value = int(value)
                histogram[value] = histogram.get(value, 0) + weight
                count += 1
    population = sum(histogram.values())
    mean = sum(value * weight for value, weight in histogram.items()) / population
    if abs(mean - official_mean) >= 1:
        raise ValueError(f'Média {year}: {mean} não reproduz SIDRA {official_mean}')
    cumulative = 0
    quantiles = {}
    for value, weight in sorted(histogram.items()):
        cumulative += weight
        for percentile in (10, 25, 50, 75, 90):
            if str(percentile) not in quantiles and cumulative >= population * percentile / 100:
                quantiles[str(percentile)] = value
    with path.open('rb') as handle:
        checksum = hashlib.file_digest(handle, 'sha256').hexdigest()
    return {'year': year, 'sample_count': count, 'weighted_people': population,
            'nominal_mean': mean, 'nominal_percentiles': quantiles,
            'official_nominal_mean': official_mean, 'file': path.name, 'sha256': checksum}


def build(folder, prices, means):
    years = [2022, 2025, 2026]
    official = {int(row['D3C']) // 100: float(row['V']) for row in means[1:]}
    level = 100
    quarter_prices = {year: [] for year in years}
    for row in prices:
        day, month, year = map(int, row['data'].split('/'))
        level *= 1 + float(row['valor']) / 100
        if year in years and month in (4, 5, 6):
            quarter_prices[year].append(level)
    if any(len(values) != 3 for values in quarter_prices.values()):
        raise ValueError('IPCA incompleto nos trimestres comparados')
    averages = {year: sum(values) / 3 for year, values in quarter_prices.items()}
    rows = []
    for year in years:
        paths = list(folder.glob(f'PNADC_02{year}*.zip'))
        if len(paths) != 1:
            raise ValueError(f'ZIP ausente ou ambíguo: {year}')
        result = distribution(paths[0], year, official[year])
        factor = averages[2026] / averages[year]
        result.update({'price_factor': factor, 'real_mean': result['nominal_mean'] * factor,
                       'real_percentiles': {key: value * factor for key, value in result['nominal_percentiles'].items()}})
        rows.append(result)
    return {'review': '2026-10-02', 'period': '2º trimestre de cada ano',
            'population': 'Ocupados de 14+ com rendimento habitual positivo de todos os trabalhos; VD4002=1 e VD4019>0; pesos V1028',
            'deflation': 'Estimativa do projeto: IPCA nacional, média aritmética dos níveis de abril/maio/junho; base 2º trimestre de 2026. Não usa os deflatores regionais oficiais da PNAD.',
            'method': 'Quantis ponderados sem interpolação; média validada contra SIDRA 6472/5929. Mesmas posições do dicionário oficial de 31/10/2022.',
            'limits': 'Estimativas sem intervalo de confiança. Comparação de distribuições, não dos mesmos indivíduos. Mudanças de composição e revisões de pesos podem influenciar resultados. Renda do trabalho não é renda domiciliar per capita.',
            'sources': ['https://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_continua/Trimestral/Microdados/',
                        'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=01/01/2022&dataFinal=01/08/2026',
                        'https://apisidra.ibge.gov.br/values/t/6472/n1/all/v/5929/p/202202,202502,202602'],
            'price_observations': prices, 'rows': rows}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    for name in ('folder', 'ipca', 'means', 'output'):
        parser.add_argument(name, type=Path)
    args = parser.parse_args()
    result = build(args.folder, json.loads(args.ipca.read_text(encoding='utf-8-sig')), json.loads(args.means.read_text(encoding='utf-8-sig')))
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    for row in result['rows']:
        print(row['year'], round(row['nominal_mean'], 2), row['nominal_percentiles'], round(row['price_factor'], 5))

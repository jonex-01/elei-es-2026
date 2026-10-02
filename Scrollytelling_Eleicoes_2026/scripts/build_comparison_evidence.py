import json, pathlib, hashlib, argparse
from openpyxl import load_workbook
parser=argparse.ArgumentParser(description='Reproduz o agregado publicado a partir dos arquivos oficiais baixados.')
parser.add_argument('input_dir',type=pathlib.Path)
args=parser.parse_args()
source_dir=args.input_dir
root=pathlib.Path(__file__).resolve().parents[1]
read=lambda p:json.loads(pathlib.Path(p).read_text(encoding='utf-8-sig'))
income=read(root/'dados/renda-historico-2026-10-02.json')
wb={}
for key,file in [('total','NY.GDP.MKTP.KD.ZG.json'),('percapita','gdp-peers.json')]:
 raw=read(source_dir/file)
 wb[key]={'metadata':raw[0],'observations':raw[1]}
w=load_workbook(source_dir/'pisa-tables.xlsx',data_only=True)
pisa={}
for subject,sheet,cols in [('matematica','Table I.B1.2a.38',['J','L','N','P']),('leitura','Table I.B1.2a.37',['L','N','P','R']),('ciencias','Table I.B1.2a.36',['H','J','L','N'])]:
 # Match exact worksheet names rather than rely on workbook order.
 ws=w[next(s for s in w.sheetnames if s.replace(' ','')==sheet.replace(' ',''))]
 assert ws['A21'].value=='Brazil',ws['A21'].value
 pisa[subject]={'sheet':ws.title,'reference':'OECD average-35','years':[2015,2018,2022,2025], 'brazil':[ws[c+'21'].value for c in cols], 'oecd35':[ws[c+'12'].value for c in cols], 'brazil_se':[ws.cell(21,ws[c+'21'].column+1).value for c in cols], 'oecd35_se':[ws.cell(12,ws[c+'12'].column+1).value for c in cols]}
labor=read(source_dir/'labor-series.json')[1:]
part=read(source_dir/'participation-series.json')[1:]
uf=read(source_dir/'labor-uf.json')[1:]
data={'review':'2026-10-02','income':income,'worldbank':wb,'pisa':pisa,'labor':labor,'participation':part,'labor_states':uf,
 'pisa_workbook_sha256':hashlib.sha256(pathlib.Path(source_dir/'pisa-tables.xlsx').read_bytes()).hexdigest(),
 'sources':{'pisa':'https://stat.link/mrq53f','labor':'https://apisidra.ibge.gov.br/values/t/4099/n1/all/v/all/p/202202,202302,202402,202502,202602','participation':'https://apisidra.ibge.gov.br/values/t/6461/n1/all/v/all/p/202202,202302,202402,202502,202602','labor_states':'https://apisidra.ibge.gov.br/values/t/4099/n3/all/v/4099/p/202502,202602'}}
(root/'dados/comparacoes-evidencias-2026-10-02.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(root/'js/comparison-estimates.js').write_text('// Dados agregados, fontes e método no arquivo JSON público. Não contém registros individuais.\nexport const EVIDENCE = '+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')

const fs = require('fs');
const candidatos = ['lula', 'flavio_bolsonaro', 'zema', 'caiado', 'renan_santos', 'augusto_cury'];
const template = fs.readFileSync('candidato.html', 'utf8');

candidatos.forEach(c => {
  const content = template.replace('<body>', `<body data-candidate-id="${c}">`);
  fs.writeFileSync(`${c}.html`, content, 'utf8');
});

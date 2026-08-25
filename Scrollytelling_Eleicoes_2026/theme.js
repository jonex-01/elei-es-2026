const fs = require('fs');
const files = ['candidato.html', 'lula.html', 'flavio_bolsonaro.html', 'zema.html', 'caiado.html', 'renan_santos.html', 'augusto_cury.html'];
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace('data-theme="dark"', 'data-theme="light"');
  fs.writeFileSync(f, c, 'utf8');
});

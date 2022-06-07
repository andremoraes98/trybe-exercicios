const readLine = require('readline-sync');

const scriptOptions = ['velocidade', 'sorteio', 'imc'];

const script = readLine.keyInSelect(scriptOptions, 'Qual o script desejar executar? ');

if (script === 0) {
    require('./velocidade/velocidade');
} else if (script === 1) {
    require('./sorteio/sorteio');
} else if (script === 2) {
    require('./IMC/imc');
} else {
    console.log('Script inválido. Tente novamente!');
}
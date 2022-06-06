const readLine = require('readline-sync');

const scriptOptions = ['velocidade', 'sorteio', 'imc'];

const script = readLine.keyInSelect(scriptOptions, 'Qual o script desejar executar? ');

if (script === 0) {
    console.log('velocidade');
} else if (script === 1) {
    console.log('sorteio');
} else if (script === 2) {
    console.log('imc');
} else {
    console.log('Script inválido. Tente novamente!');
}
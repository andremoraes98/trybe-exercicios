const readLine = require('readline-sync');

const altura = readLine.question('Qual a sua altura em metros? ');
const peso = readLine.questionInt('Qual o teu peso em quilos? ');

console.log(`A sua altura é ${altura}m, o teu peso é ${peso}kg e o teu IMC é ${peso / (altura ^ 2)}`);
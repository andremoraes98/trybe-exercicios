const operations = require('./operacoes');
const readLine = require('readline-sync');

console.log('Calculadora iniciada...');

const number1 = readLine.questionInt("Digite um número: ");
const oper = readLine.question("Digite a operação: (+, -, * ou /) ")
const number2 = readLine.questionInt("Digite outro número: ")

switch (oper) {
    case '+':
        operations.sum(number1, number2);
        break;
    case '-':
        operations.sub(number1, number2);
        break;
    case '*':
        operations.mul(number1, number2);
        break;
    case '/':
        operations.div(number1, number2);
        break;
    default:
        console.log('Operação inválida!');
        break;
}
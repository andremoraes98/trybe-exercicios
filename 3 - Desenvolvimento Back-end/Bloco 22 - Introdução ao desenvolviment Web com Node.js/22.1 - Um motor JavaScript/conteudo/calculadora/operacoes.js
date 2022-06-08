const sum = (number1, number2) => console.log(`A soma de ${number1} com ${number2} é ${number1 + number2}`);

const sub = (number1, number2) => console.log(`A subtração de ${number1} com ${number2} é ${number1 - number2}`);

const mul = (number1, number2) => console.log(`A multiplicação de ${number1} com ${number2} é ${number1 * number2}`);

const div = (number1, number2) => console.log(`A divisão de ${number1} com ${number2} é ${number1 / number2}`);

module.exports = {
    sum,
    sub,
    mul,
    div
}
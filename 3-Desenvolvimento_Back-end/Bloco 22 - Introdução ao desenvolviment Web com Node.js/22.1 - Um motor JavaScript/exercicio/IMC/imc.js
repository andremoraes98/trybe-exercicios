const readLine = require("readline-sync");

const altura = readLine.questionFloat("Qual a sua altura em metros? ");
const peso = readLine.questionFloat("Qual o teu peso em quilos? ");

const imc = peso / (altura ^ 2);

console.log(`A sua altura é ${altura}m, o teu peso é ${peso}kg e o teu IMC é ${imc}.`);

if (imc < 18.5) {
    console.log("Você está abaixo do peso ideal.")
} else if (imc <= 24.9) {
    console.log("Você está no peso ideal!")
} else if (imc <= 29.9) {
    console.log("Você está acima peso ideal, também chamado de sobrepeso.")
} else if (imc <= 34.9) {
    console.log("Você está com um peso na faixa da Obesidade de grau I.")
} else if (imc <= 39.9) {
    console.log("Você está com um peso na faixa da Obesidade de grau II.")
} else if (imc >= 40) {
    console.log("Você está com um peso na faixa da Obesidade de grau III ou IV.")
} else {
    console.log("IMC inválido. Tente novamente!");
}
const readLine = require('readline-sync');

const dist = readLine.questionInt('Qual a distância, em metros, percorrida pelo carro? ');
const time = readLine.questionInt('Em quanto tempo, em segundos, o carro percorreu esta distância? ');

console.log(`A velocidade média do carro durante a corrida foi de ${dist / time}m/s.`);
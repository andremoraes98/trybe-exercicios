const readLine = require('readline-sync');

const randomNumber = Math.round(Math.random() * 10);

const playerNumber = readLine.questionInt('Advinhe o número, de 0 a 10: ');

playerNumber === randomNumber
    ? console.log('Parabéns, número correto!')
    : console.log(`Opa, não foi dessa fez. O número sorteado era ${randomNumber}.`);
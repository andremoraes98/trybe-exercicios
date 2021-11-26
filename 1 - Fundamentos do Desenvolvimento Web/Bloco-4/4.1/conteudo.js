/*

Variáveis:
const myName="André", birthCity="Salvador"
let birthYear=1998

birthYear=2030

console.log(myName);
console.log(birthCity);
console.log(birthYear);


Operações aritméticas
let base = 5, height = 8
let area = base*height, perimeter = (2*base)+(2*height)

console.log(area, perimeter)


Condição if/else


let nota = 65;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}

else if (nota >= 60) {
    console.log("Você está na nossa lista de espera")
}

else {
    console.log("Você foi reprovada(o)")
}


Operadores Lógicos:
let currentHour=17, message;

if (currentHour >= 22) {
    message="Não deveríamos comer nada, é hora de dormir";
    console.log(message)
}

else if (currentHour >= 18) {
    message="Rango da noite, vamos jantar :D";
    console.log(message)
}

else if (currentHour >= 14) {
    message="Vamos fazer um bolo pro café da tarde?";
    console.log(message)
}

else if (currentHour >= 11) {
    message="Hora do almoço!!!";
    console.log(message)
}

else if (currentHour >= 4) {
    message="Hmmm, cheiro de café recém passado";
    console.log(message)
}

else {
    message="Hora inválida";
    console.log(message)
}


Switch e Case:
*/
let estadoPessoa="reprovada";

switch (estadoPessoa) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Não se aplica");
        break;
}    
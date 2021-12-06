// 1 -Crie um irmão para elementoOndeVoceEsta
let paiElementoOndeVoceEsta = document.querySelector("#pai")

let sibilingElementoOndeVoceEsta = document.createElement("p")

sibilingElementoOndeVoceEsta.innerText = "Irmão do elementoOndeVoceEsta"

paiElementoOndeVoceEsta.appendChild(sibilingElementoOndeVoceEsta)

console.log(sibilingElementoOndeVoceEsta)

// 2 - Crie um filho para elementoOndeVoceEsta
// 3 - Crie um filho para primeiroFilhoDoFilho
// 4 - A partir desse filho criado, acesse terceiroFilho
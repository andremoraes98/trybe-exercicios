// 1 -Crie um irmão para elementoOndeVoceEsta
let paiElementoOndeVoceEsta = document.querySelector("#pai")

let sibilingElementoOndeVoceEsta = document.createElement("p")

sibilingElementoOndeVoceEsta.innerText = "Irmão do elementoOndeVoceEsta"

paiElementoOndeVoceEsta.appendChild(sibilingElementoOndeVoceEsta)

// 2 - Crie um filho para elementoOndeVoceEsta
let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta")

let childOfElementoOndeVoceEsta = document.createElement("p")

childOfElementoOndeVoceEsta.innerText = "Filho do elementoOndeVoceEsta"

elementoOndeVoceEsta.appendChild(childOfElementoOndeVoceEsta)

// 3 - Crie um filho para primeiroFilhoDoFilho
// 4 - A partir desse filho criado, acesse terceiroFilho
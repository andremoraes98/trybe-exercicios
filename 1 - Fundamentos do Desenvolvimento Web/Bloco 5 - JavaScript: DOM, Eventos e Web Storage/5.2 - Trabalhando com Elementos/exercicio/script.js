// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
function creatTag (text, tag, classe) {
    let element = document.createElement(tag)
    element.innerText = text
    element.className = classe
    return element
}

function insertChildOn (parent, child) {
    return parent.appendChild(child)
}

function getHTMLTag (tag) {
    return document.querySelector(tag)
}

insertChildOn(getHTMLTag('body'), creatTag('Exercício 5.2 - JavaScript DOM','h1', ''))

// 2 - Adicione a tag main com a classe main-content como filho da tag body
insertChildOn(getHTMLTag('body'),creatTag('','main', ''))

document.querySelector('main').className = 'main-content'

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
insertChildOn(getHTMLTag('main'),creatTag('','section', ''))

getHTMLTag('section').className = "center-content"

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
insertChildOn(getHTMLTag('section'), creatTag('Oi! Eu sou filho da section.', 'p', ''))

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
insertChildOn(getHTMLTag('main'), creatTag('','section', 'left-content'))

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//      Devido a classe "tech" adicionada a esta tag li, que foi modificada no CSS para ter um ajuste no eixo Y de 20px

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let clickLi = document.querySelectorAll('li')

for (let index = 0; index < clickLi.length; index += 1 ) {
    clickLi[index].addEventListener("click", adicionaClasseTech)
}


function adicionaClasseTech (event) {
    for (let index = 0; index < clickLi.length; index += 1 ) {
        clickLi[index].removeAttribute('class')
    }
    event.target.className = "tech"
}

function identificaALi (event) {

}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("keyup", mudaTexto)

function mudaTexto () {
    for (let index = 0; index < clickLi.length; index += 1 ) {
        document.querySelector(".tech").innerText = input.value
    }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener("dblclick", abrePortifolio)

function abrePortifolio() {
    window.open("https://github.com/andremoraes98/andremoraes98.github.io")
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", changeColorTo)
myWebpage.addEventListener("mouseleave", changeColorToWhite)

function changeColorTo (event) {
    event.target.style.color = "#2fc18c"
}

function changeColorToWhite (event) {
    event.target.style.color = "white"
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
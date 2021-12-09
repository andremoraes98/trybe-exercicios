let buttonBackground = document.querySelector("#background")
let buttonColor = document.querySelector("#color")
let buttonTextSize = document.querySelector("#text-size")
let buttonSpace = document.querySelector("#space")
let buttonFontType = document.querySelector("#font-type")
let body = document.querySelector('body')
let buttonReset = document.querySelector("#reset")
let tagP = document.querySelectorAll('p')

// window.onload {
//     localStorage.setItem("backgroundColor"; "white")
//     localStorage.setItem("textColor"; "black")
//     localStorage.setItem("fontSize"; body.style.backgroundColor)
//     localStorage.setItem("backgroundColor"; body.style.backgroundColor)
//     localStorage.setItem("backgroundColor"; body.style.backgroundColor)
// }

console.log(body.style.backgroundColor)

// 1 - alterar a cor do background
buttonBackground.addEventListener("click", changeBackgroundColor)

function changeBackgroundColor () {
    let input = document.querySelector("#backgroundInput")
    body.style.backgroundColor = input.value
}

// 2 - alterar a cor do texto
buttonColor.addEventListener("click", changeTextColor)

function changeTextColor () {
    let input = document.querySelector("#colorInput")
    for (let index = 0; index < tagP.length; index += 1 ) {
        tagP[index].style.color = input.value
    }
}

// 3 - altera o tamanho da fonte
buttonTextSize.addEventListener("click", changeTextSize)

function changeTextSize () {
    let input = document.querySelector("#sizeInput")
    for (let index = 0; index < tagP.length; index += 1 ) {
        tagP[index].style.fontSize = input.value + "px"
    }
}

// 4 - altera o espaçamento do texto
buttonSpace.addEventListener("click", changeLineHeight)

function changeLineHeight () {
    let input = document.querySelector("#heightInput")
    for (let index = 0; index < tagP.length; index += 1 ) {
        tagP[index].style.lineHeight = input.value + "px"
    }
}

// 5 - altera o tipo de fonte
buttonFontType.addEventListener("click", changeFontStyle)

function changeFontStyle () {
    let input = document.querySelector("#fontType")
    for (let index = 0; index < tagP.length; index += 1 ) {
        tagP[index].style.fontFamily = input.value
    }
}

//6 - redefine todas as caracteristicas
buttonReset.addEventListener("click", reset)

function reset() {
    body.removeAttribute("style")
    for (let index = 0; index < tagP.length; index += 1 ) {
        tagP[index].removeAttribute("style")
    }
}
let buttonBackground = document.querySelector("#background")
let buttonColor = document.querySelector("#color")
let buttonTextSize = document.querySelector("#text-size")
let buttonSpace = document.querySelector("#space")
let buttonFontType = document.querySelector("#font-type")
let body = document.querySelector('body')

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
    let tagP = document.querySelectorAll('p')
    for (let index = 0; index < tagP.length; index += 1 ) {
        tagP[index].style.color = input.value
    }
}
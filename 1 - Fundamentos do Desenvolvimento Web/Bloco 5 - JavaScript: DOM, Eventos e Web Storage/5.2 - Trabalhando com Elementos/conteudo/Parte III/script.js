// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let familia = document.querySelectorAll("section")

for ( let index = 0; index < familia.length; index += 1 ) {
    element = familia[index]
    if ( element.id !== "pai" && element.id !== "elementoOndeVoceEsta" && element.id !== "primeiroFilhoDoFilho") {
        //familia.removeChild(element)
        console.log(element)
    }
}
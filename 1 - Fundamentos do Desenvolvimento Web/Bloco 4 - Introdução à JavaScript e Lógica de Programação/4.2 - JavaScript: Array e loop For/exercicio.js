let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Item 1: Imprimir os valores do array numbers

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    console.log(numbers[indice])
}


Item 2: Imprimir a soma de todos os valores do vetor numbers
let contador = 0

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    contador += numbers[indice]
}

console.log(contador)


Item 3: Imprimir a média aritmética dos valores do array numbers
let contador = 0

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    contador += numbers[indice]
}

console.log(contador/numbers.length)


Item 4: Imprimir "valor maior que 20" se a média for > 20 e "valor menor ou igual a 20" se a média for < 20
let contador = 0

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    contador += numbers[indice]
}

if ( contador/numbers.length > 20 ) { 
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}


Item 5: Imprimir o maior valor do vetor*/
let maiorNumero, contador = 0;

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    for ( let numero = 0; numero < numbers.length; numero += 1 ) {
        if ( numbers[indice] > numbers[numero] ) {
            contador += 1;
        }
        if ( contador === 9 ) { 
            console.log(numbers[indice])
            break;
        }
    }
    contador = 0;
}
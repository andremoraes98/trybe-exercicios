let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Item 1: 

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    console.log(numbers[indice])
}

Item 2: */
let contador = 0

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    contador += numbers[indice]
}

console.log(contador)
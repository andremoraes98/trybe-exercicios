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


Item 5: Imprimir o maior valor do vetor
let contador = 0;

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

let maiorNumero = 0;

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    if ( maiorNumero < numbers[indice] ) { 
        maiorNumero = numbers[indice];
    }
}

console.log(maiorNumero)


Item 6: Imprimir a quantidade de números ímpares do vetor
let numerosImpares = 0

for ( let index = 0; index < numbers.length; index += 1 ) {
    if (numbers[index] % 2 != 0) {
        numerosImpares += 1;
    }
}

if (numerosImpares === 0) {
    console.log("Não tem números ímpares");
} else {
    console.log("A quantidade de números ímpares é:", numerosImpares)
}


Item 7: Imprimir o menor valor do vetor
let menorNumero, contador = 0;

for ( let indice = 0; indice < numbers.length; indice += 1 ) {
    for ( let numero = 0; numero < numbers.length; numero += 1 ) {
        if ( numbers[indice] < numbers[numero] ) {
            contador += 1;
        }
        if ( contador === 9 ) { 
            console.log(numbers[indice])
            break;
        }
    }
    contador = 0;
}


Item 8: Imprimir os numeros de 1 a 25 e imprimir o resultado*/
let naturais = [];

for (let index = 1; index <= 25; index+=1) {
    naturais.push(index);
}

/*console.log(naturais)


 Item 9: Imprimir os numeros de 1 a 25 e imprimir o resultado */
 
 for( let index = 0; index < naturais.length; index += 1 ) {
     naturais[index] = naturais[index]/2
 }

 console.log(naturais)
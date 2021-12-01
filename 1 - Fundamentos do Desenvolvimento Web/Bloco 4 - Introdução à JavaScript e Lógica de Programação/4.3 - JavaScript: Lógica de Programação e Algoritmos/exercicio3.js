/* Item 3: inverta o lado do triângulo */

const n = 5;  /* declaração da variável */

let vetor = []; /* declaração do vetor */

for ( let index = 0; index < n; index += 1 ) { 
    vetor.push(' ')
}

for ( let index = n-1; index >= 0; index -= 1 ) {
    vetor[index] = '*'
    console.log(vetor.join(''))
}
/* Item 2: imprima um triângulo retângulo com 5 asteriscos de base*/

const n = 6;  /* declaração da variável */

let vetor = []; /* declaração do vetor */

for ( let index = 0; index < n; index += 1 ) {
    vetor.push('*')
    console.log(vetor.join(''))
}
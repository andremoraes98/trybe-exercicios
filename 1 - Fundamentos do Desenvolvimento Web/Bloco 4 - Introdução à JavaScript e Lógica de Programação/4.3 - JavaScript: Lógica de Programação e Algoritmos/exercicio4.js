/* Item 4: faça uma pirâmide com n asteriscos de base */

const n = 5;  /* declaração da variável */

let vetor = [], meioDoVetor = (n-1)/2; /* declaração do vetor */

for ( let index = 0; index < n; index += 1 ) {
    vetor.push(' ')
}   /* inicializacao do vetor com o espaços no meio dele  */

for ( let index = 0; index <= meioDoVetor ; index += 1 ) {
    vetor[meioDoVetor + index] = '*' /* adição do * na posicao a frente do asterisco da iteração anterior */
    vetor[meioDoVetor - index] = '*' /* adição do * na posicao atrás do asterisco da iteração anterior */
    console.log(vetor.join(''))
}
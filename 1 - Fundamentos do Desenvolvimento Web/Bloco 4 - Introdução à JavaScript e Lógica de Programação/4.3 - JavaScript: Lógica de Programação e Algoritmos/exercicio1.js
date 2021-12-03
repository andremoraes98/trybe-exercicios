/* Item 1:  dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n*/

const n = 10;  /* declaração da variável */

let vetor = []; /* criação do vetor que recebe os * */

for ( index = 0; index < n; index += 1 ) { /* armazenando os * no vetor */
    vetor.push("*")
}

for ( index = 0; index < n; index += 1 ) {  /* imprimindo os * na tela */
    console.log(vetor.join(''))
    /* usado o .join para juntar todos os * do vetor e ainda foi mudado o paramêtro do separador para que todos os * aparecessem juntos, sem vírgula. */
}
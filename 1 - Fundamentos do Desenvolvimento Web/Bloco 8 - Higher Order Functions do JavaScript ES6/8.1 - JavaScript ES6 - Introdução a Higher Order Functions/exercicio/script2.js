// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const result = (aposta, func) => {
  const result = Math.trunc(Math.random() * 5) + 1;
  if (func(result, aposta)) {
    return 'Parabéns você ganhou';
  } return 'Tente novamente';
};

const checkResult = (sorteio, aposta) => {
  if (sorteio === aposta) {
    return true;
  } return false;
};

console.log(result(1, checkResult));
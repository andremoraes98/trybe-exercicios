// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const checkExam = (rigthAnswers, studentAnswers, func) => {
  let final = 0;
  for (let index = 0; index < rigthAnswers.length; index += 1) {
    final = func(rigthAnswers[index], studentAnswers[index], final);
  }
  return final;
};

const checkQuestion = (rigthQuestion, studentQuestion, note) => {
  if (rigthQuestion === studentQuestion) {
    note += 1;
  } else if (studentQuestion === 'N.A') {
  } else {
    note -= 0.5;
  }
  return note;
};

console.log(checkExam(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkQuestion));
//console.log(checkQuestion('A', 'C', 3));
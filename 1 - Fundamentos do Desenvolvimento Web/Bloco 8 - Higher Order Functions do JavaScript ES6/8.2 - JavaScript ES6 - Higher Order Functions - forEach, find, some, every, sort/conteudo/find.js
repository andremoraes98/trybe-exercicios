// 1 -Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  return number % 3 === 0 && number % 5 === 0;
};

console.log(numbers.find(findDivisibleBy3And5));


// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  // Adicione seu código aqui:
  return nome.length === 5
}

console.log(names.find(findNameWithFiveLetters));
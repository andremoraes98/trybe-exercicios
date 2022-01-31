const { default: expectationResultFactory } = require("jest-jasmine2/build/expectationResultFactory");

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const arrowTest = (string) => console.log(string);

const uppercase = (str, callback) => {
  setTimeout(() => {
    return callback(str.toUpperCase());
  }, 500);
};

test ('Testa a função uppercase', () => {
  expect(uppercase('aaaa', arrowTest())).toBe('AAAA');
});
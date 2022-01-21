// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const finalArray = []
  arrays.map( (array) => array.map( (item) => finalArray.push(item)));
  return finalArray
}

console.log(flatten());
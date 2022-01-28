// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
const getNationality = (someone) => {
  const {firstName, nationality = 'Brazilian'} = someone
  return `${firstName} is ${nationality}` 
};

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(person));
console.log(getNationality(otherPerson));
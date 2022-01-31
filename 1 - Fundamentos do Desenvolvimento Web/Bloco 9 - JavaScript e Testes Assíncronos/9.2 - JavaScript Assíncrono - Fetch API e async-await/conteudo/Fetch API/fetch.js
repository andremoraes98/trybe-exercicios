const fetch = require('node-fetch');

/* Não é impresso a resposta da requisição à API 
const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
} */

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  /* Se algo der errado, o código quebrará.
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value)); */

  // Com a adição do .cacth, caso haja algum erro, ele será tratado.
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();
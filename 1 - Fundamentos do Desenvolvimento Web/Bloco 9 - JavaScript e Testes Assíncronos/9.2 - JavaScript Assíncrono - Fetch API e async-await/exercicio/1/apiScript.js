// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  const divJoke = document.querySelector('#jokeContainer');
  divJoke.innerHTML = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => appendJoke(data.joke));
};

window.onload = () => fetchJoke();
const cryptoAPI = 'https://api.coincap.io/v2/assets';

const roundDolar = (price) => {
  let rightPrice = price;
  rightPrice = price * 100;
  rightPrice = Math.trunc(rightPrice);
  return rightPrice/100;
}

const generatePhrase = (firstTen) => {
  firstTen.map((crypto) => {
    const cryptoP = document.createElement('p');
    const divRank = document.querySelector('#cryptos');

    console.log(cryptoP, divRank);

    cryptoP.innerHTML = `${crypto.id} (${crypto.symbol}): ${roundDolar(crypto.priceUsd)}`

    divRank.appendChild(cryptoP);
  })
};

const getFirst10Cryptos = (data) => {
  const rank = data.filter((crypto) => crypto.rank <= 10);
  return generatePhrase(rank);
}

const showRankCrypto = () => {

  fetch(cryptoAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(getFirst10Cryptos(data.data));
    });

}

showRankCrypto();
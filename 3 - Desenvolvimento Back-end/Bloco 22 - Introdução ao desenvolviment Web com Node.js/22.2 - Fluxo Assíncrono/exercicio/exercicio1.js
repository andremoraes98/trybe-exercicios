const fs = require('fs').promises;

const main = (num1, num2, num3) => {
    const promise = new Promise((resolve, reject) => {
        if (
            typeof num1 !== 'number'
            || typeof num2 !== 'number'
            || typeof num3 !== 'number'
        ) reject(new Error('Informe apenas números.'));

        const result = ((num1 + num2) * num3);

        if (result < 5000) reject(new Error('Valor muito baixo.'));

        resolve(result);
    })

    return promise;
}

main(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1))
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message));
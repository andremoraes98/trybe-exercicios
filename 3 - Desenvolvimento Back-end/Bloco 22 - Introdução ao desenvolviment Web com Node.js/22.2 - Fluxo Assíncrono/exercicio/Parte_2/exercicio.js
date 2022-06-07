const simpsonsJson = require('./simpsons.json');
const fs = require('fs').promises;

const modifyFamily = simpsonsJson.filter(person => !(person.id === '6' || person.id === '10'));

const main = async () => {
    try {
        await fs.writeFile('./simpsons.json', JSON.stringify(modifyFamily))
        console.log('Arquivo escrito!');
    } catch (err) {
        console.log(err.message);
    }
}

main();
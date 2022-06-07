const simpsonsJson = require('./simpsons.json');
const fs = require('fs').promises;

const requiredIds = ['1', '2', '3', '4'];

const modifyFamily = simpsonsJson.filter(person => requiredIds.includes(person.id));

const main = async () => {
    try {
        await fs.writeFile('./simpsonFamily.json', JSON.stringify(modifyFamily))
        console.log('Arquivo escrito!');
    } catch (err) {
        console.log(err.message);
    }
}

main();
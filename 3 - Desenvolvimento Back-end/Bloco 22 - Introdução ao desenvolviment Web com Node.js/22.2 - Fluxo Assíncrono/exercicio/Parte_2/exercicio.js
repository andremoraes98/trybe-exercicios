const simpsonsJson = require('./simpsons.json');
const fs = require('fs').promises;

const addNelson = async () => {
    const simpsonFamilyContent = await fs.readFile('./simpsonFamily.json', 'utf8');
    const simpsonFamilyJSON = JSON.parse(simpsonFamilyContent);

    simpsonFamilyJSON.push({id:'8', name:'Nelson Muntz'});

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyJSON));
}

const main = () => {
    try {
        addNelson();
        console.log('Arquivo escrito!')
    } catch (err) {
        console.log(err.message);
    }
};

main();
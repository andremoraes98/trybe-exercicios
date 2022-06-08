const simpsonsJson = require('./simpsons.json');
const fs = require('fs').promises;

const removeNelson = async () => {
    const simpsonFamilyContent = await fs.readFile('./simpsonFamily.json', 'utf8');
    const simpsonFamilyJSON = JSON.parse(simpsonFamilyContent);

    const modifiedFamily = simpsonFamilyJSON.filter(({ name }) => name !== 'Nelson Muntz');

    modifiedFamily.push({id:'5', name:'Maggie Simpson'});

    console.log(modifiedFamily);
    
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(modifiedFamily));
}

const main = () => {
    try {
        removeNelson();
        console.log('Arquivo escrito!')
    } catch (err) {
        console.log(err.message);
    }
};

main();
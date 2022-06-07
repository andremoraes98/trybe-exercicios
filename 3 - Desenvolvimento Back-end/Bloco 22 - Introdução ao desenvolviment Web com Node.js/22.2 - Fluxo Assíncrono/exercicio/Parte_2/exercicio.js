const simpsonsJson = require('./simpsons.json');
const readLine = require('readline-sync');

const personId = (id) => {
    const promise = new Promise((resolve, reject) => {
        if (!simpsonsJson.some(person => person.id == id)) reject(new Error('id não encontrado'));

        resolve(simpsonsJson.filter(person => person.id == id));
    })

    return promise;
}

const id = readLine.questionInt('Qual o id do personagem que deseja retornar as informações? ')

const main = async () => {
    try {
        const personInfo = await personId(id);
        console.log(personInfo);
    } catch (err) {
        console.error(err.message);
    }
}

main();
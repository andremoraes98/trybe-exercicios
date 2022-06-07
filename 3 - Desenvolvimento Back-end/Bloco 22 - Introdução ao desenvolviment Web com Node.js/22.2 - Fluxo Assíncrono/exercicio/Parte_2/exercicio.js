const simpsonsJson = require('./simpsons.json');

simpsonsJson.map(person => console.log(`${person.id} - ${person.name}`));
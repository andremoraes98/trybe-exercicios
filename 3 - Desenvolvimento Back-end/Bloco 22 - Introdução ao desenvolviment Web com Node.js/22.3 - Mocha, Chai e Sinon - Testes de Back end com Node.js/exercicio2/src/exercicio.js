const fs = require('fs');

const writeNamedFile = (name, content) => {
    if (!name || !content)
        throw new Error('Invalid input!');
    fs.writeFileSync(`./${name}.txt`, content);
};

module.exports = writeNamedFile;
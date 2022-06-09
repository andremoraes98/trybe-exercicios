const fs = require('fs');
const sinon = require('sinon');
const writeNamedFile = require('../src/exercicio.js');
const { expect } = require('chai');

const FILE_NAME = 'testando';
const FILE_CONTENT = 'conteudo do arquivo';

describe('Testa se a função writeNamedFile', () => {
    before(() => {
        sinon.stub(fs, 'writeFileSync')
            .returns(FILE_CONTENT);
        sinon.stub(fs, 'readFileSync')
            .returns(FILE_CONTENT);
    });

    after(() => {
        fs.writeFileSync.restore();
        fs.readFileSync.restore();
    })

    it('cria um arquivo com o conteúdo passado e retorna "ok".', () => {
        writeNamedFile(FILE_NAME, FILE_CONTENT);

        const result = fs.readFileSync(FILE_NAME);

        expect(result).to.be.equals(FILE_CONTENT);
    });
});

describe('Testa se a função writeNamedFile', () => {
    before(() => {
        sinon.stub(fs, 'writeFile')
            .throws(new Error('Invalid input!'));
    });

    after(() => {
        fs.writeFile.restore();
    })

    it('retorna um erro se um dos parâmetros não forem passados.', () => {
        expect(() => writeNamedFile(undefined, 'test')).to.throws('Invalid input!');
    });
})
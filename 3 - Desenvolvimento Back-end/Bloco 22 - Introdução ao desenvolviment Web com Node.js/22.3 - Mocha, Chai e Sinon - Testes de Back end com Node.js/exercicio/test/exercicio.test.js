const { expect } = require("chai");
const detectNumberSignal = require('../src/exercicio');

describe('Testa se a função', () => {
    it('retorna "positivo".', () => {
        const result = detectNumberSignal(1);
        expect(result).to.be.equal('positivo');
    });

    it('retorna "negativo".', () => {
        const result = detectNumberSignal(-1);
        expect(result).to.be.equal('negativo');
    });

    it('retorna "neutro".', () => {
        const result = detectNumberSignal(0);
        expect(result).to.be.equal('neutro');
    });
});
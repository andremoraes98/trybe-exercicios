const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../src/models/connection.js');
const MoviesModel = require('../../src/models/movieModel.js');

describe('Insere um novo filme no DB', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'query').resolves(execute);
  });

  after(async () => {
    connection.query.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
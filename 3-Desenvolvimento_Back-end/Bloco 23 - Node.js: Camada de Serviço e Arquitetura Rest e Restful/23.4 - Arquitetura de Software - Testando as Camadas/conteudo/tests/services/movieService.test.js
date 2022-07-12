const { expect } = require('chai');
const sinon = require('sinon');

const MovieModel = require('../../src/models/movieModel.js');
const MoviesService = require('../../src/services/movieService.js');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payload = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payload);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém um "false"', async () => {
      const response = await MoviesService.create(payload);

      expect(response).to.be.equal(false);
    });
  });
});

describe('quando é inserido com sucesso', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(() => {
    const ID_EXAMPLE = 1

    sinon.stub(MovieModel, 'create')
      .resolves({ id: ID_EXAMPLE });;
  });

  after(() => {
    MovieModel.create.restore();
  });

  it('retorna um objeto', async () => {
    const response = await MoviesService.create(payloadMovie);

    expect(response).to.be.a('object');
  });

  it('tal objeto possui o "id" do novo filme inserido', async () => {
    const response = await MoviesService.create(payloadMovie);

    expect(response).to.have.a.property('id');
  });
});
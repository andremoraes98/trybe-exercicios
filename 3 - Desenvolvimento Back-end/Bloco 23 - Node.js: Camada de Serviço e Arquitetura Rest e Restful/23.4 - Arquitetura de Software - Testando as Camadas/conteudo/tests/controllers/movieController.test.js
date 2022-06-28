const { express, expect } = require('chai');
const sinon = require('sinon');

const MovieController = {
  create: () => {}
}

describe('Ao chamar o controller de create', () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.send = sinon.stub().returns();
  });

  it('é chamado o status com o código 400', async () => {
    await MovieController.create(request, response);

    expect(response.status.calledWith(400)).to.be.equal(true);
  });

  it('é chamado o send com a mensagem "Dados Inválidos"', async () => {
    await MovieController.create(request, response);

    expect(response.send.calledWith('Dados Inválidos')).to.be.equal(true);
  });
});

describe('quando é inserido com sucesso', () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    response.status = sinon.stub().returns(response);
    response.send = sinon.stub().returns();
  });

  it('é chamado o status com o código 201', async () => {
    await MovieController.create(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
  });

  it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
    await MovieController.create(request, response);

    expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
  });
});
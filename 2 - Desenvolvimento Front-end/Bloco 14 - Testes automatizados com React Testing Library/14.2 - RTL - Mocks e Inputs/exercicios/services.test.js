describe('Testa a função generateRandomNumber', () => {
  it('Verifica se a função generateRandomNumber foi chamada.', () => {
    generateRandomNumber = jest.fn();

    generateRandomNumber();

    expect(generateRandomNumber).toHaveBeenCalled();
  });

  it('Verifica se a função generateRandomNumber retorna 10.', () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(generateRandomNumber()).toBe(10);
  });

  it('Verifica se a função generateRandomNumber retorna 10.', () => {
    generateRandomNumber = jest.fn();

    generateRandomNumber();
    generateRandomNumber();
    generateRandomNumber();

    expect(generateRandomNumber).toHaveBeenCalledTimes(3);
  });
});

describe('Testa a implementação mockada da generateRandomNumber', () => {
  it('Verifica se a função generateRandomNumber foi chamada.', () => {
    generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

    generateRandomNumber();

    expect(generateRandomNumber).toHaveBeenCalled();
  });

  it('Verifica se a nova implementação de divisão foi aplicada.', () => {
    generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(generateRandomNumber(8, 4)).toBe(2);
  });

  it('Verifique se a aplicação da nova implementação acontece apenas uma vez.', () => {
    const randomNumber = require('./services');

    const mockGenerateRandomNumber = jest.spyOn(randomNumber, 'generateRandomNumber').mockImplementation((a, b) => a / b);

    randomNumber.generateRandomNumber(8, 4);
    expect(mockGenerateRandomNumber).toHaveBeenCalled();
    expect(mockGenerateRandomNumber(8, 4)).toBe(2);

    mockGenerateRandomNumber.mockRestore();
    expect(generateRandomNumber(8, 4)).toBe(12);
  });
});
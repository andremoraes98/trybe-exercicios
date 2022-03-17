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
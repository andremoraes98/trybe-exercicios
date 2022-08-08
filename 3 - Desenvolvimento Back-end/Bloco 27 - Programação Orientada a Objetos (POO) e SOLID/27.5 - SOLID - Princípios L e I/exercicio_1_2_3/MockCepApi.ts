import GenericCep from "./GenericCep";

class MockCepApi implements GenericCep {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return 'addres';
  }

  async getCepByAddress(addres: string, number: number): Promise<string>  {
    return 'cep'
  }
}

export default MockCepApi;
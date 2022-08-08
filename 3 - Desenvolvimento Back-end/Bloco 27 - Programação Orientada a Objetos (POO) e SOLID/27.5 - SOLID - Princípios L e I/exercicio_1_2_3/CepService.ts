import FooCepAPI from './FooCepAPI';
import GenericCep from './GenericCep';

class CepService {
  private readonly cepApi: GenericCep;

  constructor(cepApi: GenericCep = new FooCepAPI()) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
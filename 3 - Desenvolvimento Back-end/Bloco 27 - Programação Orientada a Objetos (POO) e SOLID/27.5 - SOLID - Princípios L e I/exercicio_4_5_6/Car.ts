import { IVehicle } from "./interfaces";

export default class Car implements IVehicle {
  drive(): void {
    console.log('O carro está andando!')
  }
}
import { driveVehicle } from "./interfaces";

export default class Car implements driveVehicle {
  drive(): void {
    console.log('O carro está andando!')
  }
}
import { IVehicle } from "./interfaces";

export default class AirPlane implements IVehicle {
  fly(): void {
    console.log('O avião está voando!')
  }
}
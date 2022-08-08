import { flyVehicle } from "./interfaces";

export default class AirPlane implements flyVehicle {
  fly(): void {
    console.log('O avião está voando!')
  }
}
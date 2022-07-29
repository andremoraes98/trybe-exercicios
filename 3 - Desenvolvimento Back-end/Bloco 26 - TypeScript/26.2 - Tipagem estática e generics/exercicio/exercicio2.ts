import { Car, Color, Direction } from './exercicio1';

const uberCar = new Car('volkswagen gol', Color.PRATA, 4);

uberCar.openTheDoor(1);
uberCar.closeTheDoor(1);
uberCar.turnOn();
uberCar.speedUp();
uberCar.turn(Direction.ESQUERDA);
uberCar.speedUp();
uberCar.turn(Direction.DIREITA);
uberCar.speedDown();
uberCar.stop();
uberCar.openTheDoor(3);
uberCar.closeTheDoor(3);
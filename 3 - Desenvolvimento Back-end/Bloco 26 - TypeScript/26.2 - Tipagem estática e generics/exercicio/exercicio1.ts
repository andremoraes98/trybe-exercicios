enum Color {
  PRETA='Preta',
  BRANCA='Branca',
  VERMELHA='Vermelha',
  PRATA='Prata'
}

class Car {
  _brand: string;
  _color: Color;
  _doors: number;

  constructor(brand: string, color: Color, doors:number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('Bi biiii!');
  }

  openTheDoor(door: number): void {
    console.log(`A porta número ${door} foi aberta!`);
  }

  closeTheDoor(door: number): void {
    console.log(`A porta número ${door} foi fechada!`);
  }

  turnOn(): void {
    console.log('O carro foi ligado!')
  }

  turnOff(): void {
    console.log('O carro foi desligado!')
  }

  speedUp(): void {
    console.log('O carro está acelerando!')
  }

  speedDown(): void {
    console.log('O carro está freiando!')
  }

  stop(): void {
    console.log('O carro parou!')
  }

  turn(direction: string): void {
    console.log(`O carro virou a ${direction}!`)
  }
}
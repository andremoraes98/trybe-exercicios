import { Pizza } from "./exercicio3";

type Commun = 'Calabresa' | 'Frango' | 'Pepperoni';
type Veggy = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Candy = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

export interface CommunPizza extends Pizza {
  flavor: Commun,
}

export interface VeggyPizza extends Pizza {
  flavor: Veggy,
}

export interface CandyPizza extends Pizza {
  flavor: Candy,
  slices: 4
}

const calabresa: CommunPizza = {
  flavor: "Calabresa",
  slices: 8
};

const frango: CommunPizza = {
  flavor: "Frango",
  slices: 6
}

const nutela: CandyPizza = {
  flavor: "Nutela",
  slices: 4,
}

console.log(calabresa, frango, nutela)
class Student {
  public registration: string;
  public nome: string;
  private _math: number;
  private _port: number;
  private _geo: number;
  private _hist: number;
  private _trab1: number;
  private _trab2: number;

  constructor(
    registration: string,
    nome: string,
    math: number,
    port: number,
    geo: number,
    hist: number,
    work1: number,
    work2: number,
  ) {
    this.registration = registration;
    this.nome = nome;
    this._math = math;
    this._port = port;
    this._geo = geo;
    this._hist = hist;
    this._trab1 = work1;
    this._trab2 = work2;
  }

  public sumNotes = (): number => {
    const sum = this._math + this._port + this._geo + this._hist + this._trab1 + this._trab2;
    return sum;
  }

  public averageNotes = (): number => {
    const average = (this._math + this._port + this._geo + this._hist + this._trab1 + this._trab2) / 6;
    return average;
  }
}

class PersonLunch {
  public name:string;
  
  constructor(name: string) {
    this.name = name;
  }
}

class ItemOrdered extends PersonLunch {
  private _price: number;

  constructor(name:string, price: number) {
    super(name);
    this._price = price;
  }
}

class Order {
  public person: PersonLunch;
  public items: ItemOrdered[];

  constructor(person: PersonLunch, items: ItemOrdered[]) {
    this.person = person;
    this.items = items;
  }
}
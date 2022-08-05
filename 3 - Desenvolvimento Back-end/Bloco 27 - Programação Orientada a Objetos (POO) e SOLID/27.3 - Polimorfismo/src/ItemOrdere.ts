import PersonLunch from "./PersonLunch";

export default class ItemOrdered extends PersonLunch {
  private _price: number;

  constructor(name:string, price: number) {
    super(name);
    this._price = price;
  }

  get price() {
    return this._price;
  }
}
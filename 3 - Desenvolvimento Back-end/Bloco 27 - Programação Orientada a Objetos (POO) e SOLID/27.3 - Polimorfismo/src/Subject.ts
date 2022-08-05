export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  set name(value: string) {
    if (value.length >= 3)
      this._name = value
  }

  get name(): string {
    return this._name;
  }
}
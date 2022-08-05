export default abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor (name: string, birthDate: string) {
    this.isNameValid(name)
      ? this._name = name
      : this._name = 'default'
    this.isDateValid(birthDate)
      ? this._birthDate = new Date(birthDate)
      : this._birthDate = new Date('01/01/2000')
  }

  get name(): string {
    return this._name;
  }
  
  get birthDate(): Date {
    return this._birthDate;
  }

  set name(newName: string) {
    if (this.isNameValid(newName)) {
      this._name = newName
    }
  }

  set birthDate(newDate: Date) {
    const today = new Date();
    if (this.isDateValid(today)) {
      this._birthDate = newDate
    }
  }

  private isDateValid(date: string | Date): boolean {
    const yearToday = new Date().getFullYear();
    const newDateYear = date instanceof Date
      ? date.getFullYear()
      : new Date(date).getFullYear()
    return newDateYear < yearToday && yearToday - newDateYear <= 120;
  }

  private isNameValid(newName: string): boolean {
    const today = new Date();
    return newName.length > 3;
  }
}
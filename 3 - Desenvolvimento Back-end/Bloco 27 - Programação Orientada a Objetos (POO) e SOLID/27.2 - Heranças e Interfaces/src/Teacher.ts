import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: number;
  private _salary: number;
  private _admissionDate: Date;

  constructor(
    name:string,
    birthDate: string,
    subject: Subject,
    salary: number,
    admissionDate: string
    ) {
    super(name, birthDate);

    this._subject = subject;
    this.isSalaryValid(salary)
      ? this._salary = salary
      : this._salary = 0;
    this.isAdmissionDateValid(admissionDate)
      ? this._admissionDate = new Date(admissionDate)
      : this._admissionDate = new Date('01/01/2000');
    this._registration = this.generateRegistration();
  }

  get registration() {
    return this._registration
  }

  get salary() {
    return this._salary
  }

  get admissionDate() {
    return this._admissionDate
  }

  public generateRegistration(): number {
    const actualYear = new Date().getFullYear();
    const randomNumber = (Math.random() * 1000000000000).toFixed(0);
    const stringRegistration = `${actualYear}${randomNumber}`

    return Number(stringRegistration);
  }

  private isAdmissionDateValid(date: string): boolean {
    const today = new Date().getTime();
    const newDate = new Date(date).getTime();

    return newDate < today;
  }

  private isSalaryValid(salary: number): boolean {
    return salary > 0;
  }
}
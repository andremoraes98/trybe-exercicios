import Enrollable from "./Enrollable";
import Person from "./Person";

export default abstract class Employee extends Person implements Enrollable {
  private salary: number;
  private admissionDate: Date;
  private _enrollment: string;

  constructor(nome: string, birthDate: string, salary: number, admissionDate: string) {
    super(nome, birthDate);
    this._enrollment = this.generateEnrollment();
    
    this.isSalaryValid(salary)
      ? this.salary = salary
      : this.salary = 0;
    this.isAdmissionDateValid(admissionDate)
      ? this.admissionDate = new Date(admissionDate)
      : this.admissionDate = new Date('01/01/2000');
  }

  get enrollment() {
    return this._enrollment
  }

  set enrollment(newEnrollment: string) {
    newEnrollment.length >= 16
      ? this._enrollment = newEnrollment
      : null
  }

  generateEnrollment(): string {
    const actualYear = new Date().getFullYear();
    const randomNumber = (Math.random() * 1000000000000).toFixed(0);
    const stringRegistration = `${actualYear}${randomNumber}`

    return stringRegistration;
  }

  private isAdmissionDateValid(date: string): boolean {
    const today = new Date().getTime();
    const newDate = new Date(date).getTime();

    return newDate < today;
  }

  private isSalaryValid(salary: number): boolean {
    return salary > 0;
  }
};
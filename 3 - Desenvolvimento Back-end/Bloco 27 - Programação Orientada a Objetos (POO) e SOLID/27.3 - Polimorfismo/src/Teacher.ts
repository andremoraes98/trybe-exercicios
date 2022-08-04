import Employee from './Employee';
import Subject from './Subject';

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(
    name:string,
    birthDate: string,
    subject: Subject,
    salary: number,
    admissionDate: string
    ) {
    super(name, birthDate, salary, admissionDate);

    this._subject = subject;
  }
}
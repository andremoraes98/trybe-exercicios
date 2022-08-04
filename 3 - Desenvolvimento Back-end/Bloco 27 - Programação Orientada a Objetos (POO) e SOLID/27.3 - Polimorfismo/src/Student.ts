import Enrollable from './Enrollable';
import Person from './Person';

export default class Student extends Person implements Enrollable {
  private _examsGrades: number[] = [0, 0, 0, 0];
  private _worksGrades: number[] = [0, 0];

  constructor(nome: string, birthDate: string) {
    super(nome, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set examsGrades(newNotes: number[]) {
    if (newNotes.length === 2) {
      this._examsGrades = newNotes;
    }
  }

  set worksGrades(newNotes: number[]) {
    if (newNotes.length === 4) {
      this._worksGrades = newNotes;
    }
  }

  get enrollment(): string {
    return this.enrollment
  }

  set enrollment(newValue: string) {
    newValue.length >= 16 
      ? this.enrollment = newValue
      : null
  }

  generateEnrollment(): string {
    const actualYear = new Date().getFullYear();
    const randomNumber = (Math.random() * 1000000000000).toFixed(0);
    return `${actualYear}${randomNumber}`
  }

  public sumGrades = (): number => {
    const averageExams = this._examsGrades
      .reduce((acc, note) => acc =+ note, 0) / this._examsGrades.length;
    const averageWorks = this._worksGrades
      .reduce((acc, note) => acc =+ note, 0) / this._worksGrades.length;
    const sum = averageWorks + averageExams;
    return sum;
  }

  public sumAverageGrade = (): number => {
    const average = this.sumGrades() / 2;
    return average;
  }
}
import Person from './Person';

export default class Student extends Person {
  public enrollment: string;
  private _math: number = 0;
  private _port: number = 0;
  private _geo: number = 0;
  private _hist: number = 0;
  private _examsGrades: number[] = [0, 0, 0, 0];
  private _worksGrades: number[] = [0, 0];

  constructor(nome: string, birthDate: string) {
    super(nome, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get math(): number {
    return this._math;
  }

  get port(): number {
    return this._port;
  }

  get geo(): number {
    return this._geo;
  }

  get hist(): number {
    return this._hist;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set math(newNote: number) {
    this._math = newNote;
  }

  set port(newNote: number) {
    this._port = newNote;
  }

  set geo(newNote: number) {
    this._geo = newNote;
  }

  set hist(newNote: number) {
    this._hist = newNote;
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

  private generateEnrollment(): string {
    const actualYear = new Date().getFullYear();
    const randomNumber = (Math.random() * 1000000000000).toFixed(0);
    return `${actualYear}${randomNumber}`
  }

  public sumGrades = (): number => {
    const averageExams = this._examsGrades
      .reduce((acc, note) => acc =+ note, 0) / this._examsGrades.length;
    const averageWorks = this._worksGrades
      .reduce((acc, note) => acc =+ note, 0) / this._worksGrades.length;
    const sum = this._math + this._port + this._geo + this._hist + averageWorks + averageExams;
    return sum;
  }

  public sumAverageGrade = (): number => {
    const average = this.sumGrades() / 6;
    return average;
  }
}
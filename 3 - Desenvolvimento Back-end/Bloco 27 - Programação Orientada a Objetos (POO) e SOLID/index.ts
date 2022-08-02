class Student {
  public registration: string;
  public nome: string;
  private math: number;
  private port: number;
  private geo: number;
  private hist: number;
  private trab1: number;
  private trab2: number;

  constructor(
    r: string,
    n: string,
    m: number,
    p: number,
    g: number,
    h: number,
    t1: number,
    t2: number,
  ) {
    this.registration = r;
    this.nome = n;
    this.math = m;
    this.port = p;
    this.geo = g;
    this.hist = h;
    this.trab1 = t1;
    this.trab2 = t2;
  }

  public sumNotes = (): number => {
    const sum = this.math + this.port + this.geo + this.hist + this.trab1 + this.trab2;
    return sum;
  }

  public averageNotes = (): number => {
    const average = (this.math + this.port + this.geo + this.hist + this.trab1 + this.trab2) / 6;
    return average;
  }
}
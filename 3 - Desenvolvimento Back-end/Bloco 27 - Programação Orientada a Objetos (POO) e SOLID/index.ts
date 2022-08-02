class Student {
  public registration: string;
  public nome: string;
  public math: number;
  public port: number;
  public geo: number;
  public hist: number;

  constructor(r: string, n: string, m: number, p: number, g: number, h: number) {
    this.registration = r;
    this.nome = n;
    this.math = m;
    this.port = p;
    this.geo = g;
    this.hist = h;
  }
}
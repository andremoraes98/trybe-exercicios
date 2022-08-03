class Student {
  public registration: string;
  public nome: string;
  private _math: number;
  private _port: number;
  private _geo: number;
  private _hist: number;
  private _trab1: number;
  private _trab2: number;

  constructor(
    registration: string,
    nome: string,
    math: number,
    port: number,
    geo: number,
    hist: number,
    work1: number,
    work2: number,
  ) {
    this.registration = registration;
    this.nome = nome;
    this._math = math;
    this._port = port;
    this._geo = geo;
    this._hist = hist;
    this._trab1 = work1;
    this._trab2 = work2;
  }

  public sumNotes = (): number => {
    const sum = this._math + this._port + this._geo + this._hist + this._trab1 + this._trab2;
    return sum;
  }

  public averageNotes = (): number => {
    const average = (this._math + this._port + this._geo + this._hist + this._trab1 + this._trab2) / 6;
    return average;
  }
}

class PersonLunch {
  public name:string;
  
  constructor(name: string) {
    this.name = name;
  }
}

class ItemOrdered extends PersonLunch {
  private _price: number;

  constructor(name:string, price: number) {
    super(name);
    this._price = price;
  }

  get price() {
    return this._price;
  }
}

class Order {
  public person: PersonLunch;
  public items: ItemOrdered[];
  public paymentType: string;
  public percentDiscount: number;

  constructor(
    person: PersonLunch,
    items: ItemOrdered[],
    paymentType: string,
    percentDiscount: number,
    ) {
    this.person = person;
    this.items = items;
    this.paymentType = paymentType;
    this.percentDiscount = percentDiscount;
  }

  public totalPayment(): number {
    const total = this.items.reduce((acc, item) => acc += item.price, 0);

    return total;
  }

  public totalPaymentWithDiscount(): number {
    const total = this.totalPayment();
    const percentTotalValue = 1 - (this.percentDiscount/100)
    return total * percentTotalValue;
  }
}

class Data {
  private _day: string
  private _month: string
  private _year: string
  public date: string

  constructor(day: number, month: number, year: number) {
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year >= 1900) {
      day <= 9
        ? this._day = `0${day}`
        : this._day = day.toString()

      month <= 9
        ? this._month = `0${month}`
        : this._month = month.toString()

      this._year = year.toString()

      this.date = `${this._day}/${this._month}/${this._year}`
    } else {
      this._day = "01";
      this._month = "01";
      this._year = "1990";
      this.date = `${this._day}/${this._month}/${this._year}`
    }
  }

  public getMonthName(): string {
    enum MonthList{
      January = 1,
      February,
      March,
      April,
      May,
      June,
      July,
      August,
      September,
      October,
      November,
      December
    }
    return MonthList[Number(this._month)]
  }

  public isLeapYear(): boolean {
    const numberYear = Number(this._year);

    return numberYear % 4 === 0
  }

  public compare(newDate: Data): number {
    if ( this.date === newDate.date) {
      return 0
    } else if ( this.date > newDate.date) {
      return 1
    } return -1
  }

  public format(dataFormat: string): string {
    const format: Record<string, string> = {
      aaaa: this._year,
      aa: this._year.slice(2),
      mm: this._month,
      M: this.getMonthName(),
      dd: this._day,
    };

    const dataFormated = Object.keys(format)
      .reduce((acc, type, index) => {
        return index === 0 
          ? dataFormat.replace(type, format[type])
          : acc.replace(type, format[type])
      }, '');

    return dataFormated;
  }
}
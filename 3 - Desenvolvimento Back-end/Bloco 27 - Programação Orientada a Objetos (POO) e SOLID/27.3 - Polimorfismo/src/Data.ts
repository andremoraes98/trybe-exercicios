export default class Data {
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
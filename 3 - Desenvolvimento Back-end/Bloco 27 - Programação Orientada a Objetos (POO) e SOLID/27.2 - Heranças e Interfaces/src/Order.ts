import ItemOrdered from "./ItemOrdere";
import PersonLunch from "./PersonLunch";

export default class Order {
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
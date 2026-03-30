class Account {
  private _balance: number;
  public status: string;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
    this.status = "active";
  }

  public deposite(amount: number): void {
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (this._balance - amount >= 0) {
      this._balance -= amount;
    } else {
      console.log("Insufficient founds");
    }
  }

  public get balance(): number {
    return this._balance;
  }
}

const account = new Account(1000);
// console.log("Initial balance", account.balance);
account.deposite(1000);
// console.log(account.balance);
account.withdraw(500);
// console.log(account.balance);
////////////////////////////////////////////////////////////////////////////////////////////

class Order {
  private _items: string[];
  private _total: number;
  private _status: string;

  constructor() {
    this._items = [];
    this._total = 0;
    this._status = "pending";
  }

  public addItem(item: string, price: number): void {
    this._items.push(item);
    this._total += price;
  }

  public getOrderInfo(): void {
    console.log("Items", this._items);
    console.log("Total", this._total);
    console.log("Status", this._status);
  }

  public get items(): string[] {
    return this._items;
  }

  public get total(): number {
    return this._total;
  }

  public get status(): string {
    return this._status;
  }

  public set status(value: string) {}
}

const order = new Order();

order.addItem("laptop", 25000);
order.addItem("Phone", 5000);

// order.getOrderInfo();

console.log(order.total);

class Account {
    constructor(initialBalance) {
        this._balance = initialBalance;
        this.status = "active";
    }
    deposite(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (this._balance - amount >= 0) {
            this._balance -= amount;
        }
        else {
            console.log("Insufficient founds");
        }
    }
    get balance() {
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
    constructor() {
        this._items = [];
        this._total = 0;
        this._status = "pending";
    }
    addItem(item, price) {
        this._items.push(item);
        this._total += price;
    }
    getOrderInfo() {
        console.log("Items", this._items);
        console.log("Total", this._total);
        console.log("Status", this._status);
    }
    get items() {
        return this._items;
    }
    get total() {
        return this._total;
    }
    get status() {
        return this._status;
    }
    set status(value) { }
}
const order = new Order();
order.addItem("laptop", 25000);
order.addItem("Phone", 5000);
// order.getOrderInfo();
console.log(order.total);

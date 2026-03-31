abstract class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {}

  abstract getProductDetale(): string;
}

class Laptop extends Product {
  constructor(
    name: string,
    price: number,
    quantity: number,
    public screenSize: number,
  ) {
    super(name, price, quantity);
    this.screenSize = screenSize;
  }

  getProductDetale(): string {
    return `Laptop: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Screen Size: ${this.screenSize}`;
  }
}

class Mobile extends Product {
  constructor(
    name: string,
    price: number,
    quantity: number,
    public resolution: string,
  ) {
    super(name, price, quantity);
    this.resolution = resolution;
  }

  getProductDetale(): string {
    return `Mobile: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Resolution: ${this.resolution}`;
  }
}

const laptop = new Laptop("MacBook Pro", 1999, 10, 16);

const mobile = new Mobile("iPhone 14", 999, 20, "1170 x 2532");

console.log(laptop.getProductDetale());
console.log(mobile.getProductDetale());

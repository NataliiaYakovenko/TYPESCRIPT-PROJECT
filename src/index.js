class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Laptop extends Product {
    constructor(name, price, quantity, screenSize) {
        super(name, price, quantity);
        this.screenSize = screenSize;
        this.screenSize = screenSize;
    }
    getProductDetale() {
        return `Laptop: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Screen Size: ${this.screenSize}`;
    }
}
class Mobile extends Product {
    constructor(name, price, quantity, resolution) {
        super(name, price, quantity);
        this.resolution = resolution;
        this.resolution = resolution;
    }
    getProductDetale() {
        return `Mobile: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Resolution: ${this.resolution}`;
    }
}
const laptop = new Laptop("MacBook Pro", 1999, 10, 16);
const mobile = new Mobile("iPhone 14", 999, 20, "1170 x 2532");
console.log(laptop.getProductDetale());
console.log(mobile.getProductDetale());

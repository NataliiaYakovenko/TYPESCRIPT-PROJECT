class Item {
    constructor(title, pages, quantity) {
        this.title = title;
        this.pages = pages;
        this.quantity = quantity;
    }
}
class Book extends Item {
    constructor(title, pages, quantity, author) {
        super(title, pages, quantity);
        this.author = author;
        this.author = author;
    }
    getItemDetale() {
        return `Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Quantity: ${this.quantity}`;
    }
}
class Magazine extends Item {
    constructor(title, pages, quantity, publisher) {
        super(title, pages, quantity);
        this.publisher = publisher;
        this.publisher = publisher;
    }
    getItemDetale() {
        return `Magazine: ${this.title}, Publisher: ${this.publisher}, Pages: ${this.pages}, Quantity: ${this.quantity}`;
    }
}
const book = new Book("The Great Gatsby", 180, 3, "F. Scott Fitzgerald");
const magazine = new Magazine("National Geographic", 100, 5, "National Geographic Society");
console.log(book.getItemDetale());
console.log(magazine.getItemDetale());

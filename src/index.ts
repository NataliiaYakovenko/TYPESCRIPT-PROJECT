abstract class Item {
  constructor(
    public title: string,
    public pages: number,
    public quantity: number,
  ) {}

  abstract getItemDetale(): string;
}

class Book extends Item {
  constructor(
    title: string,
    pages: number,
    quantity: number,
    public author: string,
  ) {
    super(title, pages, quantity);
    this.author = author;
  }

  getItemDetale(): string {
    return `Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Quantity: ${this.quantity}`;
  }
}

class Magazine extends Item {
  constructor(
    title: string,
    pages: number,
    quantity: number,
    public publisher: string,
  ) {
    super(title, pages, quantity);
    this.publisher = publisher;
  }

  getItemDetale(): string {
    return `Magazine: ${this.title}, Publisher: ${this.publisher}, Pages: ${this.pages}, Quantity: ${this.quantity}`;
  }
}

const book = new Book("The Great Gatsby", 180, 3, "F. Scott Fitzgerald");
const magazine = new Magazine(
  "National Geographic",
  100,
  5,
  "National Geographic Society",
);

console.log(book.getItemDetale());
console.log(magazine.getItemDetale());

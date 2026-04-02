class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);



// console.log(numberStack.pop());

stringStack.push("hello");
stringStack.push("world");
stringStack.push('Nataliia');

console.log(stringStack.pop())
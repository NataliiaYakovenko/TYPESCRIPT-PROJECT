class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
const stringStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
// console.log(numberStack.pop());
stringStack.push("hello");
stringStack.push("world");
stringStack.push('Nataliia');
console.log(stringStack.pop());

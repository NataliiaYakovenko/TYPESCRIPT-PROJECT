// function printValue<T>(value: T): void {
//   console.log(`Value: ${value}`);
// }

// const printValue = <T>(value: T): void => {
//   console.log(`Value: ${value}`);
// };

// printValue(10);
// printValue("Hello");

function processValue<T extends number | string>(value: T): void {
  if (typeof value === "number") {
    console.log(`Value from a number: ${value.toFixed(2)}`);
  } else if (typeof value === "string") {
    console.log(`Value from a string: ${value.toUpperCase()}`);
  }
}

// processValue(10);
// processValue("Hello");

class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const box1 = new Box<number>(10);
const box2 = new Box<string>("Hello");

console.log(box1.getValue());
console.log(box2.getValue());

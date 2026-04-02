// function printValue<T>(value: T): void {
//   console.log(`Value: ${value}`);
// }
// const printValue = <T>(value: T): void => {
//   console.log(`Value: ${value}`);
// };
// printValue(10);
// printValue("Hello");
function processValue(value) {
    if (typeof value === "number") {
        console.log(`Value from a number: ${value.toFixed(2)}`);
    }
    else if (typeof value === "string") {
        console.log(`Value from a string: ${value.toUpperCase()}`);
    }
}
// processValue(10);
// processValue("Hello");
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const box1 = new Box(10);
const box2 = new Box("Hello");
console.log(box1.getValue());
console.log(box2.getValue());

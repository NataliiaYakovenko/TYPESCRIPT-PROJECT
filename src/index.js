class CircleImpl {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class RectangleImpl {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new CircleImpl(5);
// console.log(circle.calculateArea());
const rectangle = new RectangleImpl(4, 6);
console.log(rectangle.calculateArea());

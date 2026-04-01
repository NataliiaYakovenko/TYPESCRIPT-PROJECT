interface Shape {
  calculateArea(): number;
}

interface Circle extends Shape {
  radius: number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

class CircleImpl implements Circle {
  constructor(public radius: number) {}
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class RectangleImpl implements Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new CircleImpl(5);
// console.log(circle.calculateArea());

const rectangle = new RectangleImpl(4, 6);
console.log(rectangle.calculateArea());

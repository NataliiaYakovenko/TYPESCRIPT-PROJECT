// const PI = 3.14

// namespace Geometry {
//   export const PI = 3.14159;

//   export function calculateCirccleArea(rudius: number): number {
//     return PI * rudius * rudius;
//   }

//   export class Point {
//     constructor(
//       public x: number,
//       public y: number,
//     ) {}
//     distanceToOrigian(): number {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//   }
// }

// console.log('PI:', Geometry.PI )

// console.log(Geometry.calculateCirccleArea(5))
// const point = new Geometry.Point(3,4)

// console.log(point.distanceToOrigian())

namespace MathFunctions {
  export const PI = 3.14159;

  export function calculateCirccleArea(rudius: number): number {
    return PI * rudius * rudius;
  }

  export function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

}

console.log(MathFunctions.calculateCirccleArea(3))
console.log(MathFunctions.calculateRectangleArea(2,6))
const PI = 3.14;
var Geometry;
(function (Geometry) {
    Geometry.PI = 3.14159;
    function calculateCirccleArea(rudius) {
        return Geometry.PI * rudius * rudius;
    }
    Geometry.calculateCirccleArea = calculateCirccleArea;
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        distanceToOrigian() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
    Geometry.Point = Point;
})(Geometry || (Geometry = {}));
console.log('PI:', Geometry.PI);
// console.log(Geometry.calculateCirccleArea(5))
// const point = new Geometry.Point(3,4)
// console.log(point.distanceToOrigian())

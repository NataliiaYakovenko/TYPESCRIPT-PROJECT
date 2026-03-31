class Car {
    constructor(manufacturer, maxSpeed) {
        this._manufacturer = manufacturer;
        this._speed = 0;
        this._maxSpeed = maxSpeed;
    }
    accelearate(speedDelta) {
        if (this._speed + speedDelta <= this._maxSpeed) {
            this._speed += speedDelta;
            return this._speed;
        }
        this._speed = this._maxSpeed;
        return this._speed;
    }
    decelerate(speedDelta) {
        if (this._speed - speedDelta >= 0) {
            this._speed -= speedDelta;
            return this._speed;
        }
        this._speed = 0;
        return this._speed;
    }
    get speed() {
        return this._speed;
    }
    get manufacturer() {
        return this._manufacturer;
    }
    set manufacturer(value) {
        this._manufacturer = value;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
}
const car = new Car('Lexus', 250);
car.accelearate(150);
car.decelerate(303);
console.log(car.speed);

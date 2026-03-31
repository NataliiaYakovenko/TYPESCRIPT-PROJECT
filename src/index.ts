class Car {
  private _manufacturer: string;
  private _speed: number;
  private readonly _maxSpeed: number;

  constructor(manufacturer: string, maxSpeed: number) {
    this._manufacturer = manufacturer;
    this._speed = 0;
    this._maxSpeed = maxSpeed;
  }

  public accelearate(speedDelta: number): number {
    if (this._speed + speedDelta <= this._maxSpeed) {
      this._speed += speedDelta;
      return this._speed;
    }
    this._speed = this._maxSpeed;
    return this._speed;
  }

  public decelerate(speedDelta: number): number {
    if (this._speed - speedDelta >= 0) {
      this._speed -= speedDelta;
      return this._speed;
    }
    this._speed = 0;
    return this._speed;
  }

  public get speed(): number {
    return this._speed;
  }

  public get manufacturer(): string {
    return this._manufacturer;
  }

  public set manufacturer(value: string) {
    this._manufacturer = value;
  }

  public get maxSpeed(): number {
    return this._maxSpeed;
  }
}

const  car = new Car('Lexus', 250)
car.accelearate(150)
car.decelerate(303)
console.log(car.speed)


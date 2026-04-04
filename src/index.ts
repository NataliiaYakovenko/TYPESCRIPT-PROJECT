// tsc --watch .src/index.ts -t ES6 --experimentalDecorators

function classDecorator(constructor: Function) {
  console.log(`classdecorator called`);
}

function propertyDecorator(target: any, propertyKey: string) {
  console.group("PropertyDecorator");
  console.log(propertyKey);
  console.dir(target);
  console.groupEnd();
}

function methodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): any {
  const originalmethod = target;

  return (target = function (...args: any[]) {
    console.log(`Calling with args: ${args}`);
    return originalmethod.apply(this, args);
  });
}

@classDecorator
class User {
  @propertyDecorator
  private _nickname: string;

  constructor(nickname: string) {
    this._nickname = nickname;
    console.log("constructor called");
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  @methodDecorator
  greet(greeting: string): string {
    return `${this._nickname}! ${greeting}`;
  }
}

const nataliia = new User("Nataliia");
console.log(nataliia.greet("Hello"));

// console.log(nataliia.nickname);

// nataliia.nickname = "Yakovenko";
// console.log(nataliia.nickname);

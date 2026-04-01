interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user1: User = {
  id: 1,
  name: "Nataliia",
  email: "natali@gmail.com",
};

// console.log(user1);

interface Animal {
  nickname: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const Sharick: Dog = {
  nickname: "Sharick",
  age: 3,
  breed: "labrador",
};

// console.log(Sharick);
/////////////////////////////////////////////////////////////////////////

interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

class Post implements Printable, Loggable {
  content: string;

  constructor(content: string) {
    this.content = content;
  }

  print() {
    console.log(this.content);
  }

  log() {
    console.log(this.content);
  }
}

const post = new Post("Hello world");
// console.log(post.print());

post.log()

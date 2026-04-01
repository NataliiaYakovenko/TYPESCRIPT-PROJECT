const user1 = {
    id: 1,
    name: "Nataliia",
    email: "natali@gmail.com",
};
const Sharick = {
    nickname: "Sharick",
    age: 3,
    breed: "labrador",
};
class Post {
    constructor(content) {
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
post.log();

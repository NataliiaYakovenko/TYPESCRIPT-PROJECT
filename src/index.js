class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        return `${this.name} barks`;
    }
}
const dog = new Dog("Pet", "Labrador");
console.log(dog.makeSound());

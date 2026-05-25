//Inheritance
class Animal{
    alive = true;

    eat(){
        console.log('This '+this.name + ' is eating');
    }

    sleep(){
        console.log('This '+this.name + ' is sleeping');
    }
}
class Rabbit extends Animal{
    name = 'Rabbit';

    run(){
        console.log('This '+this.name + ' is running');
    }
}
class Fish extends Animal{
    name = 'Fish';  

    swim(){
        console.log('This '+this.name + ' is swimming');
    }
}
class Hawk extends Animal{
    name = 'Hawk';

    fly(){
        console.log('This '+this.name + ' is flying');
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.swim();
hawk.fly();
fish.eat();


//static properties and methods
class Mathutil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
}
console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(5));


//static method using constructor 
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
} 
const user1 = new User('Alice');
const user2 = new User('Bob');
console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);


//super keyword
class Animals {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animals {
    constructor(name, breed) {
        super(name);   // Calls parent constructor
        this.breed = breed;
    }

    showInfo() {
        console.log("Name:", this.name);
        console.log("Breed:", this.breed);
    }
}
class Cat extends Animals {
    constructor(name, breed, age) {
        super(name);   // Calls parent constructor
        this.breed = breed;
        this.age = age;
    }

    showInfo() {
        console.log("Name:", this.name);
        console.log("Breed:", this.breed);
        console.log("Age:", this.age);
    }
}

let dog1 = new Dog("Tommy", "Labrador");
let cat = new Cat("Sheru", "kitty", 5);
dog1.showInfo();
cat.showInfo();
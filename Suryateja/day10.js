// Polymorphism
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

console.log("Polymorphism:");
dog.sound();
cat.sound();


// Method Overriding
class Vehicle {
    start() {
        console.log("Vehicle Started");
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Bike Started");
    }
}

const bike = new Bike();

console.log("\nMethod Overriding:");
bike.start();


// Abstraction
class ATM {
    withdraw() {
        this.#processTransaction();
    }

    #processTransaction() {
        console.log("Money Withdrawn");
    }
}

const atm = new ATM();

console.log("\nAbstraction:");
atm.withdraw();


// Static Method
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log("\nStatic Method:");
console.log(MathUtils.add(10, 20));


// Getter and Setter
class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

const student = new Student("Surya");

console.log("\nGetter and Setter:");
console.log(student.name);

student.name = "Surya Teja";

console.log(student.name);


// this Keyword
class Employee {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

const emp = new Employee("Surya Teja");

console.log("\nthis Keyword:");
emp.display();
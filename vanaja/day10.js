// JAVASCRIPT OOP CONCEPTS
// 1. ENCAPSULATION
// Encapsulation means hiding data and
// controlling access using methods.
class BankAccount {
    #balance; // private property
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }
    // method to deposit money
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ₹${amount}`);
    }
    // method to withdraw money
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }
    // method to check balance
    getBalance() {
        return this.#balance;
    }
}
const account1 = new BankAccount("Vishnu", 5000);
account1.deposit(2000);
account1.withdraw(1000);
console.log("Current Balance:", account1.getBalance());
// console.log(account1.#balance); ❌ ERROR
// private property cannot be accessed directly

// 2. POLYMORPHISM
// Same method behaves differently.
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
const animal1 = new Dog();
const animal2 = new Cat();
animal1.sound(); // Dog barks
animal2.sound(); // Cat meows
// 3. METHODS
// Methods are functions inside objects/classes.
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    // method
    study() {
        console.log(`${this.name} is studying`);
    }
    // method
    showMarks() {
        console.log(`${this.name}'s Marks: ${this.marks}`);
    }
}
const student1 = new Student("Rahul", 92);
student1.study();
student1.showMarks();
// 4. NESTED OBJECTS
// Object inside another object.
const employee = {
    name: "Kiran",
    age: 25,

    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    },

    skills: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "MongoDB"]
    }
};

console.log(employee.name);

console.log(employee.address.city);

console.log(employee.skills.frontend[2]);

console.log(employee.skills.backend[1]);
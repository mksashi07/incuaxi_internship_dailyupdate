// Class and Constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person1 = new Person("Surya Teja", 22);
const person2 = new Person("Rahul", 24);
person1.displayInfo();
person2.displayInfo();


// Inheritance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    displayStudent() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
        );
    }
}
const student1 = new Student("Surya Teja", 22, "JavaScript");
student1.displayStudent();


// Encapsulation
class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount(10000);
account.deposit(2000);
account.withdraw(1500);
console.log("Current Balance:", account.getBalance());


// Polymorphism
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}
const dog = new Dog();
const cat = new Cat();
dog.makeSound();
cat.makeSound();


// Abstraction
class Vehicle {
    startEngine() {
        throw new Error("Method must be implemented");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("Car Engine Started");
    }
}
const car = new Car();
car.startEngine();


// Static Methods
class MathUtility {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log("Addition:", MathUtility.add(10, 20));
console.log("Multiplication:", MathUtility.multiply(5, 4));


// Getters and Setters
class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        } else {
            console.log("Salary must be positive");
        }
    }
}
const emp = new Employee("Surya", 30000);
console.log("Salary:", emp.salary);
emp.salary = 45000;
console.log("Updated Salary:", emp.salary);


// Object Literal
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 55000,
    displayDetails() {
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}, Price: ₹${this.price}`
        );
    }
};
laptop.displayDetails();


// Prototype
function Mobile(brand, price) {
    this.brand = brand;
    this.price = price;
}
Mobile.prototype.showDetails = function () {
    console.log(`Brand: ${this.brand}, Price: ₹${this.price}`);
};
const mobile1 = new Mobile("Samsung", 25000);
mobile1.showDetails();
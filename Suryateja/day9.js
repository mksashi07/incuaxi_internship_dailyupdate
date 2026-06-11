// Object
const studentObject = {
    name: "Surya Teja",
    age: 21,

    showDetails() {
        console.log("Object:");
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
};

studentObject.showDetails();


// Class
class StudentClass {
    name = "Surya Teja";
    age = 21;

    showDetails() {
        console.log("\nClass:");
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

const classObj = new StudentClass();
classObj.showDetails();


// Constructor
class StudentConstructor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const constructorObj = new StudentConstructor(
    "Surya Teja",
    21
);

console.log("\nConstructor:");
console.log(constructorObj.name);
console.log(constructorObj.age);


// Instance Object
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

const car1 = new Car("BMW");
const car2 = new Car("Audi");

console.log("\nInstance Objects:");
console.log(car1.brand);
console.log(car2.brand);


// Encapsulation
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(5000);

console.log("\nEncapsulation:");
console.log(account.getBalance());


// Inheritance
class Person {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    showCourse() {
        console.log("Course:", this.course);
    }
}

const student = new Student(
    "Surya Teja",
    "JavaScript"
);
console.log("\nInheritance:");
student.display();
student.showCourse();
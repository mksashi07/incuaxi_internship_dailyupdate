// OBJECT CREATION
// Object Literal

const user1 = {
    name: "Alice",
    age: 25
};

console.log(user1);


// Object.create()

const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.name = "John";

student.greet();


// Constructor Function

function User(name, age) {
    this.name = name;
    this.age = age;
}

const user2 = new User("Bob", 30);

console.log(user2);


// Class

class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    showDetails() {
        console.log(`${this.name} is a ${this.role}`);
    }
}

const emp1 = new Employee("Sam", "Developer");

emp1.showDetails();
// PROPERTY ACCESS
// Dot Notation

const user = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York"
    }
};

console.log(user.name);


// Bracket Notation

console.log(user["age"]);


// Optional Chaining

console.log(user.address?.city);

console.log(user.contact?.phone);
// OBJECT METHODS

// Object.keys()

console.log(Object.keys(user));


// Object.values()

console.log(Object.values(user));


// Object.entries()

console.log(Object.entries(user));


// Object.assign()

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = Object.assign({}, obj1, obj2);

console.log(merged);


// Object.freeze()

Object.freeze(user);

user.name = "Bob";

console.log(user);
// DESTRUCTURING
// Basic Destructuring

const { name, age } = user;

console.log(name);

console.log(age);


// Rename Variables

const { name: userName } = user;

console.log(userName);


// Default Values

const { country = "India" } = user;

console.log(country);


// Nested Destructuring

const {
    address: { city }
} = user;

console.log(city);
// SPREAD & REST

// Spread Operator - Copy Object

const clone = { ...user };

console.log(clone);


// Spread Operator - Merge Objects

const extraInfo = {
    job: "Developer"
};

const updatedUser = {
    ...user,
    ...extraInfo
};

console.log(updatedUser);


// Rest Operator

const { address, ...rest } = user;

console.log(rest);


// Rest in Function Parameters

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20, 30, 40));

// PROTOTYPE & INHERITANCE

// Prototype using Object.create()

const animal = {
    speak() {
        console.log("Animal makes sound");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Dog barks");
};

dog.speak();

dog.bark();


// Class Inheritance

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

const d = new Dog();

d.speak();

d.bark();
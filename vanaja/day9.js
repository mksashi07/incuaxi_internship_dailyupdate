// JAVASCRIPT OOP CONCEPTS
// Constructor | Class | Object
// Instances | Inheritance
// 1. CLASS
// A class is a blueprint for creating objects.
class Person {
    // 2. CONSTRUCTOR
    // Constructor runs automatically
    // when an object is created.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// 3. OBJECT
// Objects are created from classes.
const person1 = new Person("Vishnu", 20);
const person2 = new Person("Sri", 22);
// Using object methods
person1.introduce();
person2.introduce();
// 4. INSTANCES
// person1 and person2 are instances
// of the Person class.
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
// 5. INHERITANCE
// One class can inherit properties
// and methods from another class.
class Student extends Person {
    // Constructor of child class
    constructor(name, age, course) {
        // super() calls parent constructor
        super(name, age);
        this.course = course;
    }
    // New method
    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}
// Creating objects of Student class
const student1 = new Student("Rahul", 19, "Data Science");
const student2 = new Student("Anu", 21, "JavaScript");
student1.introduce();
student2.introduce();
student1.study();
student2.study();
console.log("\n--- Object Details ---");
console.log(student1);
console.log(student2);
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
class Animal {
    constructor(type) {
        this.type = type;
    }
    sound() {
        console.log(`${this.type} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(type, breed) {
        super(type);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.breed} dog is barking.`);
    }
}
const dog1 = new Dog("Animal", "Golden Retriever");
dog1.sound(); // inherited method
dog1.bark();  // own method
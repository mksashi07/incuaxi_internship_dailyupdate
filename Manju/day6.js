// 1. CLASSES
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
const student1 = new Student("Sravya", 21);
console.log("----- CLASSES -----");
student1.display();
// 2. STATIC KEYWORD
class MathUtils {

    // Static method
    static add(a, b) {
        return a + b;
    }

    // Static property
    static pi = 3.14159;
}
console.log("\n----- STATIC KEYWORD -----");
console.log("Addition:", MathUtils.add(10, 20));
console.log("PI Value:", MathUtils.pi);

// 3. INHERITANCE
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}
const dog1 = new Dog("Tommy");
console.log("\n----- INHERITANCE -----");
dog1.sound();
dog1.bark();
// 4. SUPER KEYWORD
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
class Employee extends Person {
    constructor(name, role) {
        super(name); // Calls parent constructor
        this.role = role;
    }
    showRole() {
        console.log(`Role: ${this.role}`);
    }
    greet() {
        super.greet(); // Calls parent method
        console.log("Welcome Employee");
    }
}
const emp1 = new Employee("Rahul", "Developer");
console.log("\n----- SUPER KEYWORD -----");
emp1.greet();
emp1.showRole();
// 5. NESTED OBJECTS
const person = {
    name: "Sravya",
    age: 21,
    address: {
        city: "Anantapur",
        state: "Andhra Pradesh",
        pincode: 515001
    }
};
console.log("\n----- NESTED OBJECTS -----");
console.log(person.name);
console.log(person.address.city);
console.log(person.address.state);
// 6. ARRAY OF OBJECTS
const employees = [
    { id: 1, name: "Asha", salary: 30000 },
    { id: 2, name: "Kiran", salary: 45000 },
    { id: 3, name: "Ravi", salary: 40000 }
];
console.log("\n----- ARRAY OF OBJECTS -----");
employees.forEach(emp => {
    console.log(emp.name, emp.salary);
});
// 7. SORT
const numbers = [50, 10, 5, 90, 25];
console.log("\n----- SORT -----");
numbers.sort((a, b) => a - b); // Ascending
console.log("Ascending:", numbers);
numbers.sort((a, b) => b - a); // Descending
console.log("Descending:", numbers);
// 8. SORTING ARRAY OF OBJECTS
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Tablet", price: 30000 }
];

console.log("\n----- SORTING ARRAY OF OBJECTS -----");
// Sort by price ascending
products.sort((a, b) => a.price - b.price);

products.forEach(product => {
    console.log(product.name, product.price);
});
// 9. SHUFFLE ELEMENTS IN ARRAY
const cards = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("\n----- SHUFFLE ARRAY -----");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}
console.log("Before Shuffle:", cards);
shuffleArray(cards);
console.log("After Shuffle:", cards);
// 10. DATE OBJECTS
const currentDate = new Date();
console.log("\n----- DATE OBJECTS -----");
console.log("Current Date:", currentDate);
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1);
console.log("Date:", currentDate.getDate());
console.log("Day:", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
// CUSTOM date
const customDate = new Date("2026-05-22");
console.log("\nCustom Date:", customDate);
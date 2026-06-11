// ===============================
// Parent Class
// ===============================

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(
            `Hi, I'm ${this.name} and I'm ${this.age} years old.`
        );
    }

    // Static Method
    static species() {
        console.log("Humans belong to Homo sapiens.");
    }
}

// ===============================
// Child Class (Inheritance)
// ===============================

class Student extends Person {

    constructor(name, age, course) {

        // Call Parent Constructor
        super(name, age);

        this.course = course;
    }

    study() {
        console.log(
            `${this.name} is studying ${this.course}.`
        );
    }

    // Method Overriding
    introduce() {
        console.log(
            `Hi, I'm ${this.name}, ${this.age} years old, and learning ${this.course}.`
        );
    }
}

// ===============================
// Create Objects
// ===============================

const person1 = new Person(
    "Rahul",
    25
);

const student1 = new Student(
    "MSK",
    20,
    "JavaScript"
);

// ===============================
// Method Calls
// ===============================

person1.introduce();

student1.introduce();

student1.study();

// ===============================
// Static Method Call
// ===============================

Person.species();
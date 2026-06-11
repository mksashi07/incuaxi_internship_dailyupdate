// JAVASCRIPT ADVANCED CONCEPTS
// Functions, Objects, Classes, Async
// Function Declaration
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));
// Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Multiplication:", multiply(5, 4));
// Arrow Function
const square = num => num * num;
console.log("Square:", square(6));
// Default Parameters
function greet(name = "Guest") {
    return `Welcome ${name}`;
}
console.log(greet());
console.log(greet("Pavithra"));
// Rest Parameters
function totalMarks(...marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total;
}
console.log("Total Marks:", totalMarks(90, 85, 88, 95));
// OBJECTS
const student = {
    name: "Pavithra",
    age: 21,
    course: "B.Tech",
    displayInfo() {
        console.log(
            `Name: ${this.name},
Age: ${this.age},
Course: ${this.course}`
        );
    }
};
student.displayInfo();
// Access Object Properties
console.log(student.name);
console.log(student["course"]);
// Add Property
student.city = "Nellore";
// Update Property
student.age = 22;
// Delete Property
delete student.course;
console.log(student);
// Object Destructuring
const employee = {
    empId: 101,
    empName: "Ravi",
    salary: 50000
};
const { empId, empName, salary } = employee;
console.log(empId);
console.log(empName);
console.log(salary);
// Object Keys
console.log(Object.keys(employee));
// Object Values
console.log(Object.values(employee));
// CLASSES
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showDetails() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}`
        );
    }
}
const person1 = new Person(
    "Pavithra",
    21
);
person1.showDetails();
// Inheritance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    displayStudent() {
        console.log(
            `Name: ${this.name},
Age: ${this.age},
Course: ${this.course}`
        );
    }
}
const student1 = new Student(
    "Anu",
    20,
    "Computer Science"
);
student1.displayStudent();
// ENCAPSULATION
class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(5000);
account.withdraw(1000);
console.log(
    "Balance:",
    account.getBalance()
);
// ASYNCHRONOUS
// PROMISE
const myPromise = new Promise(
    (resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve(
                    "Promise Resolved"
                );
            } else {
                reject(
                    "Promise Rejected"
                );
            }
        }, 3000);
    }
);
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
// ASYNC AWAIT
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Pavithra",
                city: "Nellore"
            });
        }, 2000);
    });
}
async function displayUser() {
    console.log(
        "Loading User..."
    );
    const user = await getUser();
    console.log(
        "User Data:"
    );
    console.log(user);
}
displayUser();
// MAP FUNCTION
const numbers =
    [1, 2, 3, 4, 5];
const doubled =
    numbers.map(
        num => num * 2
    );
console.log(doubled);
// FILTER FUNCTION
const ages =
    [12, 18, 20, 15, 25];
const adults =
    ages.filter(
        age => age >= 18
    );
console.log(adults);
// END OF PROGRAM
console.log(
    "JavaScript Advanced Concepts Completed"
);

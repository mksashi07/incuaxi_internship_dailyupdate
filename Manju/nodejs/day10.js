// 1. Readline Module
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log(`Hello, ${name}!`);
    // 2. let and const
    let age = 22;
    const country = "India";
    console.log(age);
    console.log(country);
    // 3. Template Literals
    console.log(`My name is ${name}, Age is ${age}`);
    // 4. Arrow Functions
    const add = (a, b) => a + b;
    console.log("Addition:", add(10, 20));
    // 5. Default Parameters
        function greet(user = "Guest") {
        console.log(`Welcome ${user}`);
    }

    greet();
    greet(name);
    // 6. Rest Operator
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }

    console.log("Sum:", sum(1, 2, 3, 4, 5));
    // 7. Spread Operator
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];

    console.log("Spread Array:", arr2);
        // 8. Destructuring
    const student = {
        id: 101,
        sname: "Sravya",
        course: "Node.js"
    };

    const { id, sname, course } = student;

    console.log(id, sname, course);

    // 9. Enhanced Object Literals
    const city = "Vijayawada";

    const person = {
        name,
        age,
        city
    };

    console.log(person);
    // 10. Classes
    class Employee {
        constructor(empName, salary) {
            this.empName = empName;
            this.salary = salary;
        }

        display() {
            console.log(`Employee: ${this.empName}, Salary: ${this.salary}`);
        }
    }

    const emp1 = new Employee("John", 50000);
    emp1.display();
    // 11. Promises
    const promiseExample = new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("Promise Resolved");
        } else {
            reject("Promise Rejected");
        }
    });
    promiseExample
        .then(result => console.log(result))
        .catch(error => console.log(error));
            // 12. Async / Await
    async function fetchData() {
        return "Data Received";
    }
    async function displayData() {
        const result = await fetchData();
        console.log(result);
    }
    displayData(); 
    // 13. Map
    const marks = [50, 60, 70];
    const updatedMarks = marks.map(mark => mark + 5);
    console.log(updatedMarks);
    // 14. Filter
    const numbers = [10, 15, 20, 25, 30];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers);
    // 15. for...of Loop
    for (const num of numbers) {
        console.log("Number:", num);
    }

    rl.close();
});
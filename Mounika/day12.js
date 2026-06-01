(function () {

    function greet(name) {
        return `Hello ${name}`;
    }

    console.log(greet("Mounika"));

    function add(a, b) {
        return a + b;
    }

    console.log("Addition:", add(10, 20));

    const subtract = function (a, b) {
        return a - b;
    };

    console.log("Subtraction:", subtract(30, 10));

    const multiply = (a, b) => a * b;

    console.log("Multiplication:", multiply(5, 6));

    function employee(name = "Unknown", role = "Trainee") {
        return `${name} - ${role}`;
    }

    console.log(employee("Venky", "Developer"));

    function total(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    console.log("Total:", total(10, 20, 30, 40));

    function execute(name, callback) {
        console.log("Processing:", name);
        callback();
    }

    execute("Neha", () => {
        console.log("Callback Executed");
    });

    function factorial(n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }

    console.log("Factorial:", factorial(5));

    const numbers = [10, 20, 30, 40, 50];

    console.log("Map:", numbers.map(num => num * 2));

    console.log("Filter:", numbers.filter(num => num % 2 === 0));

    console.log(
        "Reduce:",
        numbers.reduce((acc, num) => acc + num, 0)
    );

    const student = {
        name: "Mounika",
        marks: 95,
        display() {
            return `${this.name} - ${this.marks}`;
        }
    };

    console.log(student.display());

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    const person = new Person("Venky", 22);

    console.log(person.name, person.age);

    function reverseString(text) {
        return text.split("").reverse().join("");
    }

    console.log(reverseString("JavaScript"));

    function isPrime(num) {
        if (num <= 1) return false;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }

        return true;
    }

    console.log("Prime:", isPrime(13));

    setTimeout(() => {
        console.log("Timer Executed");
    }, 1000);

    const promise = new Promise(resolve => {
        resolve("Promise Resolved");
    });

    promise.then(result => console.log(result));

    async function getData() {
        return "Async Data";
    }

    getData().then(data => console.log(data));

})();
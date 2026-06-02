// app.js

const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

function message() {
    console.log("Welcome to Node.js");
}

const name = "Surya Teja";
const city = "pamulapadu";

function greet() {
    console.log("Hello Mounika");
}

console.log(add(10, 5));
console.log(sub(20, 10));
console.log(multiply(5, 5));
console.log(divide(20, 2));

message();
greet();

console.log(name);
console.log(city);

const math = {
    add,
    sub,
    multiply,
    divide
};

console.log(math.add(2, 3));
console.log(math.sub(8, 2));

const numbers = [10, 20, 30, 40, 50];

numbers.forEach((num) => {
    console.log(num);
});

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

const filtered = numbers.filter((num) => {
    return num > 20;
});

console.log(filtered);

const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);

console.log(numbers.find((num) => num > 25));

console.log(numbers.every((num) => num > 5));

console.log(numbers.some((num) => num > 45));

const fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Orange");
console.log(fruits);
console.log(fruits.includes("Banana"));
console.log(fruits.indexOf("Banana"));
console.log(fruits.join(" - "));

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log(this.name);
        console.log(this.marks);
    }
}
const s1 = new Student("Surya", 95);
s1.display();
console.log("Program Completed");
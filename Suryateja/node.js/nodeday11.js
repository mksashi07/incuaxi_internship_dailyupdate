// app.js

const addMarks = (m1, m2) => {
    return m1 + m2;
};

const subtractMarks = (m1, m2) => {
    return m1 - m2;
};

const calculateArea = (length, width) => {
    return length * width;
};

const calculateAverage = (total, subjects) => {
    return total / subjects;
};

function welcome() {
    console.log("Welcome to JavaScript");
}

const studentName = "Ravi";
const college = "ABC College";

function sayHello() {
    console.log("Hello Student");
}

console.log(addMarks(80, 15));
console.log(subtractMarks(90, 20));
console.log(calculateArea(10, 5));
console.log(calculateAverage(500, 5));

welcome();
sayHello();

console.log(studentName);
console.log(college);

const calculator = {
    addMarks,
    subtractMarks,
    calculateArea,
    calculateAverage
};
console.log(calculator.addMarks(50, 25));
console.log(calculator.subtractMarks(100, 30));

const ages = [18, 21, 25, 30, 35];
ages.forEach((age) => {
    console.log(age);
});
const increasedAges = ages.map((age) => {
    return age + 1;
});
console.log(increasedAges);

const adultAges = ages.filter((age) => {
    return age >= 21;
});
console.log(adultAges);

const ageTotal = ages.reduce((sum, age) => {
    return sum + age;
}, 0);
console.log(ageTotal);
console.log(ages.find((age) => age > 22));
console.log(ages.every((age) => age > 15));
console.log(ages.some((age) => age > 32));

const colors = ["Red", "Blue"];
colors.push("Green");
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("Yellow");
console.log(colors);
console.log(colors.includes("Blue"));
console.log(colors.indexOf("Blue"));
console.log(colors.join(" | "));

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
    }
}
const emp1 = new Employee("Kiran", 50000);
emp1.display();
console.log("Program Finished");
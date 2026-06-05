/*---------------------------------------
18. SET
---------------------------------------*/
const set = new Set([1, 2, 2, 3]);

console.log(set);

/*---------------------------------------
19. MAP
---------------------------------------*/
const map = new Map();

map.set("name", "JavaScript");
map.set("version", "ES2025");

console.log(map.get("name"));

/*---------------------------------------
20. CLASS
---------------------------------------*/
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    show() {
        console.log(`${this.name} earns ${this.salary}`);
    }
}

const emp = new Employee("David", 50000);
emp.show();

/*---------------------------------------
21. INHERITANCE
---------------------------------------*/
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    details() {
        console.log(`${this.name} - ${this.department}`);
    }
}

const mgr = new Manager(
    "Sarah",
    80000,
    "IT"
);

mgr.details();

/*---------------------------------------
22. CALLBACK
---------------------------------------*/
function greet(user, callback) {
    console.log("Hello", user);
    callback();
}

greet("John", () => {
    console.log("Callback Executed");
});

/*---------------------------------------
23. PROMISE
---------------------------------------*/
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Success");
    }, 1000);
});

promise.then(result => console.log(result));

/*---------------------------------------
24. ASYNC / AWAIT
---------------------------------------*/
async function fetchData() {
    return "Data Loaded";
}

async function run() {
    const result = await fetchData();
    console.log(result);
}

run();

/*---------------------------------------
25. ERROR HANDLING
---------------------------------------*/
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Finally Block");
}

/*---------------------------------------
26. OPTIONAL CHAINING
---------------------------------------*/
const employee = {
    info: {
        city: "Hyderabad"
    }
};

console.log(employee?.info?.city);

/*---------------------------------------
27. NULLISH COALESCING
---------------------------------------*/
let username = null;

console.log(username ?? "Guest");

/*---------------------------------------
28. SYMBOL
---------------------------------------*/
const uniqueId = Symbol("id");
console.log(uniqueId);

/*---------------------------------------
29. MODULE STYLE OBJECT
---------------------------------------*/
const Calculator = {
    add(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a - b;
    }
};

console.log(Calculator.add(10, 5));

/*---------------------------------------
30. REGULAR EXPRESSIONS
---------------------------------------*/
const email = "test@gmail.com";

const pattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test(email));

console.log("=== REVISION COMPLETED ===");

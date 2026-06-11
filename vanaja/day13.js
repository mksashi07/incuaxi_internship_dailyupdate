const EventEmitter = require("events");
console.log("\n REFLECT API ");
const person = {
    name: "Vishnu",
    age: 20
};
console.log("Name:", Reflect.get(person, "name"));
Reflect.set(person, "city", "Vijayawada");
console.log("After Set:", person);
console.log("Has age?", Reflect.has(person, "age"));
Reflect.deleteProperty(person, "age");
console.log("After Delete:", person);
console.log("Keys:", Reflect.ownKeys(person));
console.log("\nWEAKMAP ");
const weakMap = new WeakMap();
let user = {
    id: 101,
    name: "Ram"
};
weakMap.set(user, {
    role: "Student"
});
console.log("WeakMap Value:", weakMap.get(user));
console.log("Exists:", weakMap.has(user));
console.log("\nWEAKSET ");
const weakSet = new WeakSet();
let student = {
    name: "Krishna"
};
weakSet.add(student);
console.log(
    "Student Exists:",
    weakSet.has(student)
);
console.log("\nEVENT EMITTER ");
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
emitter.on("userLogin", (name) => {
    console.log(`${name} logged in`);
});
emitter.on("userLogin", (name) => {
    console.log(`Welcome ${name}`);
});
emitter.emit("userLogin", "Vishnu");
console.log("\nEVENT PROPAGATION SIMULATION ");
const propagationEmitter =
    new EventEmitter();
propagationEmitter.on(
    "parent",
    () => {
        console.log(
            "Parent Event Executed"
        );
    }
);
propagationEmitter.on(
    "child",
    () => {
        console.log(
            "Child Event Executed"
        );
        console.log(
            "Propagation Stopped"
        );
    }
);
propagationEmitter.emit("child");
console.log("\nPROXY + REFLECT ");
const employee = {
    name: "Ravi",
    salary: 50000
};
const proxy = new Proxy(
    employee,
    {
        get(target, property) {
            console.log(
                `Getting ${property}`
            );
            return Reflect.get(
                target,
                property
            );
        },
        set(target, property, value) {
            console.log(
                `Setting ${property}`
            );
            return Reflect.set(
                target,
                property,
                value
            );
        }
    }
);
console.log(proxy.name);
proxy.salary = 60000;
console.log(proxy);
console.log("\nMAP");
const map = new Map();
map.set(1, "JavaScript");
map.set(2, "Node.js");
console.log(map);
console.log(map.get(1));
console.log("\nSET");
const set = new Set();
set.add("HTML");
set.add("CSS");
set.add("JavaScript");
set.add("JavaScript");
console.log(set);
console.log("\nPROMISE ");
const promise =
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                "Promise Resolved"
            );
        }, 1000);
    });
promise.then((result) => {
    console.log(result);
});
console.log("\nASYNC / AWAIT ");
async function getData() {
    const result =
        await Promise.resolve(
            "Async Await Success"
        );
    console.log(result);
}
getData();
console.log("\n========== GENERATOR ==========");
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const generator =
    numberGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log("\n========== CURRYING ==========");
function multiply(a) {
    return function(b) {

        return a * b;
    };
}
console.log(
    multiply(5)(10)
);
console.log("\n========== CLOSURE ==========");
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(
            "Count:",
            count
        );

    };
}
const increment =
    counter();
increment();
increment();
increment();
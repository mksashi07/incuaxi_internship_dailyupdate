// ASYNC & AWAIT IN JAVASCRIPT
// 1. async Function
async function greet() {
    return "Hello Async";
}

greet().then(res => console.log(res));


// 2. await Keyword
function delay() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task Completed"), 2000);
    });
}

async function runTask() {
    console.log("Start");

    const result = await delay();

    console.log(result);
    console.log("End");
}

runTask();


// 3. Promise vs Async/Await

// Promise Style
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log("Promise:", data))
.catch(err => console.log(err));


// Async/Await Style
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        console.log("Async/Await:", data);

    } catch(error) {
        console.log(error);
    }
}

getUsers();


// 4. Error Handling
async function checkError() {

    try {

        let result = await Promise.reject("Something Went Wrong");

        console.log(result);

    } catch(error) {

        console.log("Error:", error);

    }

}

checkError();


// 5. Sequential Execution
async function sequential() {

    const first = await Promise.resolve("First");
    console.log(first);

    const second = await Promise.resolve("Second");
    console.log(second);

}

sequential();


// 6. Parallel Execution
async function parallel() {

    const results = await Promise.all([
        Promise.resolve("Task 1"),
        Promise.resolve("Task 2"),
        Promise.resolve("Task 3")
    ]);

    console.log(results);

}

parallel();


export function add(a,b){
  return a+b;
}

export const PI = 3.14;

export default function msg(){
  return "Modules Learned";
}

async function loadModule(){
  const math = await import('./math.js');
  console.log(math.add(2,3));
}

loadModule();

//JavaScript Metaprogramming

// Object Inspection
const user = {
  name: "Jan",
  age: 40
};

console.log(Object.keys(user));


// Object Modification
const person = {
  name: "John",
  age: 41
};

Object.defineProperty(person, "name", {
  get() {
    return "secret";
  }
});

console.log(person.name);


// Dynamic Function
const add = new Function(
  "a",
  "b",
  "return a + b"
);

console.log(add(2, 3));


// Reflect Methods
const obj = {
  name: "Sam",
  age: 25
};

console.log(Reflect.get(obj, "name"));

Reflect.set(obj, "age", 26);

console.log(obj.age);

console.log(Reflect.has(obj, "age"));

Reflect.deleteProperty(obj, "age");

console.log(obj);


// Proxy + Reflect
const userProxy = {
  name: "Jan",
  age: 40
};

const proxy = new Proxy(userProxy, {

  get(target, prop, receiver) {
    console.log("Getting:", prop);

    return Reflect.get(
      target,
      prop,
      receiver
    );
  },

  set(target, prop, value, receiver) {
    console.log("Setting:", prop, value);

    return Reflect.set(
      target,
      prop,
      value,
      receiver
    );
  }
});

proxy.name = "John";

console.log(proxy.name);


// Validation using Proxy
const account = {
  balance: 1000
};

const validate = new Proxy(account, {

  set(target, prop, value) {

    if (prop === "balance" && value < 0) {
      throw new Error(
        "Balance cannot be negative"
      );
    }

    return Reflect.set(
      target,
      prop,
      value
    );
  }
});

validate.balance = 500;

console.log(validate.balance);
// 1. LET / CONST
let username = "Ayesha";
const country = "India";

console.log("User:", username);
console.log("Country:", country);

// 2. TEMPLATE LITERALS
console.log(`Welcome ${username} from ${country}`);

// 3. ARROW FUNCTIONS
const add = (a, b) => a + b;
console.log("Addition:", add(10, 20));

// 4. DEFAULT PARAMETERS
const greet = (name = "Guest") => {
  console.log(`Hello ${name}`);
};
greet();
greet("Node.js");

// 5. DESTRUCTURING
const student = {
  id: 101,
  name: "Rahul",
  course: "Node.js"
};
const { id, name, course } = student;
console.log(id, name, course);

// 6. SPREAD OPERATOR
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const merged = [...numbers1, ...numbers2];

console.log("Merged Array:", merged);

// 7. REST PARAMETERS
const totalMarks = (...marks) => {
  return marks.reduce((sum, value) => sum + value, 0);
};
console.log("Total Marks:", totalMarks(90, 80, 70));

// 8. CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
const p1 = new Person("Kiran", 22);
p1.show();

// 9. PROMISES
const promiseExample = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promiseExample
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// 10. ASYNC / AWAIT
const fetchData = async () => {
  return "Async Data Received";
};
const runAsync = async () => {
  const result = await fetchData();
  console.log(result);
};
runAsync();

// 11. OPTIONAL CHAINING
const user = {
  profile: {
    email: "test@gmail.com"
  }
};
console.log("Email:", user?.profile?.email);

// 12. NULLISH COALESCING
let city = null;
console.log("City:", city ?? "Vijayawada");

// 13. MAP
const nums = [1, 2, 3, 4];

const squares = nums.map((n) => n * n);

console.log("Squares:", squares);

// 14. FILTER
const evenNumbers = nums.filter((n) => n % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 15. REDUCE
const sum = nums.reduce((acc, value) => acc + value, 0);
console.log("Sum:", sum);

// 16. SET
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
console.log("Unique Values:", [...uniqueNumbers]);

// 17. MAP OBJECT
const map = new Map();
map.set("name", "NodeJS");
map.set("version", "ES6+");
console.log("Map Data:");
console.log(map.get("name"));
console.log(map.get("version"));

// 18. NODE PROCESS OBJECT

// Process ID
console.log("Process ID:", process.pid);

// Current Working Directory
console.log("Current Directory:", process.cwd());

// Platform
console.log("Platform:", process.platform);

// Node Version
console.log("Node Version:", process.version);

// Memory Usage
console.log("Memory Usage:", process.memoryUsage());

// Environment Variable
console.log("PATH Variable:", process.env.PATH);

// 19. PROCESS EVENTS
process.on("exit", (code) => {
  console.log(`Process exited with code ${code}`);
});

// 20. COMMAND LINE ARGUMENTS
console.log("Command Line Arguments:");
console.log(process.argv);

// 21. TIMER
setTimeout(() => {
  console.log("setTimeout Executed");
}, 1000);

// 22. INTERVAL
let count = 0;

const interval = setInterval(() => {
  count++;
  console.log(`Interval Count: ${count}`);
  if (count === 3) {
    clearInterval(interval);
    console.log("Interval Stopped");
  }
}, 1000);

// 23. MODULE EXPORT STYLE EXAMPLE
const math = {
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
console.log("Multiply:", math.multiply(5, 4));
console.log("Divide:", math.divide(20, 5));

// 24. BIGINT
const bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// 25. SYMBOL
const uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

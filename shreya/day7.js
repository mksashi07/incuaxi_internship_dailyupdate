//  Object introdtuction
const person = {
  name: "Shreya",
  age: 21,
  city: "Hyderabad"
};
console.log(person);
console.log(person.name);
//object path
const student = {
  name: "Riya",
  address: {
    city: "Narasapur",
    pin: 534275
  }
};
console.log(student.address.city);
console.log(student["address"]["pin"]);
// object properties
const car = {
  brand: "Toyota",
  model: "Camry"
};
car.color = "Black";
car.model = "Fortuner";
delete car.brand;
console.log(car);
// object methods
const user = {
  firstName: "Shreya",
  lastName: "Jangam",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(user.fullName());
//object this
const employee = {
  name: "Ravi",
  salary: 50000,
  details: function () {
    console.log(this.name);
    console.log(this.salary);
  }
};
employee.details();

//object display
const obj = {
  name: "Shreya",
  age: 21
};
console.log(obj);
console.log(JSON.stringify(obj));
console.log(Object.values(obj));
// object constructor
function Student(name, age) {
  this.name = name;
  this.age = age;
}
const s1 = new Student("Shreya", 21);
const s2 = new Student("Ravi", 22);
console.log(s1);
console.log(s2);
//object defination
const person1 = {
  name: "Ram"
};
const person2 = new Object();
person2.name = "Krishna";
console.log(person1);
console.log(person2);
//object iterations
const details = {
  name: "Shreya",
  age: 21,
  course: "BTech"
};
for (let key in details) {
  console.log(key + " : " + details[key]);
}
//object get/set
const account = {
  firstName: "Shreya",
  lastName: "Jangam",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set changeName(name) {
    this.firstName = name;
  }
};
console.log(account.fullName);
account.changeName = "Riya";
console.log(account.fullName);
//object management 
const data = {
  name: "Shreya",
  age: 21
};
console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));
//object protection
const freezeObj = {
  name: "Shreya"
};
Object.freeze(freezeObj);
freezeObj.name = "Ravi";
console.log(freezeObj);
const sealObj = {
  city: "Hyderabad"
};
Object.seal(sealObj);
sealObj.city = "Delhi";
console.log(sealObj);
//object prototype
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};
const p1 = new Person("Shreya");
p1.greet();
//date introduction
const date = new Date();
console.log(date);
//date formats
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
//date get methods
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
//date set methods
date.setFullYear(2030);
date.setMonth(5);
console.log(date);
//date methods
console.log(date.getTime());
console.log(date.getDay());
console.log(date.toUTCString());
//regular expression introduction
const text = "Hello JavaScript";
const pattern = /JavaScript/;
console.log(pattern.test(text));
//regexp flags
const txt = "HELLO hello";
console.log(txt.match(/hello/gi));
//regexp classes
const value = "123abc";
console.log(value.match(/[a-z]/g));
console.log(value.match(/[0-9]/g));
//regexp metacharacters
const str = "JavaScript";
console.log(/^Java/.test(str));
console.log(/Script$/.test(str));
//regular assertions
const message = "hello world";
console.log(/hello(?= world)/.test(message));
//regexp groups
const result = "2025-05-25".match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(result);
//regexp quantifiers
const word = "Helloooo";
console.log(/o+/.test(word));
console.log(/lo*/.test(word));
console.log(/Hel?o/.test(word));
//regexp patterns
const email = "test@gmail.com";
const emailPattern =
/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
console.log(emailPattern.test(email));
//regexp objects
const regex = new RegExp("JavaScript");
console.log(regex.test("I love JavaScript"));
//regexp methods
// test()
const reg1 = /hello/;
console.log(reg1.test("hello world"));
// exec()
const reg2 = /world/;
console.log(reg2.exec("hello world"));
// match()
console.log("hello".match(/h/));
// replace()
console.log("hello world".replace("world", "JS"));
// search()
console.log("hello world".search(/world/));
console.log(5 == "5");
console.log(5 === "5");
// spread operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);
//rest operator
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));
// object destructuring
const profile = {
  username: "Shreya",
  userage: 21
};
const { username, userage } = profile;
console.log(username);
console.log(userage);
//optional chaning
const customer = {
  address: {
    city: "Hyderabad"
  }
};
console.log(customer?.address?.city);
console.log(customer?.contact?.phone);
//nullish coalescing
let value1 = null;
console.log(value1 ?? "Default Value");
//array iteration
const numbers = [1, 2, 3, 4, 5];
// map()
const mapResult = numbers.map(num => num * 2);
console.log(mapResult);
// filter()
const filterResult = numbers.filter(num => num > 2);
console.log(filterResult);
// reduce()
const reduceResult = numbers.reduce((a, b) => a + b);
console.log(reduceResult);
// some()
console.log(numbers.some(num => num > 4));
// every()
console.log(numbers.every(num => num > 0));
// find()
console.log(numbers.find(num => num > 3));
//array sort
const nums = [40, 100, 1, 5, 25];
nums.sort((a, b) => a - b);
console.log(nums);
//array search
const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("mango"));
//string iteration
const language = "JavaScript";
for (let char of language) {
  console.log(char);
}
//set iteration
const set = new Set([1, 2, 3]);
for (let value of set) {
  console.log(value);
}
//map iterations
const map = new Map([
  ["name", "Shreya"],
  ["age", 21]
]);
for (let [key, value] of map) {
  console.log(key, value);
}
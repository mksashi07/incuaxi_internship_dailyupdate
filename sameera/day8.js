//CLASSES and OBJECTSIN JS
//objects are a collection of properties and methods
let dog = { dogName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua"
          };
//CLASS syntax in js
class ClassName {
   constructor(prop1, prop2) {
    this.prop1 = prop1;
this.prop2 = prop2;
}
}
//object with a special function
function Dog(dogName, weight, color, breed) {
this.dogName = dogName;
this.weight = weight;
this.color = color;
this.breed = breed;
}
let dog = new Dog("Jacky", 30, "brown", "labrador");
//class syntax
class Dog {
constructor(dogName, weight, color, breed) {
this.dogName = dogName;
this.weight = weight;
this.color = color;
this.breed = breed;
}
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,
"kg.");
//CLASSES
let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname);

let p = new Person("Maaike");
console.log("Hi", p.firstname, p.lastname);

//METHODS Functions on a class
class Person {
constructor(firstname, lastname) {
this.firstname = firstname;
this.lastname = lastname;
}
greet() {
console.log("Hi there! I'm", this.firstname);
}
}
//Properties
class Person {
constructor(firstname, lastname) {
this.firstname = firstname;
this.lastname = lastname;
}
}
//Getters
class Person {
#firstname;
#lastname;
constructor(firstname, lastname) {
this.#firstname = firstname;
this.#lastname = lastname;
}
get firstname() {
return this.#firstname;
}
set firstname(firstname) {
this.#firstname = firstname;
}
get lastname() {
return this.#lastname;
}
set lastname(lastname) {
this.#lastname = lastname;
}
}
//Inheritance
class Vehicle {
constructor(color, currentSpeed, maxSpeed) {
this.color = color;
this.currentSpeed = currentSpeed;
this.maxSpeed = maxSpeed;
}
move() {
console.log("moving at", this.currentSpeed);
}
accelerate(amount) {
this.currentSpeed += amount;
}
}
//Prototype
class Person {
constructor(firstname, lastname) {
this.firstname = firstname;
this.lastname = lastname;
}
greet() {
console.log("Hi there!");
}
}
Person.prototype.introduce = function () {
console.log("Hi, I'm", this.firstname);
};
//Built in JS
// 1.Global Method
let x = 7;
console.log(Number.isNaN(x));
//You can also write:
console.log(isNaN(x));
// 2.decodeUri() and encodeUri()
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);
//Array methods
let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);
//filtering an array
let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);
//Mapping the values of an array
let arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);
//String Methods
//Combining Strings
let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);
//converting string to array
let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);
//converting array to string
let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);
//creating substrings
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);
//replacing parts of the string
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);
//uppercase and lowercase
let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);
//Number methods
let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str = "hi";
console.log(isNaN(str));

//Date methods
//creating dates
let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1000);
console.log(milliDate);

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);
//Methods to get and set the elements of a date
let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

//JS asynchronous programming

//function sequence
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();
//JS Timeouts
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
//setting intervals
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
//JS Modules
// Export an "add" function
export function add(a, b) {
  return a + b;
}
// Import an "add" function
import { add } from './math.js';
let result = add(2, 3);
//js module export
//Module File "person.js"
// export name and age
export const name = "Jesse";
export const age = 40;
const name = "Jesse";
const age = 40;

// export name and age
export { name, age };

//module script
<script type="module">

// Import name and age
import { name, age } from "./person.js";

</script>

//module file math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}

//modify objects
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}
//Proxy Metaprogramming
// Create an Object
const user = {name: "Jan", age: 40};

// Wrap the Object in a Proxy
const proxy = new Proxy(user, {
  // Use a set trap
  set(target, property, value) {
    // Log changes
    log(property + "; " + value);
    return target[property];
  }
});

// Change Properties
proxy.name = "John";
proxy.age = 45;
proxy.name = "Paul";
//proxy with reflect
// Create an Object
const user = {name: "Jan", age: 40};

// Wrap the Object in a Proxy
const proxy = new Proxy(user, {
  // Use a set trap
  set(target, property, value) {
    // Log changes
    log(property + ": " + value);
    // Safe forwarding with Reflect
    return Reflect.set(target, property, value);
  }
});

//JS HTML DOM Navigation
 <html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
</script>

</body>
</html>

const element = document.getElementById("div1");
element.appendChild(para);
//API
//Get the latitude and longitude of the user's position:

const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
//A Fetch API Example
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}

//HTML DOM
//Accessing HTML Elements
html>
<body>

<p id="demo"></p>

<script>
// Access a paragraph Element
const myPara = document.getElementById("demo");

// Change the content of the Element
myPara.innerHTML = "Hello World!";
</script>

</body>
</html>

//Advanced JS

// Function Declaration
function myFunction(x, y) {
  return x * y;
}

// Function Expression (Named)
const myFunction = function name(x, y) {
  return x * y;
};

// Function Expression (Anonymous)
const myFunction = function (x, y) {
  return x * y;
};

// Arrow Function
const myFunction = (x, y) => x * y;

// Function Constructor
const myFunction = new Function("x", "y", "return x * y");

// Object Method
const obj = {
  myFunction(x, y) {
    return x * y;
  },
};
//Function Declaration syntax
function functionName(parameters) {
  // code to be executed
}
function myFunction(a, b) {
  return a * b;
}
//Function expressions
const x = function (a, b) {return a * b};

let z = x(4, 3);
//Functions Stored in Variables
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3);
//The Function() Constructor
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
//Functions are Objects
function multiply(a, b) {
  return arguments.length;
}

// Returns 0
multiply();

// Returns 2
multiply(a, b);
//Sequence Control
/ Funtion to display something
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// Function to calculate a sum
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// Call the calculator
let result = myCalculator(5, 5);

// Call the displayer
myDisplayer(result);
//The JavaScript this Keyword
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName();
//arrow functions
const person = {
  firstName: "John",
  sayHello: () => {
    return this.firstName;
  }
};

person.sayHello();
//Basic call syntax
functionName.call(this, arg1, arg2);
// greet function
const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet(greeting) {
  return greeting + " " + this.name;
}

greet.call(person3, "Hello");
//Borrowing a Method from Another Object

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
//The call() Method with Arguments
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

//JS Function Apply syntax
functionName.apply(this, [arg1, arg2,]);
const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet(greeting) {
  return greeting + " " + this.name;
}

greet.apply(person3, ["Hello"]);

//Borrowing a Method from Another Object
//Create a person Object
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

// Create a person1 Object
const person1 = {
  firstName:"John",
  lastName: "Doe"
}

// Create a person2 Object
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
//Basic Bind()syntax
const newFunction = functionName.bind(this, arg1, arg2,);

// Create person Object
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// Create member Object
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

// Bind the fullName method to the member Object
let fullName = person.fullName.bind(member);

// Later call fullname()
fullname()

//comparison of call(),apply(),bind()
// Call a function
greet.call(person);

// Call a function
greet.apply(person);

// Create a new function
const greetLater = greet.bind(person);

// Call the new function
greetLater();












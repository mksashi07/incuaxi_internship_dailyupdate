// JS STRINGS
// JS FUNCTIONS
// JS DATES
// JS ARRAYS
// JS OBJECTS
// TYPE CASTING / CONVERSIONS
// JS MATH


 
// JS STRINGS

// String
let name = "Ayesha";
console.log(name);

// String Template
let user = "Ayesha";
let age = 20;
console.log(`My name is ${user} and age is ${age}`);

// String Methods
let text = "JavaScript";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0,4));
console.log(text.replace("Java","Type"));

// String Search
let msg = "I love JavaScript";
console.log(msg.indexOf("love"));
console.log(msg.includes("Java"));

// String Reference
let str = "Hello";
console.log(str.charAt(1));
console.log(str[2]);



// JS FUNCTIONS


// Function Intro
function greet(){
    console.log("Hello");
}
greet();

// Function Invocation
function add(){
    console.log(10+20);
}
add();

// Function Parameters
function sum(a,b){
    console.log(a+b);
}
sum(5,6);

// Function Returns
function multiply(a,b){
    return a*b;
}
let result = multiply(4,5);
console.log(result);

// Function Arguments
function display(){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
display("Ayesha",100);

// Function Expression
const welcome = function(){
    console.log("Welcome");
};
welcome();

// Arrow Function
const square=(num)=>{
    return num*num;
};
console.log(square(5));

// Function Path
function first(){
    second();
}
function second(){
    console.log("called");
}
first();

// Function Quiz
function x(a=10){
    return a;
}
console.log(x());



// JS DATES


let d = new Date();

console.log(d);
console.log(d.toDateString());
console.log(d.toISOString());

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());

d.setFullYear(2030);

console.log(d);
console.log(d.getHours());
console.log(d.getMinutes());



// JS ARRAYS


// Array
let fruits=["apple","banana","mango"];
console.log(fruits);

// Array Methods
let arr=[1,2,3];
arr.push(4);
arr.pop();
console.log(arr);

// Array Search
let nums=[10,20,30];
console.log(nums.indexOf(20));
console.log(nums.includes(30));

// Array Sort
let numbers=[5,1,8,2];
numbers.sort();
console.log(numbers);

// Array Iterations
let values=[1,2,3];
values.forEach(function(item){
    console.log(item);
});

// Array Reference
let letters=["a","b","c"];
console.log(letters[1]);

// Array Const
const cars=["BMW","Audi"];
cars.push("Benz");
console.log(cars);



// JS OBJECTS


// Object Intro
let person={
    name:"Ayesha",
    age:20
};

console.log(person);

// Object Properties
console.log(person.name);

// Object Methods
let employee={
    name:"John",

    greet:function(){
        return "Hello";
    }
};

console.log(employee.greet());

// Object this
let student={
    name:"Ali",

    show:function(){
        console.log(this.name);
    }
};

student.show();

// Object Display
console.log(JSON.stringify(person));

// Object Constructor
function Student(name,age){
    this.name=name;
    this.age=age;
}

let s1=new Student("Ayesha",20);

console.log(s1);

// Object Path
let data={
    user:{
        city:"Hyderabad"
    }
};

console.log(data.user.city);



// TYPE CASTING / CONVERSIONS


// String to Number
let value="100";
console.log(Number(value));

// Number to String
let num=123;
console.log(String(num));

// Boolean Conversion
console.log(Boolean(1));
console.log(Boolean(0));

// parseInt
let a="25px";
console.log(parseInt(a));

// parseFloat
let b="10.56";
console.log(parseFloat(b));



// JS MATH


// Math Methods
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));

// Math Random
let random=Math.random();
console.log(random);

// Random Number 1–10
let randomNum=Math.floor(Math.random()*10)+1;
console.log(randomNum);

// Math Reference
console.log(Math.PI);
console.log(Math.max(10,50,20));
console.log(Math.min(10,50,20));
console.log(Math.abs(-9));
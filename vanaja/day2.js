console.log('Hii');
//window.alert('alert msg');
document.getElementById("h1").textContent="Hello";
document.getElementById("para").textContent="sir";
let y=90;
console.log(y)
let name="vanaja";
let rollno=96;
let cgpa=9.99;
let ab=true;
console.log(name,'type:',typeof name)
console.log(rollno,'type:',typeof rollno)
console.log(cgpa,'type:',typeof cgpa)
console.log(ab,'type:',typeof ab)
//Variables 
console.log(`GOOD MORNING`);
console.log(`vishnu srii`);

window.alert(`this is an alert!`);
window.alert(`nice`);
//document.getElementById("myh1").textContent = `hello`;
//document.getElementById("myp").textContent = `GOOD MORNING`;

// static variable
class Demo {
    static message = "Hello, this is static!";
}

console.log(Demo.message);

//global variable
let message = "Hello World"; 

function showMessage() {
    console.log(message); 
}

showMessage();
console.log(message);

//datatype

//strings
 let n="vanaja"
 console.log(` my name is:${n}` ,typeof name);

 //numbers
 let age=18;
 console.log(`i'm ${age} years old`,typeof age);

 //boolean
 let student=true;
 console.log(student,typeof student);

 //operations

 //arithmetic operations

 let a = 6;
let b = 2;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b);  
console.log(a % b); 

//assignment operators
let x = 10;

x += 5; 
x -= 3;  
x *= 2;  
x /= 4;  

//operational precedence
let result=1*4+2-7/8;
console.log(result);

//comparison operators
let f = 10;
let g = "10";

console.log(f == g);  
console.log(f === g); 
console.log(f!= g);   
console.log(f > 5);    
console.log(f < 5);    


//logical operators
let isStudent = true;
let hasID = false;

console.log(isStudent && hasID); 
console.log(isStudent || hasID); 
console.log(!isStudent);         

//string operations
let firstN = "Vishnu";
let lastN = "Srii";

let full = firstN + " " + lastN;
console.log(full); 

//user input
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("Name:", userName);
console.log("Age:", userAge);
//type conversions

let years=prompt("enter your age");
age=Number(age);
console.log(age ,typeof years);

// String Concatenation
let first = "Vishnu";
let second = "Srii";

console.log(first + " " + second);

// TEMPLATE LITERALS
let userN = "vishnu";
let userA = 20;

console.log(`My name is ${userN} and age is ${userA}`);


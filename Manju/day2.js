console.log(`Hello`);
console.log(`i like cricket!`);

 window.alert(`this is an alert`);
 window.alert(`i like circket!`);

document.getElementById("myH1").textContent = `hello`;
document.getElementById("myP").textContent = `i like cricket!`;

//this is a comment two forward slaches
/*
    this
     is 
     a
    comment
*/
//variable:a container that stores a value and it behaves as if it were the value it contains
//1.declaration: let x;
//2.assignment: x=100;
//let x;
//x=100;
let x=123;
console.log(x);
let age =19;
//data types:number
console.log(age);
//2.example
let prize = 10.99;
console.log(prize);
let gpa = 8.8;
console.log(gpa);
console.log (typeof age);
console.log(`you are ${age}years old`);
console.log(`the prize is ${prize}`);
console.log(`your gpa is ${gpa}`);
 //strings
let firstName ="manju";
 console.log(typeof firstName);
 console.log(`your name is${firstName}`);
 let favfood ="frenchfries";
 console.log(`you like ${favfood}`);
 let email="24nn1a4456@gmail.com";
 console.log(`your email is ${email}`);
 //boolean
 let student=true;
 console.log(student,typeof student);



 //operations


 //arithmetic operations

 let a = 10;
let b = 5;

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
let result=1*4+6-7/8;
console.log(result);


//comparison operators
let a = 10;
let b = "10";

console.log(a == b);  
console.log(a === b); 
console.log(a != b);   
console.log(a > 5);    
console.log(a < 5);    


//logical operators
let isStudent = true;
let hasID = false;

console.log(isStudent && hasID); 
console.log(isStudent || hasID); 
console.log(!isStudent);         


//string operations
let firstName = "Vijaya";
let lastName = "Varsha";

let fullName = firstName + " " + lastName;
console.log(fullName); 

//user input
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("Name:", userName);
console.log("Age:", userAge);
//type conversions

let age=prompt("enter your age");
age=Number(age);
console.log(age ,typeof age);
//Variables 
console.log(`GOOD MORNING`);
console.log(`vijaya sri varsha`);

window.alert(`this is an alert!`);
window.alert(`i love pizza`);
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
 let name="vijaya sri varsha"
 console.log(` my name is:${name}` ,typeof name);


 //numbers
 let age=18;
 console.log(`i'm ${age} years old`,typeof age);

 //boolean
 let student=true;
 console.log(student,typeof student);
 //operations
 //arithmetic operation
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
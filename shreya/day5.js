//math:javascript math objects allows us to perform mathematical task. it is built in object that provides a collection of properties and methods
let x=3.14;
let y=4;
let z=2;
let a;
a=Math.round(x);
a=Math.ceil(x);
a=Math.floor(x);
a=Math.trun(x);
a=Math.pow(x);
a=Math.sqrt(x);
a=Math.abs(x);
a=Math.sin(x);
a=Math.cos(x);
a=Math.random(x);
a=Math.log(x);
let max=Math.max(x,y,z);
let min=Math.min(x,y,z);
let b=Math.floor(Math.rondom()*10);
//random functions
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min +1 )) + min;
}
//if statements
if (hour < 18) {
  greeting = "Good day";
}
let age =25;
if (age>=18){
    console.log("Right to vote");
}
else
    {
    console.log("Not Right to vote");
}
let time=10;
if(time>12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}
//statements with boolean
let isStudent = true;
if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are not a student");
}
//nested if statements
let age =30;
let hasLicense=true;
if(age>16){
    console.log("you are old enough to drive");
    if(hasLicense){
        console.log("you have your license");
   }
   else{
    console.log("your do not have your license yet");
   }
}
else{
    console.log("you  must be 16+ to have a license");
}
//else-if statement
let age=100;
if(age>=99){
    console.log("you are  too old to enter this site");
}
else if(age<=18){
    console.log("your are  old enough to enter this site");
}
else if(age < 0){
    console.log("your age can't be below 0");
}
else{
    console.log("your must be 18+ to enter this site");
}
//switches
let  day =1;
switch(day){
    case 1:
      console.log("it is monday");    
      break;
    case 2:
      console.log("it is tuesday");  
      break;
    case 3:
      console.log("it is wednesday");  
      break;
    case 4:
      console.log("it is thursday");  
      break;
    case 5:
      console.log("it is friday");  
      break;
    case 6:
      console.log("it is saturday");  
      break;
    case 7:
      console.log("it is sunday");  
      break;
    }
    //string
    let username="shreya";
    console.log(username.charAt(0));
    console.log(username.indexof("s"));
    console.log(username.lastIndex0f("h"));
    //loops
    //for loop
    for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}
for (let x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}
//while loop
let i = 1;

while (i <= 5) {
    console.log("Value:", i);
    i++;
}
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
//do-while loop
let i = 1;

do {
    console.log("Count:", i);
    i++;
} while (i <= 5);
let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 3);

//for of loop
let numbers = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num);
}
//for each
const numbers = [10, 20, 30];

numbers.forEach(function(num) {
  console.log(num);
});
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});
//for in loop
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

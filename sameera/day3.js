//type conversion = change the datatype of value to another(strings,numbers,boolean)
let age = window.prompt("how old are you?")
age = number(age);
age+=1;

console.log(age,typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x = number(x);
y = string(y);
z = boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);

//const = a variable that cannot change

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt('enter the radius of a circle');
radius = number('radius');
circumference = 2 * pi * radius;

console.log();


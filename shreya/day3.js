var name =prompt("entr your name");
var tweet = prompt("hello, "+name+"enter your tweet");
alert("your tweet has "+tweet.length+"characters"+(140-tweet.length)+"are left");
//string slicing
var name="malleswari";
console.log(name.slice(1,5));
var name="malleswari";
name.toLocalUpperCase();
var name="MALLESWARI";
name.toLocalLowerCase();
var fname="shreya";
var correct_name=fname.slice(0,1).toUpperCase() + fname.slice(1,);
console.log(correct_name);
alert("your tweet : " +tweet.slice(0,140));
//comaparison operator
var x=15;
console.log("General comparators");
console.log(x == 15);
console.log(x != 15);
console.log(x > 18);
console.log(x >= 18);
console.log(x < 18);
console.log(x <= 18);
console.log("Strct comparatos");
console.log(x == 15);
console.log(x == "18");//true
console.log(x === 18);
console.log(x === "18");//false
//type converion=(Change the datatype o  vue to another string,numbersss,booleans)
let age = window.prompt("how old are you");
age=number(age);//type conversion
age+=1;
console.log(age);
let x="food";
let y="food";
let z="food";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
//const=a varible thaat can't changed
let pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("enter the radius of the circle");
radius = Number(radius);
circumference = 2*pi * radius;
console.log(circumference);
//rondom 
var x = Math.rondom();
console.log(x)
console.log("rondom number(0-100):" + Math.floor(Math.rondom()*101));
//dice
console.log("dice:"+Math.floor(1+Math.rondom()*6));
//number
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; 
let hexNr = 0x3E8; 
let binNr = 0b101;
//BigInt
let bigNr = 90071992547409920n;
//symbol
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);
//variabels
let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);
//convering datatype
let numToStr = 6;
numToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
let strTonum = "12";
strTonum = Number(strTonum);
console.log(strTonum, typeof strTonum);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
//arrays
arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];
console.log(arr1);
console.log(arr2);
let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
cars = ["THAR","Creta",Toyata];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
//buit-in length
colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);








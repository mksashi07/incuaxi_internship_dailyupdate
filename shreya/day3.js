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







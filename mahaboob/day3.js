// for loop

const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for loop another example
let num = 17;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(num + " is Prime");
} else {
  console.log(num + " is Not Prime");
}

// while loop 

let n = 5;
let factorial = 1;
let i = 1;

while (i <= n) {
  factorial *= i;
  i++;
}

console.log("Factorial =", factorial);


// functions 
function myname(){
    console.log("we are learnng from apna college ");
    console.log("this is js ");
}
myname();
myname();
myname();
myname();

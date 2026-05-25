// function 
function myfunction(msg,){
    console.log(msg);
}
myfunction("i love java script");

// function with parameter 
function myself(numvalue,string){
    console.log(numvalue);
    console.log(string);
}
myself("this is an number value  ");
myself("this is an string");

// sum using function

function sum(a,b){
    console.log(a+b);
}
sum(3,4);


// function with return

function add (a,b)
{
    console.log("before return");
    add = a+b;
    return add;
    console.log("after return");  // it wont be printed

}
let val = add(11,4);
console.log(val);


// function to find prime numbers

function isPrime(num) {
    if (num <= 1) {
        return "Not Prime";
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "Not Prime";
        }
    }

    return "Prime";
}

console.log(isPrime(7));


// function to find factorial 

function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log("Factorial = " + factorial(5));




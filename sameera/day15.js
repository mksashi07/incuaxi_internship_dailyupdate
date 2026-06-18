//advanced javascript
//1.EXECUTION CONTEXT
var x = 10;

function show() {
    var y = 20;
    console.log(x);
    console.log(y);
}

show();
//CALL STACK
function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
    third();
}

function third() {
    console.log("Third");
}

first();
//HOISTING
console.log(a);

var a = 10;
//internally
console.log(a);

var a = 10;
//SCOPE
let globalVar = "Global";

function test() {
    let localVar = "Local";
    console.log(globalVar);
    console.log(localVar);
}

test();
//Lexical Environment
function outer() {
    let name = "Sameera";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
//6.closures
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let increment = counter();

increment();
increment();
increment()
//7.currying
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

let double = multiply(2);

console.log(double(5));
//8.memoization
function memoizedSquare() {
    let cache = {};

    return function (num) {
        if (cache[num]) {
            console.log("From Cache");
            return cache[num];
        }

        console.log("Calculated");
        cache[num] = num * num;
        return cache[num];
    };
}

const square = memoizedSquare();

console.log(square(5));
console.log(square(5));

// JS Scope

console.log("=== JS Scope ===");

// Global Scope
let globalVar = "I am Global";

function globalExample() {
    console.log(globalVar);
}
globalExample();

// Function Scope
function functionScope() {
    let age = 20;
    console.log("Function Scope:", age);
}
functionScope();

// Block Scope
{
    let x = 10;
    const y = 20;
    var z = 30;

    console.log("Block let:", x);
    console.log("Block const:", y);
}

console.log("var outside block:", z);

// Lexical Scope
function outer() {
    let name = "Ayesha";

    function inner() {
        console.log("Lexical Scope:", name);
    }

    inner();
}
outer();

// JS Code Blocks
console.log("\n=== JS Code Blocks ===");
{
    let a = 100;
    console.log("Inside block:", a);
}

// JS Hoisting
console.log("\n=== JS Hoisting ===");

console.log(testVar);
var testVar = 50;

hello();

function hello() {
    console.log("Function Hoisted");
}

// JS Strict Mode
console.log("\n=== JS Strict Mode ===");

"use strict";

let strictValue = 10;
console.log(strictValue);

// JS Sets
console.log("\n=== JS Sets ===");

let set1 = new Set();

set1.add(10);
set1.add(20);
set1.add(30);
set1.add(10);

console.log(set1);

// JS Set Methods

console.log("\n=== JS Set Methods ===");

let fruits = new Set();

fruits.add("Apple");
fruits.add("Orange");
fruits.add("Banana");

console.log(fruits.has("Apple"));

fruits.delete("Orange");

console.log(fruits);

console.log("Size:", fruits.size);

for(let value of fruits.values()){
    console.log(value);
}


// JS Set Logic

console.log("\n=== JS Set Logic ===");

let A = new Set([1,2,3,4]);
let B = new Set([3,4,5,6]);

let union =
new Set([...A,...B]);

console.log("Union:",union);

let intersection =
new Set(
    [...A].filter(
        x=>B.has(x)
    )
);

console.log(
    "Intersection:",
    intersection
);

let difference =
new Set(
    [...A].filter(
        x=>!B.has(x)
    )
);

console.log(
    "Difference:",
    difference
);


// JS WeakSet

console.log("\n=== JS WeakSet ===");

let obj = {name:"Ayesha"};

let weakset =
new WeakSet();

weakset.add(obj);

console.log(
weakset.has(obj)
);

// JS Maps

console.log("\n=== JS Maps ===");

let map =
new Map();

map.set(
"name",
"Ayesha"
);

map.set(
"age",
20
);

map.set(
1,
"number key"
);

console.log(map);

// JS Map Methods

console.log("\n=== JS Map Methods ===");

console.log(
map.get("name")
);

console.log(
map.has("age")
);

console.log(
map.size
);

for(let key of map.keys()){
    console.log("Key:",key);
}

for(let value of map.values()){
    console.log("Value:",value);
}

for(let [k,v] of map){
    console.log(k,v);
}

// JS WeakMap

console.log("\n=== JS WeakMap ===");

let user = {};

let weakMap =
new WeakMap();

weakMap.set(
user,
"Developer"
);

console.log(
weakMap.get(user)
);

// JS Iterations

console.log("\n=== JS Iterations ===");

let arr =
[10,20,30];

for(let value of arr){
    console.log(value);
}

// JS Loops

console.log("\n=== JS Loops ===");

for(let i=1;i<=3;i++){
    console.log("For:",i);
}

let i=1;

while(i<=3){
    console.log("While:",i);
    i++;
}

let j=1;

do{
    console.log("Do While:",j);
    j++;
}
while(j<=3);


// for in

let person={

name:"Ayesha",
age:20

};

for(let key in person){

console.log(
key,
person[key]
);

}


// for of

let nums=[1,2,3];

for(let n of nums){

console.log(n);

}

// JS Iterables

console.log("\n=== JS Iterables ===");

let text="HELLO";

for(let ch of text){

console.log(ch);

}

// JS Iterators

console.log("\n=== JS Iterators ===");

let numbers=[100,200,300];

let iterator=
numbers[
Symbol.iterator
]();

console.log(
iterator.next()
);

console.log(
iterator.next()
);

console.log(
iterator.next()
);


// Custom Iterator

let range={

start:1,
end:5,

[Symbol.iterator](){

let current=this.start;

let last=this.end;

return{

next(){

if(current<=last){

return{

value:current++,
done:false

};

}

return{

done:true

};

}

};

}

};

for(let x of range){

console.log(x);

}


// JS Generators

console.log("\n=== JS Generators ===");

function* generator(){

yield 1;

yield 2;

yield 3;

}

let gen=
generator();

console.log(
gen.next()
);

console.log(
gen.next()
);

console.log(
gen.next()
);


// Infinite Generator

function* count(){

let n=1;

while(true){

yield n++;

}

}

let c=count();

console.log(
c.next().value
);

console.log(
c.next().value
);

console.log(
c.next().value
);
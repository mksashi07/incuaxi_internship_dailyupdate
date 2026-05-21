//scopes in variables
let x=10;
function func(){
    let y=20;
    console.log(x,",",y);
}
//global and local variables
func();
let x=10;
function func1(){
    let y=15;
    console.log("Global variable",x);
    console.log("Local variable",y);
}
func1();
//global scope
const x = 10;

function fun1() {
    console.log(x);
}

fun1();
//local scope
function fun2(){
    let x = 10;
    console.log(x);
}

fun2();
//block scope
{
    var x = 10;
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
//lexical scope
function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();
//module scope
export const number = 10;

export function add(a, b) {
  return a + b;
}
//stings
//length
let s = 'JavaScript';
let len = s.length;

console.log("String Length: " + len);
//concatenation
let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;

console.log("Concatenated String: " + res);
//escape characters
const s1 = "\'GfG\' is a learning portal";
const s2 = "\"GfG\" is a learning portal";
const s3 = "\\GfG\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);
//substring
let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);

console.log(s2);
//upper and lower cases
let s = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();

console.log(uCase);
console.log(lCase);
//searching
let s1 = 'def abc abc';
let i = s1.indexOf('abc');

console.log(i);
//objects
//1 creation using object literals
let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);
//output:{"name":"Sourav","age":23,"job":"Developer"}
// 2 creation  using new object()constructor
 let obj = new Object();
obj.name= "Sourav",
obj.age= 23.
obj.job= "Developer";

console.log(obj);
//output:{"name":"Sourav","age":23,"job":"Developer"}
 
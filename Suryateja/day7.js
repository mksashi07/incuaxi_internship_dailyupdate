// 1. Function Declaration
function add(a, b){
    return a + b;
}
document.write("Function Declaration: " + add(10, 5));
document.write("<br><br>");


// 2. Function Expression
const multiply = function(a, b){
    return a * b;
};
document.write("Function Expression: " + multiply(5, 4));
document.write("<br><br>");


// 3. Arrow Function
const subtract = (a, b) => {
    return a - b;
};
document.write("Arrow Function: " + subtract(20, 10));
document.write("<br><br>");


// 4. Anonymous Function
let greet = function(){
    document.write("Anonymous Function: Hello Surya");
};
greet();
document.write("<br><br>");


// 5. Callback Function
function display(name){
    document.write("Callback Function: " + name);
}
function getName(callback){
    let name = "Surya";
    callback(name);
}
getName(display);
document.write("<br><br>");


// 6. Higher Order Function
function calculate(a, b, operation){
    return operation(a, b);
}
function sum(x, y){
    return x + y;
}
document.write("Higher Order Function: " + calculate(5, 5, sum));
document.write("<br><br>");


// 7. Recursive Function
function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n - 1);
}
document.write("Recursive Function: " + factorial(5));
document.write("<br><br>");


// 8. Parameters & Arguments
function student(name, age){
    document.write("Name: " + name + ", Age: " + age);
}
student("Surya", 20);
document.write("<br><br>");


// 9. Default Parameters
function welcome(name = "Guest"){
    document.write("Default Parameter: Welcome " + name);
}
welcome();
document.write("<br><br>");


// 10. Return Statement
function square(num){
    return num * num;
}
let result = square(6);
document.write("Return Statement: " + result);
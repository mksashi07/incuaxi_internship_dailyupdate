let colors = ["Red", "Blue", "black"];
console.log(colors);
//accessing array elements
let fruits = ["kivi", "berry", "avacago"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
//changing array values
let fruits = ["Apple", "Banana", "Mango","avacado"];
fruits[0] = "kivi";
console.log(fruits);
//array length
let numbers = [10, 20, 30, 40,50,60];
console.log(numbers.length);
//push method
let fruits = ["Apple", "Banana"];
fruits.push("kivi","jack");
console.log(fruits);
//unshift method
let fruits = ["Banana", "Mango"];
fruits.unshift("kivi","pearl");
console.log(fruits);
//pop method
let fruits = ["Apple", "orange", "Mango"];
fruits.pop();
console.log(fruits);
//shift method
let fruits = ["Apple","kivi", "Banana", "Mango"];
fruits.shift();
console.log(fruits);
//using for loop in an array
let fruits = ["Apple", "Banana", "Mango"];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//for each method
let numbers = [1, 2, 3, 4,5,6,7,8];
numbers.forEach(function(num) {
        console.log(num);
});
//different data types
let data = ["Pavithra", 21, true];
console.log(data);
//indexof method
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana","kivi"));
//includes method
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("kivi"));
//sort method 
let numbers = [5, 2, 8, 1,9,7];
numbers.sort();
console.log(numbers);
//reverse method
let numbers = [1, 2, 3, 4,7,9,5];
numbers.reverse();
console.log(numbers);
//2D arrays
let marks = [
    [90, 50],
    [70, 60]
];
console.log(marks[0][0]);
console.log(marks[1][1]);
//example of realtime 
let students = ["Ravi", "Sita", "Pavithra"];

console.log("Original Array:");
console.log(students);

students.push("Kiran");

console.log("After Adding:");
console.log(students);

students.pop();

console.log("After Removing:");
console.log(students);

console.log("Total Students:");
console.log(students.length);

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
//student marks system 
let marks = [85, 90, 78, 88];

console.log("Student Marks:");

for(let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
//employee name list
let employees = ["Ravi", "Sita", "pavithra"];

console.log("Employee List:");

employees.forEach(function(emp) {
    console.log(emp);
});
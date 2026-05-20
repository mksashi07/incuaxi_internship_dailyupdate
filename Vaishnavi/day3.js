//Arrays 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//Modify the elements
let fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Orange";
console.log(fruits);
// To find array length
let students = ["Ram", "Sam", "John"];
console.log(students.length);
//push - add elements at the end
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
//unshift() - add elements at the first
let names = ["mounika","harika","puneeth"];
names.unshift(1);
console.log(names);
//pop() - removes last elements
let names = ["mounika","harika","puneeth"];
names.pop();
console.log(names);
// shift() - removes first elements
let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers);
// includes() - it says whether the element is there or not and returns true if it is there
let mounika = ["Apple", "Banana", "Mango"];

console.log(mounika.includes("Banana"));
// indexOf() - it returns the position of elements
let colors = ["Red", "Green", "Blue"];

console.log(colors.indexOf("Green"));
// sort() - it arrange the elements in the alphabetical
let colors = ["Red", "Green", "Blue"];

// sort() - it arrages the elements in alphabetical wise
let fruits = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruits);
//reverse() - reversing the array
let numbers = ["apple","banana","mango"];
numbers.reverse();
console.log(numbers);
//concat() - adding 2 arrays
let arr1 = ["pavan","puneeth"];
let arr2 = ["mounika"];
let result = arr1.concat(arr2);
console.log(result);
// slice() - Returns selected part of an array
let numbers = [1, 2, 3, 4, 5];
let result = numbers.slice(1, 4);
console.log(result);
//splice() - add/remove elements from Array
let names = ["Apple", "Banana", "Mango"];
names.splice(1, 1, "Orange");
console.log(names);
//map() - creates new array transforming by elements
let numbers = [12, 24, 30];
let square = numbers.map(num => num * num);
console.log(square);
//reduce() - it reduces into single value
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
//Multidimensional Arrays - array inside another array
let matrix = [
    [1, 2],
    [3, 4]
];
console.log(matrix[1][0]);
//Array Destructuring - it assign the values from array  into variables 
let colors = ["Red", "Green", "Blue"];

let [a, b, c] = colors;

console.log(a);
console.log(b);
console.log(c);
// sum of array elements
let numbers = [10, 20, 30];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// Arrays concepts examples with all methods

const fruits = [{name: "apple", colour : "red",calories : 65}, 
                {name: "banana", colour : "yellow",calories : 45},
                {name: "orange", colour : "orange",calories : 80},
                {name: "pineapple", colour : "yellow",calories :194},
                {name: "guava", colour : "green",calories : 135}];
console.log(fruits[0].name); 
//push
fruits.push({name : "grapes",colour: "purple",calories : "43"});
//pop
fruits.pop();
//splice is used to remove certain place
fruits.splice(1,2);
//foreach() : it shows all the names 
fruits.forEach(fruits  => console.log(fruit));
//map()
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);
//filter() 
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);





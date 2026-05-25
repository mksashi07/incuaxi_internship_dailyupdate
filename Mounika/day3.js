// array

let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

//LOOP

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of loop)

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}

// NESTED ARRAY

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);
console.log(matrix[1][2]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
//LOOP IN NESTED ARRAY

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// push()

let arr = [1,2];
arr.push(3);
console.log(arr);

//pop()

let arr = [1,2,3];
arr.pop();
console.log(arr);

//unshift()

let arr = [2,3];
arr.unshift(1);
console.log(arr);

//shift()

let arr = [1,2,3];
arr.shift();
console.log(arr);

// length()

let arr = [1,2,3];
console.log(arr.length);

//indexOf()

let arr = [10,20,30];
console.log(arr.indexOf(20));

// includes()

let arr = [1,2,3];
console.log(arr.includes(2));

// reverse()

let arr = [1,2,3];
arr.reverse();
console.log(arr);

 // sort()

let arr = [3,1,2];
arr.sort((a,b)=>a-b);
console.log(arr);

//concat()

let a = [1,2];
let b = [3,4];
console.log(a.concat(b));

//slice()

let arr = [1,2,3,4];
console.log(arr.slice(1,3));

//splice()

let arr = [1,2,3,4];
arr.splice(1,1);
console.log(arr);

// join()

let arr = ["a","b","c"];
console.log(arr.join("a"));

//to string()

let arr = [1,2,3];
console.log(arr.toString());

// for each()

let arr = [1,2,3];
arr.forEach(x=>console.log(x));

// map()

let arr = [1,2,3];
let res = arr.map(x=>x*2);
console.log(res);

//filter()

let arr = [1,2,3,4];
let res = arr.filter(x=>x%2==0);
console.log(res);

// find()

let arr = [5,10,15];
console.log(arr.find(x=>x>5));

// every()

let arr = [2,4,6];
console.log(arr.every(x=>x%2==0));

//some()

let arr = [1,2,3];
console.log(arr.some(x=>x>2));

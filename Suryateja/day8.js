let fruits = ["Apple", "Banana"];
let numbers = [1, 2, 3, 4, 5];

// push
fruits.push("Mango");
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);

// unshift
fruits.unshift("Orange");
console.log(fruits);

// length
console.log(fruits.length);

// indexOf
console.log(fruits.indexOf("Banana"));

// includes
console.log(fruits.includes("Orange"));

// slice
let sliced = numbers.slice(1, 4);
console.log(sliced);

// splice
numbers.splice(2, 1);
console.log(numbers);

// concat
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2));

// join
console.log(fruits.join(" - "));

// reverse
numbers.reverse();
console.log(numbers);

// sort
let sortNum = [5, 2, 8, 1];
sortNum.sort();
console.log(sortNum);

// forEach
numbers.forEach(num => console.log(num));

// map
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
let filtered = numbers.filter(num => num > 2);
console.log(filtered);

// find
let found = numbers.find(num => num > 2);
console.log(found);

// reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// every
console.log(numbers.every(num => num > 0));

// some
console.log(numbers.some(num => num > 3));
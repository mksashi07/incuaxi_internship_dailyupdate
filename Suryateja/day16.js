// Array Methods
const numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);

// push()
numbers.push(60);
console.log("push():", numbers);

// pop()
numbers.pop();
console.log("pop():", numbers);

// shift()
numbers.shift();
console.log("shift():", numbers);

// unshift()
numbers.unshift(5);
console.log("unshift():", numbers);

// splice()
numbers.splice(2, 1, 25);
console.log("splice():", numbers);

// slice()
const slicedArray = numbers.slice(1, 4);
console.log("slice():", slicedArray);

// map()
const doubled = numbers.map((num) => {
    return num * 2;
});
console.log("map():", doubled);

// filter()
const filtered = numbers.filter((num) => {
    return num > 20;
});
console.log("filter():", filtered);

// reduce()
const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);
console.log("reduce():", total);

// forEach()
console.log("forEach():");
numbers.forEach((num) => {
    console.log(num);
});

// find()
const found = numbers.find((num) => {
    return num > 25;
});
console.log("find():", found);

// findIndex()
const foundIndex = numbers.findIndex((num) => {
    return num > 25;
});
console.log("findIndex():", foundIndex);

// some()
const hasLargeNumber = numbers.some((num) => {
    return num > 40;
});
console.log("some():", hasLargeNumber);

// every()
const allPositive = numbers.every((num) => {
    return num > 0;
});
console.log("every():", allPositive);

// includes()
console.log("includes():", numbers.includes(30));

// indexOf()
console.log("indexOf():", numbers.indexOf(30));

// sort()
const unsorted = [50, 10, 40, 20, 30];
unsorted.sort((a, b) => {
    return a - b;
});
console.log("sort():", unsorted);

// reverse()
unsorted.reverse();
console.log("reverse():", unsorted);

// join()
const fruits = ["Apple", "Banana", "Mango"];
console.log("join():", fruits.join(" - "));

// concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log("concat():", mergedArray);
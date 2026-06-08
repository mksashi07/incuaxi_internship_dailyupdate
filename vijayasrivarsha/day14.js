
// TYPED ARRAYS 
console.log(" TYPED ARRAYS ");
// ArrayBuffer (16 bytes)
const buffer = new ArrayBuffer(16);
// Int8Array
const int8 = new Int8Array(buffer);
int8[0] = 10;
int8[1] = 20;
int8[2] = 30;
int8[3] = 40;
console.log("Int8Array:");
console.log(int8);
// Uint8Array
const uint8 = new Uint8Array([100, 200, 255]);
console.log("\nUint8Array:");
console.log(uint8);
// Float32Array
const float32 = new Float32Array([1.5, 2.5, 3.5]);
console.log("\nFloat32Array:");
console.log(float32);
// Typed Array Methods
console.log("\nTyped Array Methods");
console.log("Length:", uint8.length);
console.log("Includes 200:",
    uint8.includes(200));
console.log("Index Of 255:",
    uint8.indexOf(255));
console.log("Slice:",
    uint8.slice(1));
console.log("Join:",
    uint8.join("-"));
// ARRAY METHODS
console.log(" ARRAY METHODS ");
let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:");
console.log(numbers);
// push()
numbers.push(60);
console.log("\nPush:");
console.log(numbers);
// pop()
numbers.pop();
console.log("\nPop:");
console.log(numbers);
// unshift()
numbers.unshift(5);
console.log("\nUnshift:");
console.log(numbers);
// shift()
numbers.shift();
console.log("\nShift:");
console.log(numbers);
// concat()
const extra = [60, 70];
const combined = numbers.concat(extra);
console.log("\nConcat:");
console.log(combined);
// slice()
console.log("\nSlice(1,4):");
console.log(combined.slice(1, 4));
// splice()
let fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];
fruits.splice(1, 1, "Grapes");
console.log("\nSplice:");
console.log(fruits);
// indexOf()
console.log("\nIndex Of Mango:");
console.log(fruits.indexOf("Mango"));
// includes()
console.log("\nIncludes Apple:");
console.log(fruits.includes("Apple"));
// reverse()
console.log("\nReverse:");
console.log([...numbers].reverse());
// sort()
let values = [40, 10, 60, 20, 50];
values.sort((a, b) => a - b);
console.log("\nSort:");
console.log(values);
// forEach()
console.log("\nForEach:");
numbers.forEach((num) => {
    console.log(num);
});
// map()
const doubled = numbers.map(
    num => num * 2
);
console.log("\nMap:");
console.log(doubled);
// filter()
const filtered = numbers.filter(
    num => num > 25
);
console.log("\nFilter:");
console.log(filtered);
// find()
const found = numbers.find(
    num => num === 30
);
console.log("\nFind:");
console.log(found);
// findIndex()
const foundIndex = numbers.findIndex(
    num => num === 30
);
console.log("\nFind Index:");
console.log(foundIndex);
// every()
console.log("\nEvery > 5:");
console.log(
    numbers.every(num => num > 5)
);
// some()
console.log("\nSome > 45:");
console.log(
    numbers.some(num => num > 45)
);
// reduce()
const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);
console.log("\nReduce (Sum):");
console.log(total);
// flat()
const nested = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log("\nFlat:");
console.log(nested.flat());
// flatMap()
const flatMapped = [1, 2, 3]
    .flatMap(num => [num, num * 2]);
console.log("\nFlatMap:");
console.log(flatMapped);
// Array.from()
const str = "HELLO";
console.log("\nArray.from:");
console.log(Array.from(str));
// Array.of()
console.log("\nArray.of:");
console.log(
    Array.of(100, 200, 300)
);
// join()
console.log("\nJoin:");
console.log(
    fruits.join(", ")
);
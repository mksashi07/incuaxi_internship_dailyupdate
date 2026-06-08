console.log(" ArrayBuffer");
// 1. Create ArrayBuffer (16 bytes)
const buffer = new ArrayBuffer(16);
console.log("Buffer Size:", buffer.byteLength, "bytes");
// TYPED ARRAY REFERENCE
console.log("\n=== Typed Array Reference ===");
const int8 = new Int8Array([-10, 20, 30]);
const uint8 = new Uint8Array([10, 20, 30]);
const int16 = new Int16Array([1000, 2000, 3000]);
const uint16 = new Uint16Array([4000, 5000, 6000]);
const int32 = new Int32Array([100000, 200000]);
const uint32 = new Uint32Array([300000, 400000]);
const float32 = new Float32Array([1.5, 2.5, 3.5]);
const float64 = new Float64Array([10.123456789]);
console.log("Int8Array:", int8);
console.log("Uint8Array:", uint8);
console.log("Int16Array:", int16);
console.log("Uint16Array:", uint16);
console.log("Int32Array:", int32);
console.log("Uint32Array:", uint32);
console.log("Float32Array:", float32);
console.log("Float64Array:", float64);
// TYPED ARRAY
console.log("\nTyped Array Example ");
const numbers = new Int32Array(buffer);
numbers[0] = 100;
numbers[1] = 200;
numbers[2] = 300;
numbers[3] = 400;
console.log("Typed Array:", numbers);
// DATAVIEW
console.log("\nDataView");
const view = new DataView(buffer);
console.log("Value at byte 0:", view.getInt32(0));
console.log("Value at byte 4:", view.getInt32(4));
// TYPED ARRAY METHODS
console.log("\nTyped Array Methods ");
const arr = new Uint8Array([10, 20, 30, 40, 50])
console.log("Original Array:", arr);
// at()
console.log("at(2):", arr.at(2));
// includes()
console.log("includes(30):", arr.includes(30));
// indexOf()
console.log("indexOf(40):", arr.indexOf(40));
// join()
console.log("join('-'):", arr.join("-"));
// slice()
console.log("slice(1,4):", arr.slice(1, 4));
// subarray()
console.log("subarray(2,5):", arr.subarray(2, 5));
// reverse()
console.log("reverse():", arr.slice().reverse());
// fill()
const filled = arr.slice();
filled.fill(99, 1, 3);
console.log("fill():", filled);
// set()
const setArray = new Uint8Array(5);
setArray.set([1, 2, 3]);
console.log("set():", setArray);
// copyWithin()
const copied = arr.slice();
copied.copyWithin(0, 3);
console.log("copyWithin():", copied);
// sort()
const unsorted = new Uint8Array([50, 10, 30, 20]);
unsorted.sort();
console.log("sort():", unsorted);
// ITERATION METHODS
console.log("\n=== Iteration Methods ===");
// forEach()
console.log("forEach():");
arr.forEach((value) => {
    console.log(value);
});
// map()
const doubled = arr.map(num => num * 2);
console.log("map():", doubled);
// filter()
const filtered = arr.filter(num => num > 25);
console.log("filter():", filtered);
// find()
const found = arr.find(num => num > 30);
console.log("find():", found);
// some()
console.log("some():", arr.some(num => num > 45));
// every()
console.log("every():", arr.every(num => num > 5));
// reduce()
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", sum);
// KEYS, VALUES, ENTRIES
console.log("\n=== keys(), values(), entries() ===");
for (const key of arr.keys()) {
    console.log("Key:", key);
}
for (const value of arr.values()) {
    console.log("Value:", value);
}
for (const [index, value] of arr.entries()) {
    console.log(`Index ${index} => ${value}`);
}
// FROM & OF METHODS
console.log("\n=== Array Creation Methods ===");
const fromArray = Uint8Array.from([5, 10, 15]);
console.log("Uint8Array.from():", fromArray);
const ofArray = Uint8Array.of(1, 2, 3, 4, 5);
console.log("Uint8Array.of():", ofArray);
// FINAL SUMMARY
console.log("\n=== Summary ===");
console.log("Typed Arrays store binary numeric data efficiently.");
console.log("Main Parts: ArrayBuffer, TypedArray, DataView");
console.log("Methods Covered:");
console.log(
    "at, includes, indexOf, join, slice, subarray, reverse, fill, set, copyWithin, sort, forEach, map, filter, find, some, every, reduce, keys, values, entries, from, of"
);
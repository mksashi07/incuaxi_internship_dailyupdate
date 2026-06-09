//JavaScript Sets
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);

console.log(numbers);
//Duplicate Values are Ignored
const numbers = new Set();

numbers.add(10);
numbers.add(10);
numbers.add(10);

console.log(numbers);
//Initialize Set with Array
const numbers =
    new Set([10, 20, 30, 40]);

console.log(numbers);
//How Are Elements Ordered in a Set

const fruits = new Set();

fruits.add("Mango");
fruits.add("Apple");
fruits.add("Banana");

console.log(fruits);
//Set Properties and Methods
//add()
const set = new Set();

set.add("Python");
set.add("JavaScript");

console.log(set);
//delete()
const set =
    new Set(["Python", "Java"]);

set.delete("Java");

console.log(set);
//has()
const set =
    new Set(["Python", "Java"]);

console.log(set.has("Python"));
console.log(set.has("C++"));
//size
const set =
    new Set([1, 2, 3, 4]);

console.log(set.size);
//clear()
const set =
    new Set([1, 2, 3]);

set.clear();

console.log(set);
//Iterate Over Set Elements
//Method 1: for...of
const skills =
    new Set([
        "HTML",
        "CSS",
        "JavaScript"
    ]);

for (const skill of skills) {
    console.log(skill);

}
//Method 2: forEach()
const skills =
    new Set([
        "HTML",
        "CSS",
        "JavaScript"
    ]);

skills.forEach(skill => {
    console.log(skill);
});

//Method 3: values()
const numbers =
    new Set([10, 20, 30]);

const iterator =
    numbers.values();

for (const value of iterator) {
    console.log(value);

}
//Convert Array to Set (Remove Duplicates)
const numbers =
    [1, 2, 3, 2, 1, 4];

const unique =
    [...new Set(numbers)];

console.log(unique);
//How to Sort a Set
const numbers =
    new Set([50, 10, 30, 20]);

const sorted =
    [...numbers].sort(
        (a, b) => a - b
    );

console.log(sorted);
//Find Common Elements Using Sets
const set1 =
    new Set([1, 2, 3, 4]);

const set2 =
    new Set([3, 4, 5, 6]);

const common =
    [...set1].filter(
        num => set2.has(num)
    );

console.log(common);
//Union of Two Sets
const set1 =
    new Set([1, 2, 3]);

const set2 =
    new Set([3, 4, 5]);

const union =
    new Set([
        ...set1,
        ...set2
    ]);

console.log(union);


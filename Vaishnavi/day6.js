/Math Methods
//1. Math.round()-Rounds a number to the nearest integer.
console.log(Math.round(4.6));
console.log(Math.round(4.4));
//2. Math.floor() - Rounds down to the nearest value
console.log(Math.floor(4.9));
//3. Math.ceil() - Rounds upto nearest integer
console.log(Math.ceil(4.1));
//4. Math.trunc() - Removes decimal point
console.log(Math.trunc(8.99));
//math.pow() - Returns power of a number.
console.log(Math.pow(2, 3));
//6. Math.sqrt() -Returns square root.
console.log(Math.sqrt(64));
//7. Math.cbrt() -Returns cube root.
console.log(Math.cbrt(27));
//8. Math.abs() -Returns positive value.
console.log(Math.abs(-25));
//9. Math.max() - Returns largest number.
console.log(Math.max(10, 20, 30, 5));
//10. Math.min() - Returns smallest number.
console.log(Math.min(10, 20, 30, 5));
//11. Math.random() - Generates random number between 0 and 1.
console.log(Math.random());
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
//12. Math.PI  - Returns value of PI.
console.log(Math.PI);
//13. Math.sin() - Returns sine value.
console.log(Math.sin(0));
//14. Math.cos() - Returns cosine value.
console.log(Math.cos(0));
//15. Math.log() - Returns natural logarithm.
console.log(Math.log(1));
//Date & Time

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(hours + ":" + minutes + ":" + seconds);
}
showTime();


//Sets
//Creating a set
let numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(30);
console.log(numbers);

//Adding values
let names = new Set();
names.add("Mounika");
names.add("Puneeth");
names.add("Surya");
names.add("harika");
names.add("Harish");
names.add("Pavithra");
names.add("puri");
console.log(names);

//Duplicate Values are not allowed in the set
let data = new Set();
data.add(100);
data.add(100);
data.add(200);
console.log(data);

//The has() method checks whether a value exists in the set.(Check Values)
let colors = new Set(["Red", "Blue", "Green"]);
console.log(colors.has("Blue"));
console.log(colors.has("Black"));

//The delete() method removes a value from the set.
let nums = new Set([1, 2, 3, 4]);
nums.delete(3);
console.log(nums);

//clear()- it removes all elements from the set.
let items = new Set([10, 20, 30]);
items.clear();
console.log(items);

//The size property returns the number of elements in a set.
let students = new Set(["Rupa", "Sourya", "Jahnavi"]);
console.log(students.size);

//Looping Through a Set
let cities = new Set(["Kurnool", "Kollapur", "Ananthapur"]);
for(let city of cities) {
    console.log(city);
}

//Converting Array to Set - Used to remove duplicate values from an array.
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);

//Converting Set to Array
let setData = new Set([10, 20, 30]);
let arrayData = [...setData];
console.log(arrayData);

//Set Example
let students = new Set();

// Adding values
students.add("Mounika");
students.add("Puneeth");
students.add("Niharika");
students.add("Pavithra"); // Duplicate ignored

// Display set
console.log(students);

// Check value
console.log(students.has("Harish"));

// Delete value
students.delete("Puneeth");

// Loop through set
for(let student of students) {
    console.log(student);
}

// Size
console.log("Total Students:", students.size);

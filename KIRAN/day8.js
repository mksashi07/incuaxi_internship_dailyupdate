//sorting
let numbers = [5, 2, 9, 1, 5, 6];

// Sort in ascending order
numbers.sort((a, b) => a - b);

console.log("Sorted in ascending order:", numbers);

// Sort in descending order
numbers.sort((a, b) => b - a);
 
console.log("Sorted in descending order:", numbers);


//sorting by property
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

// Sort people by age in ascending order
people.sort((a, b) => a.age - b.age);
console.log("Sorted by age (ascending):", people);

// Sort people by age in descending order
people.sort((a, b) => b.age - a.age);
console.log("Sorted by age (descending):", people);


//shuffle
//Fisher-Yates Shuffle Algorithm
const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);

console.log("Shuffled cards:", cards);

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


//Date objects
const date1 = new Date(); 6
console.log(date1);   


//date objects with specific date
const date2 = new Date (2025, 11, 25); // December 25, 2025 (months are 0-indexed)
console.log(date2);


//getfull date
const date3 = new Date();

const year = date3.getFullYear();
const month = date3.getMonth();
const day = date3.getDate();
const hours = date3.getHours();
const minutes = date3.getMinutes();
const seconds = date3.getSeconds(); 

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);


//closure
function outerFunction() {
    let message = "Hello, World!";

    function innerFunction() {
        console.log(message);
    }
    innerFunction();
}
outerFunction();


//closure with 
function createCounter() {

    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

//closure with ar
let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`${points}pts`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`${points}pts`);
}                   

function getScore() {
    return score;
}

increaseScore(10);
decreaseScore(5);
console.log("Current Score:", getScore());
// Birth date and age calculation
const birthDate = new Date(2005, 8, 12);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
const dayDiff = today.getDate() - birthDate.getDate();
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}
console.log(`You are ${age} years old.`);


// Days left until next birthday
const nextBirthday = new Date(today.getFullYear(), 8, 12);
if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}
const msDiff = nextBirthday - today;
const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));
console.log(`Days left until your next birthday: ${daysLeft} days.`);


// Set Data Structure
const basicColors = new Set(['red', 'blue', 'green', 'blue', 'red']);
console.log("Initial unique colors:", basicColors);


// Set Methods
basicColors.add('yellow');
basicColors.add('purple');
basicColors.add('red');
console.log(`Number of colors: ${basicColors.size}`);
console.log(basicColors.has('blue'));
console.log(basicColors.has('orange'));
basicColors.delete('green');
console.log("Iterating through the Set items:");
for (let color of basicColors) {
    console.log(`Color: ${color}`);
}
basicColors.clear();
console.log(`Size after clearing: ${basicColors.size}`);


// for...of Loop
const inventory = new Set(['Laptop', 'Mouse', 'Keyboard']);
for (let item of inventory) {
    console.log(`Product: ${item}`);
}


// forEach Loop
const badges = new Set(['Gold', 'Silver', 'Bronze']);
badges.forEach((value) => {
    console.log(`Badge unlocked: ${value}`);
});


// values(), next(), while()
const tasks = new Set(['Write code', 'Test application']);
const taskIterator = tasks.values();
let nextTask = taskIterator.next();
while (!nextTask.done) {
    console.log(`Todo: ${nextTask.value}`);
    nextTask = taskIterator.next();
}


// map() and spread operator
const numbers = new Set([10, 20, 30]);
const doubledArray = [...numbers].map(num => num * 2);
console.log(doubledArray);
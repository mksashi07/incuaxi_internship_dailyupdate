// Rounding methods
console.log(Math.round(4.6));  
console.log(Math.ceil(4.1));   
console.log(Math.floor(4.9));  
console.log(Math.trunc(4.9));  

// Power and roots
console.log(Math.pow(8, 2));   
console.log(Math.sqrt(64));    

// Absolute and extreme values
console.log(Math.abs(-4.7));   
console.log(Math.min(0, 150, 30, -20)); 
console.log(Math.max(0, 150, 30, -20)); 

// Random integer between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); 

// Create date objects
const now = new Date();                 
const specificDate = new Date(2026, 4, 23); 

// Get date components
console.log(now.getFullYear()); 
console.log(now.getMonth());    
console.log(now.getDate());     

// Set date components
const expiryDate = new Date();
expiryDate.setFullYear(2030);
expiryDate.setMonth(11); 
expiryDate.setDate(31);
console.log(expiryDate.toDateString()); 

// Time difference calculation (in milliseconds)
const start = new Date("2026-05-01");
const end = new Date("2026-05-10");
const timeDiff = end.getTime() - start.getTime();
const daysDiff = timeDiff / (1000 * 60 * 60 * 24); 
console.log(daysDiff); 


// 1. Set your birthdate (September is index 8)
const birthDate = new Date(2005, 8, 12); 
const today = new Date();

// 2. Calculate your current age
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
const dayDiff = today.getDate() - birthDate.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}
console.log(`You are ${age} years old.`); 

// 3. Calculate days left until your 21st birthday (Sept 12, 2026)
const nextBirthday = new Date(today.getFullYear(), 8, 12);

// If your birthday already passed this year, look at next year
if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}

const msDiff = nextBirthday - today;
const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));

console.log(`Days left until your next birthday: ${daysLeft} days.`);

// 1. Create a Set with some initial values (including duplicates)
const basicColors = new Set(['red', 'blue', 'green', 'blue', 'red']);

// Notice how the duplicates are automatically removed
console.log("Initial unique colors:", basicColors); 

// 2. Add new values
basicColors.add('yellow');
basicColors.add('purple');
basicColors.add('red'); 

// 3. Check the size property
console.log(`Number of colors: ${basicColors.size}`); 

// 4. Verify existence using .has()
console.log(basicColors.has('blue'));   
console.log(basicColors.has('orange')); 

// 5. Delete an item
basicColors.delete('green');

// 6. Iterate through the Set elements using a for...of loop
console.log("Iterating through the Set items:");
for (let color of basicColors) {
    console.log(`Color: ${color}`);
}

// 7. Wipe out everything in the Set
basicColors.clear();
console.log(`Size after clearing: ${basicColors.size}`); 

//for...of Loop
const inventory = new Set(['Laptop', 'Mouse', 'Keyboard']);

for (let item of inventory) {
    console.log(`Product: ${item}`);
}

//for each loop
const badges = new Set(['Gold', 'Silver', 'Bronze']);

badges.forEach((value) => {
    console.log(`Badge unlocked: ${value}`);
});

// values(),next(),while()
const tasks = new Set(['Write code', 'Test application']);
const taskIterator = tasks.values();

let nextTask = taskIterator.next();
while (!nextTask.done) {
    console.log(`Todo: ${nextTask.value}`);
    nextTask = taskIterator.next(); 
}

// map(), .filter(), or .reduce(),spread operator (...).
const numbers = new Set([10, 20, 30]);
const doubledArray = [...numbers].map(num => num * 2);

console.log(doubledArray);

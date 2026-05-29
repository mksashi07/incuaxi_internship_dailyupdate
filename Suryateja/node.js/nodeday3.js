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

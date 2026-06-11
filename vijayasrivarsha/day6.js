//NESTED OBJECTS
let students={
    name:"varsha",
    age:18,
    address={
        city:"vijayawada",
        pincode:500001


    }
};
console.log(students.name);
console.log(students.address.pincode);
//OR

console.log(students[name]);
console.log(students["address"]["pincode"]);



//ARRAYS OF OBJECT

let students = [
  { name: "Varsha", age: 18, marks: 80 },
  { name: "Ravi", age: 20, marks: 60 },
  { name: "Anu", age: 19, marks: 90 }
];
console.log(students[0].name);
console.log(students[2].marks);

students.forEach(student => {
  console.log(student.name, student.marks);
});

//sort

let fruits = ["banana", "apple", "mango"];

fruits.sort();
console.log(fruits);
//ascending order

let nums = [1, 10, 2];

nums.sort((a, b) => a - b);
console.log(nums);
//decending order

let nums = [5, 2, 9];

nums.sort((a, b) => b - a);
console.log(nums);


let students = [
  { name: "Varsha", marks: 80 },
  { name: "Ravi", marks: 60 },
  { name: "Anu", marks: 90 }
];

students.sort((a, b) => a.marks - b.marks);

console.log(students);


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


let numbers = [1, 2, 3, 4, 5];
console.log("Original:", numbers);

let shuffled = shuffleArray(numbers);
console.log("Shuffled:", shuffled);

//date object

//Current date & time

let date1 = new Date();


//Specific date

let date2 = new Date("2024-01-01");


// Using numbers

let date3 = new Date(2024, 0, 1); 
// Getting Values (Extract data)
let d = new Date();

console.log(d.getFullYear()); 
console.log(d.getMonth());    
console.log(d.getDate());    
console.log(d.getHours());    

//Changing Date (Mutable)

let d = new Date();

d.setFullYear(2030);
d.setMonth(5); 

console.log(d);

//Formatting Date
let d = new Date();

console.log(d.toDateString());  
console.log(d.toTimeString());  
console.log(d.toISOString());   

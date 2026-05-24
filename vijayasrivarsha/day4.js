//call back

  function greet(name,callbase)
  {
    console.log("Hello"+name);
    useCallback();
  }
  function saybye()
  {
    console.log("goodbye");

  }
  greet("varsha",saybye);


  //spread operator



  let numbers=[1,2,3,4,5]
  console.log(Math.max(number));
  console.log(Math.min(number));
  let username="vijayasrivarsha"
console.log([username]);
console.log([username].join("-"));



//rest parameters

function add(...numbers) {
  let sum = 0;

  numbers.forEach(num => {
    sum += num;
  });

  return sum;
}

console.log(add(1, 2, 3, 4));


//for each


let names = ["Varsha", "Ravi", "Anu"];
let total = 0;

names.forEach(function(name) {
  total += name.length;
});

console.log(total);

//map 

let students = [
  { name: "Varsha", marks: 90 },
  { name: "Ravi", marks: 80 }
];

let names = students.map(student => student.name);

console.log(names);



//filter

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers);


let numbers = [10, 15, 20, 25];

let result = numbers.filter(num => num > 15);

console.log(result);



let names = ["Varsha", "Anu", "Ravi", "Sai"];

let longNames = names.filter(name => name.length > 3);

console.log(longNames);



let students = [
  { name: "Varsha", marks: 90 },
  { name: "Ravi", marks: 70 },
  { name: "Anu", marks: 85 }
];

let topStudents = students.filter(student => student.marks > 80);

console.log(topStudents);

//object

let student={
    name:`varsha`,
    age:20
};
console.log(student.name);


//reduce

let names = ["Varsha", "Ravi", "Anu"];

let totalChars = names.reduce((total, name) => {
  return total + name.length;
}, 0);

console.log(totalChars);


let nums = [10, 25, 5, 40];

let max = nums.reduce((a, b) => (a > b ? a : b));

console.log(max);


let numbers = [5, 10, 15];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);


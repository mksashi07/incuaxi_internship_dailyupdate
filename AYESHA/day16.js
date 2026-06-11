
 //JAVASCRIPT DEBUGGING - COMPLETE DEMO
 //Topics:
 //1. Debugging Intro
 //2. Debugging Console
 //3. Debugging Breakpoints
// 4. Debugging Errors
// 5. Debugging Async
 //6. Debugging Reference

  // 1. DEBUGGING INTRO

console.log("\n===== 1. DEBUGGING INTRO =====");



let a = 10;
let b = 5;

let sum = a + b;

console.log("Value of a:", a);
console.log("Value of b:", b);
console.log("Sum:", sum);

 //  2. DEBUGGING CONSOLE

console.log("\n===== 2. DEBUGGING CONSOLE =====");

console.log("Normal log message");

console.info("Information message");

console.warn("Warning message");

console.error("Error message");

let students = [
  { id: 1, name: "Ayesha", marks: 90 },
  { id: 2, name: "Rahul", marks: 85 },
  { id: 3, name: "John", marks: 78 }
];

console.table(students);

  // 3. DEBUGGING BREAKPOINTS

console.log("\n===== 3. DEBUGGING BREAKPOINTS =====");

function calculateTotal(price, quantity) {

  debugger; // Execution pauses here in browser DevTools

  let total = price * quantity;

  console.log("Price:", price);
  console.log("Quantity:", quantity);
  console.log("Total:", total);

  return total;
}

calculateTotal(100, 3)
  // 4. DEBUGGING ERRORS

console.log("\n===== 4. DEBUGGING ERRORS =====");

/* ---------- Reference Error ---------- */

try {

  // variable is not defined
  console.log(userName);

} catch (error) {

  console.error("Reference Error:", error.message);
}

/* ---------- Type Error ---------- */

try {

  let number = 100;

  // number is not a function
  number();

} catch (error) {

  console.error("Type Error:", error.message);
}

/* ---------- Logical Error ---------- */

function divide(x, y) {

  if (y === 0) {
    console.error("Cannot divide by zero");
    return;
  }

  return x / y;
}

console.log("Division Result:", divide(10, 2));
console.log("Division Result:", divide(10, 0));

  // 5. DEBUGGING ASYNC

console.log("\n===== 5. DEBUGGING ASYNC =====");

/* ---------- setTimeout ---------- */

setTimeout(() => {

  console.log("setTimeout executed after 2 seconds");

}, 2000);

/* ---------- Promise ---------- */

function fetchData() {

  return new Promise((resolve, reject) => {

    let success = true;

    setTimeout(() => {

      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }

    }, 1000);

  });
}

fetchData()
  .then((result) => {
    console.log("Promise Result:", result);
  })
  .catch((error) => {
    console.error("Promise Error:", error);
  });

/* ---------- Async/Await ---------- */

async function getData() {

  try {

    console.log("Loading data...");

    let result = await fetchData();

    console.log("Async/Await Result:", result);

  } catch (error) {

    console.error("Async Error:", error);

  }
}

getData();

// 6. DEBUGGING REFERENCE


console.log("\n DEBUGGING REFERENCE ");

//Useful Debugging Techniques:


function processOrder(order) {

  console.log("Order Received:", order);

  debugger;

  if (!order.product) {
    console.error("Product missing");
    return;
  }

  if (order.quantity <= 0) {
    console.error("Invalid quantity");
    return;
  }

  let totalPrice = order.price * order.quantity;

  console.log("Total Price:", totalPrice);

  return {
    product: order.product,
    quantity: order.quantity,
    totalPrice: totalPrice
  };
}

let order1 = {
  product: "Laptop",
  quantity: 2,
  price: 50000
};

let order2 = {
  product: "",
  quantity: -1,
  price: 1000
};

console.log(processOrder(order1));
console.log(processOrder(order2));


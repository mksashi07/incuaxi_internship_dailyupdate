// ==================== Debouncing ====================

function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// Function to be debounced
function search(query) {
    console.log("Searching for:", query);
}

// Create a debounced version with 1000 ms delay
const debouncedSearch = debounce(search, 1000);

// Simulating user typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
debouncedSearch("JavaScript");

// Output after 1 second:
// Searching for: JavaScript


// ==================== Currying ====================

// Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log("Normal Function:", add(10, 20, 30));

// Curried function
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log("Curried Function:", curriedAdd(10)(20)(30));


// ==================== Arrow Function Currying ====================

const multiply = a => b => c => a * b * c;

console.log("Multiplication:", multiply(2)(3)(4));


// ==================== Practical Currying Example ====================

function greet(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = greet("Hello");
const sayWelcome = greet("Welcome");

console.log(sayHello("Sravya"));
console.log(sayWelcome("Manju"));
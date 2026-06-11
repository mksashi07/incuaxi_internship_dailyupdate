//Modules in NodeJS
//Using built in modules
const http = require('http');
//simple http server
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

//creating and exporting modules
//1. exporting multiple items
// Exporting multiple functions
const getCurrentDate = () => new Date().toISOString();

const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Method 1: Exporting multiple items
exports.getCurrentDate = getCurrentDate;
exports.formatCurrency = formatCurrency;

// Method 2: Exporting an object with multiple properties
// module.exports = { getCurrentDate, formatCurrency };

//2.Exporting a single item
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }

  error(error) {
    console.error(`[${this.name}] ERROR:`, error.message);
  }
}

// Exporting a single class
module.exports = Logger;

//custom modules
const http = require('http');
const path = require('path');

// Importing custom modules
const { getCurrentDate, formatCurrency } = require('./utils');
const Logger = require('./logger');

// Create a logger instance
const logger = new Logger('App');

// Create server
const server = http.createServer((req, res) => {
  try {
    logger.log(`Request received for ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Welcome to our app!</h1>`);
    res.write(`<p>Current date: ${getCurrentDate()}</p>`);
    res.write(`<p>Formatted amount: ${formatCurrency(99.99)}</p>`);
    res.end();
  } catch (error) {
    logger.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
}
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.log(`Server running at http://localhost:${PORT}`);
});


//ES MODULES
//example of CommonJS Module
// math.js (CommonJS)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};

// app.js (CommonJS)
const math = require('./math');
console.log(math.add(5, 3)); // 8

//ES MODULE
// math.mjs (ES Module)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.mjs (ES Module)
import { add, subtract } from './math.mjs';
console.log(add(5, 3)); // 8

//Import and Export Syntax
//export syntax

// Multiple named exports
export function sayHello() {
  console.log('Hello');
}

export function sayGoodbye() {
  console.log('Goodbye');
}

// Alternative: export list at the end
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { add, subtract };

//default export
// Only one default export per module
export default function() {
  console.log('I am the default export');
}

// Or with a named function/class/object
function mainFunction() {
  return 'Main functionality';
}

export default mainFunction;

//mixed exports
// Combining default and named exports
export const VERSION = '1.0.0';

function main() {
  console.log('Main function');
}

export { main as default }; // Alternative way to set default
//IMPORTS
//IMPORTING NAMED EXPORTS
// Import specific named exports
import { sayHello, sayGoodbye } from './greetings.mjs';
sayHello(); // Hello

// Rename imports to avoid naming conflicts
import { add as sum, subtract as minus } from './math.mjs';
console.log(sum(5, 3)); // 8

// Import all named exports as an object
import * as math from './math.mjs';
console.log(math.add(7, 4)); // 11

//Importing default exports
// Import the default export
import mainFunction from './main.mjs';
mainFunction();

// You can name the default import anything you want
import anyNameYouWant from './main.mjs';
anyNameYouWant();
//importing both default and named exports
// Import both default and named exports
import main, { VERSION } from './main.mjs';
console.log(VERSION); // 1.0.0
main(); // Main function

//Dynamic Imports
// app.mjs
async function loadModule(moduleName) {
  try {
    // Dynamic import returns a promise
    const module = await import(`./${moduleName}.mjs`);
    return module;
  } catch (error) {
    console.error(`Failed to load ${moduleName}:`, error);
  }
}

// Load a module based on a condition
const moduleName = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

loadModule(moduleName).then(module => {
  module.default(); // Call the default export
});

// Or with simpler await syntax
(async () => {
  const mathModule = await import('./math.mjs');
  console.log(mathModule.add(10, 5)); // 15
})();

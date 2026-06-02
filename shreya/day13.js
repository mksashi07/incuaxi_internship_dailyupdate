//calculator
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
//digital clock
function showTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(showTime, 1000);
//temperature converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));
//counter application
let count = 0;
function increment() {
    count++;
    console.log(count);
}
function decrement() {
    count--;
    console.log(count);
}
increment();
increment();
decrement();
//password generator
function generatePassword(length) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    return password;
}
console.log(generatePassword(8));
//simple quiz app
function generatePassword(length) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    return password;
}
console.log(generatePassword(8));
//wheather app
const apiKey = "YOUR_API_KEY";

async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const data = await response.json();

    console.log(data);
}
getWeather("Delhi");
//number guessing game
const secretNumber = Math.floor(Math.random() * 10) + 1;

function guess(number) {
    if (number === secretNumber) {
        console.log("Correct Guess!");
    } else {
        console.log("Try Again!");
    }
}
guess(5);
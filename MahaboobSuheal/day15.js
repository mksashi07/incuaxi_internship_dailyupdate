function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;

        default:
            return "Invalid operator";
    }
}

// Example Usage
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
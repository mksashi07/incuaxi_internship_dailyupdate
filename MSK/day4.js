// Employee Management System

// Array to store employees
let employees = [];

// Function to add employee
function addEmployee(id, name, salary) {

    const employee = {
        id: id,
        name: name,
        salary: salary
    };

    employees.push(employee);

    console.log(`${name} added successfully!`);
}

// Function to display employees
function displayEmployees() {

    console.log("\n===== EMPLOYEE LIST =====");

    if (employees.length === 0) {
        console.log("No employees found");
        return;
    }

    employees.forEach((employee) => {

        console.log(
            `ID: ${employee.id}, Name: ${employee.name}, Salary: ₹${employee.salary}`
        );

    });
}

// Function to find highest salary
function highestSalary() {

    if (employees.length === 0) {
        console.log("No employee data available");
        return;
    }

    let highest = employees[0];

    employees.forEach((employee) => {

        if (employee.salary > highest.salary) {
            highest = employee;
        }

    });

    console.log(
        `\nHighest Salary: ${highest.name} - ₹${highest.salary}`
    );
}

// Function to calculate total salary
function totalSalary() {

    let total = 0;

    employees.forEach((employee) => {
        total += employee.salary;
    });

    console.log(`Total Salary Expense: ₹${total}`);
}

// Add employees
addEmployee(1, "Bhairava", 45000);
addEmployee(2, "Rani", 55000);
addEmployee(3, "Kiran", 60000);

// Display data
displayEmployees();

// Calculate total salary
totalSalary();

// Find highest salary
highestSalary();
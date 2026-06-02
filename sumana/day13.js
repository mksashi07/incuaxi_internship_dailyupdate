"use strict";

//JavaScript Debugging 

/*Topics Covered:
1. console.log()
2. console.table()
3. console.warn()
4. console.error()
5. console.time()
6. debugger
7. try...catch...finally
8. Custom Errors
9. Array Debugging
10. Object Debugging
11. Async Debugging*/

class StudentManager {
    constructor() {
        this.students = [];
    }

    addStudent(id, name, marks) {
        try {
            console.log(`Adding Student -> ${name}`);

            if (!id || !name) {
                throw new Error("ID and Name are required");
            }

            if (marks < 0 || marks > 100) {
                throw new Error("Marks should be between 0 and 100");
            }

            const student = {
                id,
                name,
                marks,
                grade: this.calculateGrade(marks)
            };

            this.students.push(student);

            console.table(student);
        } catch (error) {
            console.error("Add Student Error:", error.message);
        }
    }

    calculateGrade(marks) {
        if (marks >= 90) return "A+";
        if (marks >= 75) return "A";
        if (marks >= 60) return "B";
        if (marks >= 40) return "C";
        return "F";
    }

    getStudent(id) {
        console.log(`Searching Student ID: ${id}`);

        const student = this.students.find(
            student => student.id === id
        );

        if (!student) {
            console.warn("Student Not Found");
            return null;
        }

        return student;
    }

    displayStudents() {
        console.log("Student List");
        console.table(this.students);
    }

    calculateAverage() {
        try {
            if (this.students.length === 0) {
                throw new Error("No students available");
            }

            const total = this.students.reduce(
                (sum, student) => sum + student.marks,
                0
            );

            return (total / this.students.length).toFixed(2);
        } catch (error) {
            console.error(error.message);
        }
    }
}

function performanceTest() {
    console.time("Performance Test");

    let sum = 0;

    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }

    console.timeEnd("Performance Test");

    return sum;
}

async function fetchUsers() {
    try {
        console.log("Fetching Users...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("API Request Failed");
        }

        const users = await response.json();

        console.table(
            users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email
            }))
        );

        return users;
    } catch (error) {
        console.error("Fetch Error:", error.message);
    } finally {
        console.log("API Operation Finished");
    }
}

function debugExample(a, b) {
    console.log("Input A:", a);
    console.log("Input B:", b);

    debugger;

    const result = a + b;

    console.log("Result:", result);

    return result;
}

function arrayDebugging() {
    const numbers = [10, 20, 30, 40, 50];

    console.log("Original Array");
    console.table(numbers);

    const doubled = numbers.map(num => num * 2);

    console.log("Doubled Array");
    console.table(doubled);

    return doubled;
}

function objectDebugging() {
    const employee = {
        id: 101,
        name: "John",
        department: "IT",
        salary: 50000
    };

    console.log("Employee Object");
    console.table(employee);

    return employee;
}

function main() {
    console.log("Application Started");

    const manager = new StudentManager();

    manager.addStudent(1, "Rahul", 92);
    manager.addStudent(2, "Anjali", 81);
    manager.addStudent(3, "Kiran", 67);
    manager.addStudent(4, "Sneha", 55);

    manager.displayStudents();

    console.log(
        "Average Marks:",
        manager.calculateAverage()
    );

    console.log(
        manager.getStudent(2)
    );

    performanceTest();

    arrayDebugging();

    objectDebugging();

    debugExample(100, 200);

    fetchUsers();

    console.log("Application Ended");
}

main();
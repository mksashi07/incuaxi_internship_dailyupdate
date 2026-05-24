// Student Management System

// Array to store students
let students = [
    { id: 1, name: "Bhairava", marks: 85 },
    { id: 2, name: "Rani", marks: 92 }
];

// Function to display students
function displayStudents() {
    console.log("Student List:");
    
    students.forEach(function(student) {
        console.log(
            "ID: " + student.id +
            ", Name: " + student.name +
            ", Marks: " + student.marks
        );
    });
}

// Function to add student
function addStudent(id, name, marks) {
    students.push({
        id: id,
        name: name,
        marks: marks
    });

    console.log("Student Added Successfully!");
}

// Function to find topper
function findTopper() {
    let topper = students[0];

    students.forEach(function(student) {
        if (student.marks > topper.marks) {
            topper = student;
        }
    });

    console.log(
        "Topper: " +
        topper.name +
        " with " +
        topper.marks +
        " marks"
    );
}

// Display existing students
displayStudents();

// Add new student
addStudent(3, "Kiran", 95);

// Display updated list
displayStudents();

// Find topper
findTopper();
class Student {

    // Constructor
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = [];
    }

    // Add marks
    addMark(mark) {
        this.marks.push(mark);
    }

    // Calculate average
    getAverage() {

        let total = 0;

        for (let mark of this.marks) {
            total += mark;
        }

        return total / this.marks.length;
    }

    // Display student details
    displayInfo() {

        console.log("-----------");
        console.log("Name :", this.name);
        console.log("Age :", this.age);
        console.log("Course :", this.course);
        console.log("Marks :", this.marks);
        console.log("Average :", this.getAverage());
    }
}


// Create student objects
const student1 = new Student("MSK", 20, "Computer Science");

student1.addMark(85);
student1.addMark(90);
student1.addMark(78);

const student2 = new Student("putty", 21, "AI & ML");

student2.addMark(95);
student2.addMark(88);
student2.addMark(92);


// Store all students
const students = [student1, student2];


// Display all students
for (let student of students) {
    student.displayInfo();
}
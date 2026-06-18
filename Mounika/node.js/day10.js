const students = [
{
    studentId: 101,
    name: "Mounika",
    branch: "CSE",
    age: 20
},
{
    studentId: 102,
    name: "Teja",
    branch: "ECE",
    age: 21
},
{
    studentId: 103,
    name: "Anu",
    branch: "EEE",
    age: 22
},
{
    studentId: 104,
    name: "Siri",
    branch: "CSE",
    age: 20
}
];

const courses = [
{
    studentId: 101,
    course: "MongoDB"
},
{
    studentId: 102,
    course: "NodeJS"
},
{
    studentId: 103,
    course: "JavaScript"
}
];

console.log("All Students");
console.table(students);

console.log("Find CSE Students");
console.table(
    students.filter(student =>
        student.branch == "CSE"
    )
);

console.log("Age Greater Than 20");
console.table(
    students.filter(student =>
        student.age > 20
    )
);

console.log("Age Less Than 22");
console.table(
    students.filter(student =>
        student.age < 22
    )
);

console.log("OR Condition");
console.table(
    students.filter(student =>
        student.branch == "CSE" ||
        student.branch == "ECE"
    )
);

console.log("AND Condition");
console.table(
    students.filter(student =>
        student.branch == "CSE" &&
        student.age == 20
    )
);

console.log("Sort Ascending");
console.table(
    [...students].sort(
        (a, b) =>
        a.name.localeCompare(b.name)
    )
);

console.log("Sort Descending");
console.table(
    [...students].sort(
        (a, b) =>
        b.name.localeCompare(a.name)
    )
);

const student = students.find(
    student =>
    student.studentId == 101
);

student.age = 25;

console.log("After Update One");
console.table(students);

students.forEach(student => {
    if (student.branch == "CSE") {
        student.status = "Active";
    }
});

console.log("After Update Many");
console.table(students);

const deleteOne = students.filter(
    student =>
    student.studentId != 104
);

console.log("After Delete One");
console.table(deleteOne);

const deleteMany = students.filter(
    student =>
    student.branch != "EEE"
);

console.log("After Delete Many");
console.table(deleteMany);

console.log("Limit 2 Records");
console.table(
    students.slice(0, 2)
);

const joinedData = students.map(
    student => ({
        ...student,
        courseDetails:
        courses.filter(
            course =>
            course.studentId ==
            student.studentId
        )
    })
);

console.log("Join Students And Courses");
console.log(joinedData);

console.log("Program Completed");
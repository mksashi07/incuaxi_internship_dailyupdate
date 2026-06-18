(function () {

    const students = [
        { id: 101, name: "Mounika", branch: "CSE", year: 2 },
        { id: 102, name: "Siri", branch: "ECE", year: 3 },
        { id: 103, name: "Teja", branch: "EEE", year: 1 },
        { id: 104, name: "Anu", branch: "CSE", year: 4 },
        { id: 105, name: "Ravi", branch: "MECH", year: 2 }
    ];

    console.log("INSERT INTO Students");
    students.push({
        id: 106,
        name: "Venky",
        branch: "IT",
        year: 3
    });

    console.log("SELECT * FROM Students");
    console.table(students);

    console.log("WHERE branch='CSE'");
    console.table(
        students.filter(student =>
            student.branch === "CSE"
        )
    );

    console.log("WHERE year=3");
    console.table(
        students.filter(student =>
            student.year === 3
        )
    );

    const student = students.find(
        student => student.id === 101
    );

    if (student) {
        student.year = 3;
    }

    console.log("UPDATE id=101");
    console.table(students);

    console.log("ORDER BY name ASC");
    console.table(
        [...students].sort((a, b) =>
            a.name.localeCompare(b.name)
        )
    );

    console.log("ORDER BY year DESC");
    console.table(
        [...students].sort((a, b) =>
            b.year - a.year
        )
    );

    console.log("LIMIT 3");
    console.table(
        students.slice(0, 3)
    );

    const courses = [
        { courseId: 1, course: "Java", studentId: 101 },
        { courseId: 2, course: "Python", studentId: 102 },
        { courseId: 3, course: "MySQL", studentId: 103 },
        { courseId: 4, course: "NodeJS", studentId: 104 },
        { courseId: 5, course: "MongoDB", studentId: 105 }
    ];

    console.log("SELECT * FROM Courses");
    console.table(courses);

    const joinResult = students.map(student => {

        const course = courses.find(
            c => c.studentId === student.id
        );

        return {
            id: student.id,
            name: student.name,
            branch: student.branch,
            course: course
                ? course.course
                : "N/A"
        };
    });

    console.log("INNER JOIN");
    console.table(joinResult);

    const deletedStudents = students.filter(
        student => student.id !== 105
    );

    console.log("DELETE id=105");
    console.table(deletedStudents);

    console.log("COUNT");
    console.log(deletedStudents.length);

    console.log("DISTINCT Branches");
    console.log(
        [...new Set(
            students.map(
                student => student.branch
            )
        )]
    );

    console.log("MAX Year");
    console.log(
        Math.max(
            ...students.map(
                student => student.year
            )
        )
    );

    console.log("MIN Year");
    console.log(
        Math.min(
            ...students.map(
                student => student.year
            )
        )
    );

})();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

con.connect(function(err) {
    if (err) throw err;

    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS college", function(err) {
        if (err) throw err;
        console.log("Database Created");
    });

    con.query("USE college", function(err) {
        if (err) throw err;

        const createTable = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            age INT,
            city VARCHAR(50),
            marks INT
        )`;

        con.query(createTable, function(err) {
            if (err) throw err;
            console.log("Table Created");
        });

        const insertData = `
        INSERT INTO students(name, age, city, marks)
        VALUES
        ('Mounika',20,'Anantapur',85),
        ('Ravi',21,'Kurnool',90),
        ('Sita',19,'Kadapa',88),
        ('Ram',22,'Tirupati',75),
        ('Priya',20,'Vijayawada',92)`;

        con.query(insertData, function(err) {
            if (err) throw err;
            console.log("Records Inserted");
        });

        con.query("SELECT * FROM students", function(err, result) {
            if (err) throw err;
            console.log("\nSELECT");
            console.table(result);
        });

        con.query(
            "SELECT * FROM students WHERE marks > 85",
            function(err, result) {
                if (err) throw err;
                console.log("\nWHERE");
                console.table(result);
            }
        );

        con.query(
            "SELECT * FROM students ORDER BY marks DESC",
            function(err, result) {
                if (err) throw err;
                console.log("\nORDER BY");
                console.table(result);
            }
        );

        con.query(
            "UPDATE students SET marks = 95 WHERE id = 1",
            function(err) {
                if (err) throw err;
                console.log("\nRecord Updated");
            }
        );

        con.query(
            "SELECT * FROM students LIMIT 3",
            function(err, result) {
                if (err) throw err;
                console.log("\nLIMIT");
                console.table(result);
            }
        );

        const createCourseTable = `
        CREATE TABLE IF NOT EXISTS courses(
            course_id INT PRIMARY KEY,
            student_id INT,
            course_name VARCHAR(50)
        )`;

        con.query(createCourseTable, function(err) {
            if (err) throw err;
            console.log("\nCourses Table Created");
        });

        const insertCourses = `
        INSERT INTO courses
        VALUES
        (101,1,'Java'),
        (102,2,'Python'),
        (103,3,'MySQL'),
        (104,5,'NodeJS')`;

        con.query(insertCourses, function(err) {
            if (err) throw err;
            console.log("Courses Inserted");
        });

        const joinQuery = `
        SELECT students.id,
               students.name,
               courses.course_name
        FROM students
        INNER JOIN courses
        ON students.id = courses.student_id`;

        con.query(joinQuery, function(err, result) {
            if (err) throw err;
            console.log("\nJOIN");
            console.table(result);
        });

        con.query(
            "DELETE FROM students WHERE id = 4",
            function(err) {
                if (err) throw err;
                console.log("\nRecord Deleted");
            }
        );

        con.query(
            "DROP TABLE courses",
            function(err) {
                if (err) throw err;
                console.log("\nCourses Table Dropped");
                con.end();
            }
        );
    });
});
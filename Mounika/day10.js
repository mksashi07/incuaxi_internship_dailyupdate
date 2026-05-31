const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'college'
});

connection.connect((err) => {
    if (err) {
        console.log('Connection Failed');
        return;
    }

    console.log('Connected to MySQL Database');

    const insertQuery = `
        INSERT INTO students(name, age, city, marks)
        VALUES ('Mounika', 20, 'Anantapur', 90)
    `;

    connection.query(insertQuery, (err, result) => {
        if (err) throw err;
        console.log('Record Inserted');
    });

    const selectQuery = 'SELECT * FROM students';

    connection.query(selectQuery, (err, result) => {
        if (err) throw err;
        console.log('\nAll Records');
        console.table(result);
    });

    const whereQuery =
        "SELECT * FROM students WHERE marks > 80";

    connection.query(whereQuery, (err, result) => {
        if (err) throw err;
        console.log('\nWHERE Clause');
        console.table(result);
    });

    const orderQuery =
        "SELECT * FROM students ORDER BY marks DESC";

    connection.query(orderQuery, (err, result) => {
        if (err) throw err;
        console.log('\nORDER BY');
        console.table(result);
    });

    const updateQuery =
        "UPDATE students SET marks = 95 WHERE id = 1";

    connection.query(updateQuery, (err, result) => {
        if (err) throw err;
        console.log('\nRecord Updated');
    });

    const limitQuery =
        "SELECT * FROM students LIMIT 2";

    connection.query(limitQuery, (err, result) => {
        if (err) throw err;
        console.log('\nLIMIT');
        console.table(result);
    });

    const deleteQuery =
        "DELETE FROM students WHERE id = 2";

    connection.query(deleteQuery, (err, result) => {
        if (err) throw err;
        console.log('\nRecord Deleted');
    });

    const createCourseTable = `
        CREATE TABLE IF NOT EXISTS courses(
            course_id INT PRIMARY KEY,
            student_id INT,
            course_name VARCHAR(50)
        )
    `;

    connection.query(createCourseTable, (err) => {
        if (err) throw err;

        const insertCourse = `
            INSERT INTO courses
            VALUES
            (101,1,'Java'),
            (102,3,'Python')
        `;

        connection.query(insertCourse, (err) => {
            if (err) throw err;

            const joinQuery = `
                SELECT students.id,
                       students.name,
                       courses.course_name
                FROM students
                INNER JOIN courses
                ON students.id = courses.student_id
            `;

            connection.query(joinQuery, (err, result) => {
                if (err) throw err;

                console.log('\nJOIN Result');
                console.table(result);

                const dropQuery =
                    "DROP TABLE courses";

                connection.query(dropQuery, (err) => {
                    if (err) throw err;

                    console.log('\nCourses Table Dropped');

                    connection.end();
                });
            });
        });
    });
});
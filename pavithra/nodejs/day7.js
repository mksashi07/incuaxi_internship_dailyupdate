const mysql = require('mysql2/promise');

async function runDatabaseOperations() {
    let connection;

    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'college'
        });

        console.log('Connected to MySQL Database');

        // INSERT
        await connection.execute(
            `INSERT INTO students(name, age, city, marks)
             VALUES (?, ?, ?, ?)`,
            ['Mounika', 20, 'Anantapur', 90]
        );

        console.log('Record Inserted');

        // SELECT ALL
        const [students] = await connection.execute(
            'SELECT * FROM students'
        );

        console.log('\nAll Records');
        console.table(students);

        // WHERE
        const [highMarks] = await connection.execute(
            'SELECT * FROM students WHERE marks > ?',
            [80]
        );

        console.log('\nStudents With Marks > 80');
        console.table(highMarks);

        // ORDER BY
        const [ordered] = await connection.execute(
            'SELECT * FROM students ORDER BY marks DESC'
        );

        console.log('\nORDER BY Marks DESC');
        console.table(ordered);

        // UPDATE
        await connection.execute(
            'UPDATE students SET marks = ? WHERE id = ?',
            [95, 1]
        );

        console.log('\nRecord Updated');

        // LIMIT
        const [limited] = await connection.execute(
            'SELECT * FROM students LIMIT 2'
        );

        console.log('\nLIMIT 2');
        console.table(limited);

        // CREATE TABLE
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS courses (
                course_id INT PRIMARY KEY,
                student_id INT,
                course_name VARCHAR(50)
            )
        `);

        console.log('\nCourses Table Created');

        // INSERT COURSES
        await connection.execute(`
            INSERT INTO courses
            VALUES
            (101,1,'Java'),
            (102,3,'Python')
        `);

        console.log('Course Records Inserted');

        // INNER JOIN
        const [joinResult] = await connection.execute(`
            SELECT
                students.id,
                students.name,
                students.city,
                students.marks,
                courses.course_name
            FROM students
            INNER JOIN courses
            ON students.id = courses.student_id
        `);

        console.log('\nINNER JOIN Result');
        console.table(joinResult);

        // DELETE
        await connection.execute(
            'DELETE FROM students WHERE id = ?',
            [2]
        );

        console.log('\nRecord Deleted');

        // AGGREGATE FUNCTIONS
        const [stats] = await connection.execute(`
            SELECT
                COUNT(*) AS TotalStudents,
                MAX(marks) AS HighestMarks,
                MIN(marks) AS LowestMarks,
                AVG(marks) AS AverageMarks
            FROM students
        `);

        console.log('\nStatistics');
        console.table(stats);

        // DROP TABLE
        await connection.execute(
            'DROP TABLE IF EXISTS courses'
        );

        console.log('\nCourses Table Dropped');

    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        if (connection) {
            await connection.end();
            console.log('\nConnection Closed');
        }
    }
}

runDatabaseOperations();

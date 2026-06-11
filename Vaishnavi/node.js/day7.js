//Database Connection -  establishes communication between a Node.js application and a MySQL database.
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'college'
});

connection.connect((err) => {
    if (err) {
        console.log("Connection Failed");
        return;
    }

    console.log("Connected Successfully");
});

//INSERT - This  statement is used to add new records into a table.
const query = `
INSERT INTO students(name, age, city)
VALUES ('Mounika', 20, 'Anantapur')
`;

connection.query(query, (err, result) => {
    if (err) throw err;

    console.log("Record Inserted");
});

//SELECT statement retrieves data from a table.
connection.query(
    "SELECT * FROM students",
    (err, result) => {

        if (err) throw err;

        console.table(result);
    }
);

//WHERE clause filters records based on a condition.
connection.query(
    "SELECT * FROM students WHERE marks > 80",
    (err, result) => {

        if (err) throw err;

        console.table(result);
    }
);

//ORDER BY clause sorts records in ascending or descending order.
connection.query(
    "SELECT * FROM students ORDER BY marks DESC",
    (err, result) => {

        if (err) throw err;

        console.table(result);
    }
);

//UPDATE statement modifies existing records.
connection.query(
    "UPDATE students SET marks = 95 WHERE id = 1",
    (err, result) => {

        if (err) throw err;

        console.log("Record Updated");
    }
);

//LIMIT clause restricts the number of records returned.
connection.query(
    "SELECT * FROM students LIMIT 2",
    (err, result) => {

        if (err) throw err;

        console.table(result);
    }
);
//DELETE statement removes records from a table.
connection.query(
    "DELETE FROM students WHERE id = 2",
    (err, result) => {

        if (err) throw err;

        console.log("Record Deleted");
    }
);

//CREATE TABLE statement creates a new table in the database.
const createTable = `
CREATE TABLE courses(
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    duration VARCHAR(20)
)
`;

connection.query(createTable, (err) => {

    if (err) throw err;

    console.log("Table Created");
});


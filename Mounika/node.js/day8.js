<<<<<<< HEAD
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("CollegeDB");

        const students = db.collection("Students");

        await students.insertMany([
            {
                rollno: 101,
                name: "Mounika",
                branch: "CSE",
                year: 2
            },
            {
                rollno: 102,
                name: "Siri",
                branch: "ECE",
                year: 3
            },
            {
                rollno: 103,
                name: "Teja",
                branch: "EEE",
                year: 1
            },
            {
                rollno: 104,
                name: "Anu",
                branch: "CSE",
                year: 4
            },
            {
                rollno: 105,
                name: "Ravi",
                branch: "MECH",
                year: 2
            }
        ]);

        console.log("Records Inserted");

        const allStudents = await students.find({}).toArray();

        console.log("All Students");
        console.log(allStudents);

        const cseStudents = await students.find({
            branch: "CSE"
        }).toArray();

        console.log("CSE Students");
        console.log(cseStudents);

        const oneStudent = await students.findOne({
            rollno: 102
        });

        console.log("Single Student");
        console.log(oneStudent);

        await students.updateOne(
            {
                rollno: 101
            },
            {
                $set: {
                    year: 3
                }
            }
        );

        console.log("Record Updated");

        const updatedStudent = await students.findOne({
            rollno: 101
        });

        console.log(updatedStudent);

        await students.deleteOne({
            rollno: 105
        });

        console.log("One Record Deleted");

        const count = await students.countDocuments();

        console.log("Total Records");
        console.log(count);

        const sortedStudents = await students
            .find({})
            .sort({
                name: 1
            })
            .toArray();

        console.log("Sorted Students");
        console.log(sortedStudents);

        const limitedStudents = await students
            .find({})
            .limit(3)
            .toArray();

        console.log("Limited Students");
        console.log(limitedStudents);

        const yearWiseStudents = await students.find({
            year: 3
        }).toArray();

        console.log("Year Wise Students");
        console.log(yearWiseStudents);

        const projectionData = await students.find(
            {},
            {
                projection: {
                    _id: 0,
                    name: 1,
                    branch: 1
                }
            }
        ).toArray();

        console.log("Projection Data");
        console.log(projectionData);

        const finalData = await students.find({}).toArray();

        console.log("Final Records");
        console.log(finalData);

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
        console.log("Connection Closed");
    }
}

main();
=======
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("CollegeDB");

        const students = db.collection("Students");

        await students.insertMany([
            {
                rollno: 101,
                name: "Mounika",
                branch: "CSE",
                year: 2
            },
            {
                rollno: 102,
                name: "Siri",
                branch: "ECE",
                year: 3
            },
            {
                rollno: 103,
                name: "Teja",
                branch: "EEE",
                year: 1
            },
            {
                rollno: 104,
                name: "Anu",
                branch: "CSE",
                year: 4
            },
            {
                rollno: 105,
                name: "Ravi",
                branch: "MECH",
                year: 2
            }
        ]);

        console.log("Records Inserted");

        const allStudents = await students.find({}).toArray();

        console.log("All Students");
        console.log(allStudents);

        const cseStudents = await students.find({
            branch: "CSE"
        }).toArray();

        console.log("CSE Students");
        console.log(cseStudents);

        const oneStudent = await students.findOne({
            rollno: 102
        });

        console.log("Single Student");
        console.log(oneStudent);

        await students.updateOne(
            {
                rollno: 101
            },
            {
                $set: {
                    year: 3
                }
            }
        );

        console.log("Record Updated");

        const updatedStudent = await students.findOne({
            rollno: 101
        });

        console.log(updatedStudent);

        await students.deleteOne({
            rollno: 105
        });

        console.log("One Record Deleted");

        const count = await students.countDocuments();

        console.log("Total Records");
        console.log(count);

        const sortedStudents = await students
            .find({})
            .sort({
                name: 1
            })
            .toArray();

        console.log("Sorted Students");
        console.log(sortedStudents);

        const limitedStudents = await students
            .find({})
            .limit(3)
            .toArray();

        console.log("Limited Students");
        console.log(limitedStudents);

        const yearWiseStudents = await students.find({
            year: 3
        }).toArray();

        console.log("Year Wise Students");
        console.log(yearWiseStudents);

        const projectionData = await students.find(
            {},
            {
                projection: {
                    _id: 0,
                    name: 1,
                    branch: 1
                }
            }
        ).toArray();

        console.log("Projection Data");
        console.log(projectionData);

        const finalData = await students.find({}).toArray();

        console.log("Final Records");
        console.log(finalData);

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
        console.log("Connection Closed");
    }
}
>>>>>>> 515913c7c29f90854bfee2d20de868f8b2422dc4

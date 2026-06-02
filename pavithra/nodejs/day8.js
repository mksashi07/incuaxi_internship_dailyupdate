const { MongoClient } = require("mongodb");
// MongoDB Connection URL
const url = "mongodb://127.0.0.1:27017";
// Create Client
const client = new MongoClient(url);
// Main Function
async function run() {
    try {
        // Connect MongoDB
        await client.connect();
        console.log("MongoDB Connected Successfully");
        // CREATE DATABASE
        const db = client.db("StudentDB");
        console.log("Database Created/Selected");
        //CREATE COLLECTION
        const students = db.collection("students");
        console.log("Collection Created/Selected");
        // INSERT ONE DOCUMENT
        const result1 = await students.insertOne({
            name: "Pavithra",
            age: 21,
            city: "Nellore",
            course: "B.Tech"
        });
        console.log("InsertOne Result:");
        console.log(result1);
        // INSERT MANY DOCUMENTS
        const result2 = await students.insertMany([
            {
                name: "Ravi",
                age: 22,
                city: "Hyderabad",
                course: "MCA"
            },
            {
                name: "Priya",
                age: 20,
                city: "Vijayawada",
                course: "B.Sc"
            },
            {
                name: "Kiran",
                age: 24,
                city: "Tirupati",
                course: "MBA"
            },
            {
                name: "Anu",
                age: 23,
                city: "Hyderabad",
                course: "B.Tech"
            }
        ]);
        console.log("InsertMany Result:");
        console.log(result2);
        // FIND ALL DOCUMENTS
        const allStudents = await students
            .find({})
            .toArray();
        console.log("\nAll Students:");
        console.log(allStudents);
        // FIND ONE DOCUMENT
        const oneStudent = await students.findOne({
            name: "Ravi"
        });
        console.log("\nFind One:");
        console.log(oneStudent);
        // QUERY EXAMPLE 1
        // age > 21
        const ageQuery = await students
            .find({
                age: { $gt: 21 }
            })
            .toArray();
        console.log("\nAge Greater Than 21:");
        console.log(ageQuery);
        // QUERY EXAMPLE 2
        // city = Hyderabad
        const cityQuery = await students
            .find({
                city: "Hyderabad"
            })
            .toArray();
        console.log("\nStudents From Hyderabad:");
        console.log(cityQuery);
        // QUERY EXAMPLE 3
        // age < 23
        const lessAge = await students
            .find({
                age: { $lt: 23 }
            })
            .toArray();
        console.log("\nAge Less Than 23:");
        console.log(lessAge);
        // QUERY EXAMPLE 4
        // course = B.Tech
        const courseData = await students
            .find({
                course: "B.Tech"
            })
            .toArray();
        console.log("\nB.Tech Students:");
        console.log(courseData);
        // SORT ASCENDING
        const sortAsc = await students
            .find({})
            .sort({ age: 1 })
            .toArray();
        console.log("\nSort By Age Ascending:");
        console.log(sortAsc);
        // SORT DESCENDING    
        const sortDesc = await students
            .find({})
            .sort({ age: -1 })
            .toArray();
        console.log("\nSort By Age Descending:");
        console.log(sortDesc);
        // LIMIT RECORDS
        const limitData = await students
            .find({})
            .limit(3)
            .toArray();
        console.log("\nFirst 3 Records:");
        console.log(limitData);
        // COUNT DOCUMENTS
        const count = await students.countDocuments();
        console.log("\nTotal Documents:");
        console.log(count);
        // FIND WITH MULTIPLE CONDITIONS
        const multipleQuery = await students
            .find({
                city: "Hyderabad",
                age: { $gt: 20 }
            })
            .toArray();
        console.log("\nMultiple Conditions:");
        console.log(multipleQuery);
        // PROJECT SPECIFIC FIELDS
        const projection = await students
            .find(
                {},
                {
                    projection: {
                        _id: 0,
                        name: 1,
                        city: 1
                    }
                }
            )
            .toArray();
        console.log("\nProjection Example:");
        console.log(projection);
        console.log("\nProgram Completed Successfully");
    } catch (error) {
        console.log("Error:");
        console.log(error);
    } finally {
        await client.close();
        console.log("MongoDB Connection Closed");
    }
}
// Run Program
run();

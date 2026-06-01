const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("MongoDB Connected");

    const db = client.db("CollegeDB");

    const students = db.collection("students");
    const courses = db.collection("courses");

    await students.deleteMany({});
    await courses.deleteMany({});

    await students.insertMany([
      { name: "Pavithra", age: 21, courseId: 101 },
      { name: "Ravi", age: 23, courseId: 102 },
      { name: "Anu", age: 20, courseId: 101 },
      { name: "Kiran", age: 24, courseId: 103 }
    ]);

    await courses.insertMany([
      { courseId: 101, courseName: "B.Tech" },
      { courseId: 102, courseName: "MCA" },
      { courseId: 103, courseName: "MBA" }
    ]);

    console.log("\nSORT ASCENDING");
    const sorted = await students.find()
      .sort({ age: 1 })
      .toArray();
    console.log(sorted);

    console.log("\nLIMIT 2 RECORDS");
    const limited = await students.find()
      .limit(2)
      .toArray();
    console.log(limited);

    console.log("\nUPDATE ONE");
    await students.updateOne(
      { name: "Pavithra" },
      { $set: { age: 22 } }
    );
    console.log(await students.findOne({ name: "Pavithra" }));

    console.log("\nUPDATE MANY");
    await students.updateMany(
      { courseId: 101 },
      { $set: { status: "Active" } }
    );
    console.log(await students.find({ courseId: 101 }).toArray());

    console.log("\nDELETE ONE");
    await students.deleteOne({ name: "Anu" });
    console.log(await students.find().toArray());

    console.log("\nDELETE MANY");
    await students.deleteMany({ age: { $gt: 23 } });
    console.log(await students.find().toArray());

    console.log("\nJOIN USING LOOKUP");
    const result = await students.aggregate([
      {
        $lookup: {
          from: "courses",
          localField: "courseId",
          foreignField: "courseId",
          as: "courseDetails"
        }
      }
    ]).toArray();

    console.log(result);

    console.log("\nDROP COLLECTION ");
    const dropResult = await courses.drop();
    console.log("Courses Dropped:", dropResult);

  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
    console.log("\nConnection Closed");
  }  
}

run();

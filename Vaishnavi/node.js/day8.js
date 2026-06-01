const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("MongoDB Connected");

    const db = client.db("CompanyDB");

    const employees = db.collection("employees");
    const departments = db.collection("departments");

    // Delete old data
    await employees.deleteMany({});
    await departments.deleteMany({});

    // Insert Employees
    await employees.insertMany([
      {
        name: "Rahul",
        age: 25,
        salary: 40000,
        deptId: 1
      },
      {
        name: "Priya",
        age: 28,
        salary: 50000,
        deptId: 2
      },
      {
        name: "Arjun",
        age: 30,
        salary: 60000,
        deptId: 1
      },
      {
        name: "Sneha",
        age: 27,
        salary: 45000,
        deptId: 3
      }
    ]);

    // Insert Departments
    await departments.insertMany([
      {
        deptId: 1,
        deptName: "IT"
      },
      {
        deptId: 2,
        deptName: "HR"
      },
      {
        deptId: 3,
        deptName: "Finance"
      }
    ]);

     // SORT
    console.log("\nSORT BY SALARY ASCENDING");

    const sortedEmployees = await employees
      .find()
      .sort({ salary: 1 })
      .toArray();

    console.log(sortedEmployees);
    // LIMIT
    console.log("\nLIMIT 2 RECORDS");

    const limitedEmployees = await employees
      .find()
      .limit(2)
      .toArray();

    console.log(limitedEmployees);

    // UPDATE ONE
    console.log("\nUPDATE ONE");

    await employees.updateOne(
      { name: "Rahul" },
      {
        $set: {
          salary: 45000
        }
      }
    );

    console.log(
      await employees.findOne({ name: "Rahul" })
    );

    // UPDATE MANY
    console.log("\nUPDATE MANY");

    await employees.updateMany(
      { deptId: 1 },
      {
        $set: {
          status: "Permanent"
        }
      }
    );

    console.log(
      await employees.find({ deptId: 1 }).toArray()
    );

    // DELETE ONE
    
    console.log("\nDELETE ONE");

    await employees.deleteOne({
      name: "Sneha"
    });

    console.log(
      await employees.find().toArray()
    );

    // DELETE MANY
    console.log("\nDELETE MANY");

    await employees.deleteMany({
      age: { $gt: 28 }
    });

    console.log(
      await employees.find().toArray()
    );

    // LOOKUP (JOIN)
    console.log("\nJOIN USING LOOKUP");

    const employeeDepartment = await employees
      .aggregate([
        {
          $lookup: {
            from: "departments",
            localField: "deptId",
            foreignField: "deptId",
            as: "departmentInfo"
          }
        }
      ])
      .toArray();

    console.log(employeeDepartment);

    // DROP COLLECTION
    console.log("\nDROP COLLECTION");

    const dropResult =
      await departments.drop();

    console.log(
      "Departments Dropped:",
      dropResult
    );

  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
    console.log("\nConnection Closed");
  }
}
run();

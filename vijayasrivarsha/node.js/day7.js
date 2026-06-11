const dns = require("dns");
const assert = require("assert");
const util = require("util");

// Convert callback-based DNS methods into Promise-based methods
const lookupAsync = util.promisify(dns.lookup);
const resolve4Async = util.promisify(dns.resolve4);

async function networkAnalyzer() {

    
    console.log(" DNS + ASSERT + UTIL EXAMPLE ");
    

    // Student Object
    const student = {
        id: 101,
        name: "Varsha",
        age: 21,
        course: "Node.js",
        city: "Vijayawada",
        skills: ["JavaScript", "Node.js", "Git"]
    };

    
    // UTIL MODULE EXAMPLES
    

    console.log("1. UTIL MODULE EXAMPLES\n");

    // util.format()
    const formattedMessage = util.format(
        "Student: %s | Age: %d | Course: %s",
        student.name,
        student.age,
        student.course
    );

    console.log("Formatted Message:");
    console.log(formattedMessage);
    console.log();

    // util.inspect()
    console.log("Student Object Using util.inspect():");

    console.log(
        util.inspect(student, {
            colors: false,
            depth: null
        })
    );

    console.log();

    // util.types
    console.log("Checking Object Types:");

    console.log(
        "Is Date?",
        util.types.isDate(new Date())
    );

    console.log(
        "Is ArrayBuffer?",
        util.types.isArrayBuffer(new ArrayBuffer())
    );

    console.log();

   
    // ASSERT MODULE EXAMPLES
    

    console.log("2. ASSERT MODULE EXAMPLES\n");

    try {

        assert.strictEqual(student.age, 21);
        console.log(" Age Validation Passed");

        assert.notStrictEqual(student.name, "");
        console.log(" Name Validation Passed");

        assert.ok(student.course);
        console.log(" Course Validation Passed");

        assert.ok(student.skills.length > 0);
        console.log(" Skills Validation Passed");

        assert.deepStrictEqual(
            student.skills,
            ["JavaScript", "Node.js", "Git"]
        );

        console.log(" Skills Array Validation Passed");

    } catch (error) {

        console.log(
            "Assertion Failed:",
            error.message
        );

    }

    console.log();

    
    // DNS MODULE EXAMPLES
    
    console.log("3. DNS MODULE EXAMPLES\n");

    try {

        const lookupResult =
            await lookupAsync("google.com");

        console.log("DNS Lookup Result:");

        console.log(
            "IP Address:",
            lookupResult.address
        );

        console.log(
            "Family:",
            lookupResult.family
        );

        console.log();

        const addresses =
            await resolve4Async("google.com");

        console.log(
            "All IPv4 Addresses:"
        );

        addresses.forEach(
            (address, index) => {

                console.log(
                    `${index + 1}. ${address}`
                );

            }
        );

        console.log();

        // Validate DNS Result

        assert.ok(
            lookupResult.address
        );

        console.log(
            "✓ DNS Lookup Validation Passed"
        );

    } catch (error) {

        console.log(
            "DNS Error:",
            error.message
        );

    }

    console.log();

    // FINAL REPORT USING UTIL.FORMAT
    

    console.log("4. FINAL REPORT\n");

    const report = util.format(
        `
Student Report
--------------
ID      : %d
Name    : %s
Age     : %d
Course  : %s
City    : %s
`,
        student.id,
        student.name,
        student.age,
        student.course,
        student.city
    );

    console.log(report);

   
    // EXTRA ASSERTIONS
  

    console.log("5. EXTRA ASSERTIONS\n");

    try {

        assert.strictEqual(
            typeof student.name,
            "string"
        );

        console.log(
            "✓ Name is String"
        );

        assert.strictEqual(
            typeof student.age,
            "number"
        );

        console.log(
            "✓ Age is Number"
        );

        assert.ok(
            Array.isArray(student.skills)
        );

        console.log(
            "✓ Skills is Array"
        );

    } catch (error) {

        console.log(
            "Validation Error:",
            error.message
        );

    }

    console.log();

    // DISPLAY COMPLETE OBJECT
    
    console.log(
        "6. COMPLETE OBJECT DETAILS\n"
    );

    console.log(
        util.inspect(student, {
            colors: false,
            depth: null
        })
    );

    
    console.log(" PROGRAM COMPLETED SUCCESSFULLY ");
   

// Execute Function
networkAnalyzer();
}
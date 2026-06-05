let studentName = "Yogesh";
let marks1 = 85;
let marks2 = 78;
let marks3 = 92;
let attendance = 88;

// Total and Average
let total = marks1 + marks2 + marks3;
let average = total / 3;

// Pass or Fail
let passStatus = (marks1 >= 35 && marks2 >= 35 && marks3 >= 35) 
    ? "Pass" 
    : "Fail";

// Grade calculation
let grade = average >= 90 ? "A" :
            average >= 75 ? "B" :
            average >= 60 ? "C" :
            average >= 35 ? "D" : "F";

// Scholarship eligibility
let scholarship = (average >= 85 && attendance >= 80)
    ? "Eligible for Scholarship"
    : "Not Eligible";

// Bonus marks check
let bonusMarks = average > 80 ? 5 : 0;
let finalAverage = average + bonusMarks;

// Even or odd check for total
let totalCheck = total % 2 == 0 ? "Even Total" : "Odd Total";

// Topper check
let topper = finalAverage >= 95 || marks3 == 100
    ? "Outstanding Student"
    : "Regular Student";

// Display all results
console.log("Student Name:", studentName);
console.log("Marks 1:", marks1);
console.log("Marks 2:", marks2);
console.log("Marks 3:", marks3);
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Pass Status:", passStatus);
console.log("Grade:", grade);
console.log("Attendance:", attendance + "%");
console.log("Scholarship:", scholarship);
console.log("Bonus Marks:", bonusMarks);
console.log("Final Average:", finalAverage);
console.log("Total Check:", totalCheck);
console.log("Topper Status:", topper);
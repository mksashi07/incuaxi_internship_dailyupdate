let students = ["Kiran", "Rahul", "Suresh", "Ravi"];
let marks = [85, 45, 72, 30];

console.log("------ Student Report ------");

for(let i = 0; i < students.length; i++){

    console.log("Student Name : " + students[i]);
    console.log("Marks : " + marks[i]);

    if(marks[i] >= 50){
        console.log("Result : Pass");
    }else{
        console.log("Result : Fail");
    }

    console.log("--------------------------");
}
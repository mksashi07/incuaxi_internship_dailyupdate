let employees = [
    { name: "Kiran", salary: 50000 },
    { name: "Ajay", salary: 30000 },
    { name: "Rahul", salary: 70000 }
];


let highSalary = employees.filter((emp) => 
    {
    return emp.salary > 40000;
      });

let bonusSalary = employees.map((emp) => {
    return {
        ...emp,
        salary: emp.salary + 5000
    };
});

let total = employees.reduce((sum, emp) => {
    return sum + emp.salary;
}, 0);

console.log(highSalary);
console.log(bonusSalary);
console.log(total);


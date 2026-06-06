// PACKAGE INFORMATION
const packageInfo = {
    name: "my-node-package",
    version: "1.0.0",
    description: "Node Package Demo",
    author: "Student",
    license: "MIT",
    main: "app.js"
};
console.log("\nPACKAGE DETAILS");
console.log("----------------");
console.log("Package Name :", packageInfo.name);
console.log("Version      :", packageInfo.version);
console.log("Description  :", packageInfo.description);
console.log("Author       :", packageInfo.author);
console.log("License      :", packageInfo.license);
// MANAGE DEPENDENCIES
let dependencies = [
    {
        name: "express",
        version: "^4.19.2"
    },
    {
        name: "mongoose",
        version: "^8.0.0"
    },
    {
        name: "nodemon",
        version: "^3.1.0"
    }
];
console.log("Installed Dependencies:");
dependencies.forEach(dep => {
    console.log(
        dep.name +
        " : " +
        dep.version
    );
});
function addDependency(name, version) {
  dependencies.push({
        name,
        version
    });
    console.log(
        name +
        " installed successfully"
    );
}
addDependency(
    "axios",
    "^1.7.0"
);
function removeDependency(name) {
    dependencies =
        dependencies.filter(
            dep => dep.name !== name
        );
    console.log(
        name +
        " removed successfully"
    );
}
removeDependency("mongoose");
dependencies.forEach(dep => {
    console.log(
        dep.name +
        " : " +
        dep.version
    );
});
console.log("\nVERSION UPDATE");
function updateVersion(newVersion) {
    packageInfo.version =
        newVersion;
    console.log(
        "Version Updated To:",
        newVersion
    );
}
updateVersion("1.1.0");
// PACKAGE VALIDATION
console.log("\nPACKAGE VALIDATION");
function validatePackage(pkg) {
    if (
        pkg.name &&
        pkg.version &&
        pkg.main
    ) {
        console.log(
            "Package Validation Success"
        );
        return true;
    }
    console.log(
        "Package Validation Failed"
    );
    return false;
}
validatePackage(packageInfo);
// PACKAGE PUBLISH SIMULATION
console.log("\nPACKAGE PUBLISH PROCESS");
function publishPackage(pkg) {
    console.log(
        "Preparing Package..."
    );
    console.log(
        "Checking Dependencies..."
    );
    console.log(
        "Checking Version..."
    );
    console.log(
        "Packaging Files..."
    );
    console.log(
        "Uploading To npm Registry..."
    );
    console.log(
        "Package Published Successfully"
    );
    console.log(
        "Package Name :",
        pkg.name
    );
    console.log(
        "Version :",
        pkg.version
    );
}
publishPackage(packageInfo);
// FILE SYSTEM DEMO
const fs = require("fs");
console.log("\nGENERATING PACKAGE REPORT");
let report = `
Package Name : ${packageInfo.name}
Version      : ${packageInfo.version}
Author       : ${packageInfo.author}
Dependencies
${dependencies.map(
    d => `${d.name} : ${d.version}`
).join("\n")}
`;
fs.writeFileSync(
    "package-report.txt",
    report
);
console.log(
    "Report Generated Successfully"
);
// TIMER DEMO
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(
        "Processing Step",
        count
    );
    if (count === 5) {
        clearInterval(timer);
        summary();
    }
}, 1000);

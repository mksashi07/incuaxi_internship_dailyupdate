// PACKAGE INFORMATION
const packageInfo = {
    name: "student-package",
    version: "1.0.0",
    description: "Node Package Demo",
    main: "app.js",
    author: "Student",
    license: "MIT"
};
console.log("Package Name :", packageInfo.name);
console.log("Version      :", packageInfo.version);
console.log("Description  :", packageInfo.description);
console.log("Main File    :", packageInfo.main);
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
        " --> " +
        dep.version
    );
});
// ADD DEPENDENCY
function addDependency(name, version) {
    dependencies.push({
        name: name,
        version: version
    });
    console.log(
        name +
        " Installed Successfully"
    );
}
addDependency(
    "axios",
    "^1.7.0"
);
addDependency(
    "cors",
    "^2.8.5"
);
// DISPLAY DEPENDENCIES
dependencies.forEach(dep => {
    console.log(
        dep.name +
        " --> " +
        dep.version
    );
});
// REMOVE DEPENDENCY
function removeDependency(name) {
    dependencies = dependencies.filter(
        dep => dep.name !== name

    );
    console.log(
        name +
        " Removed Successfully"
    );
}
removeDependency("mongoose");
// DISPLAY AFTER REMOVAL
dependencies.forEach(dep => {
    console.log(
        dep.name +
        " --> " +
        dep.version
    );
});
// UPDATE PACKAGE VERSION
function updateVersion(version) {
    packageInfo.version = version;
   console.log(
        "Version Updated To:",
        version
    );
}
updateVersion("1.1.0");
// PACKAGE VALIDATION
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
// PACKAGE SIZE ESTIMATION
let packageSize = 0;
dependencies.forEach(dep => {
    packageSize += 5;
});
console.log(
    "Estimated Package Size:",
    packageSize,
    "MB"
);
// GENERATE PACKAGE REPORT
const fs = require("fs");
let report = "";
report +=
"Package Name : " +
packageInfo.name +
"\n";
report +=
"Version : " +
packageInfo.version +
"\n";
report +=
"Author : " +
packageInfo.author +
"\n\n";
report +=
"Dependencies\n";
report +=
"-----------------\n";
dependencies.forEach(dep => {
    report +=
        dep.name +
        " : " +
        dep.version +
        "\n";
});
fs.writeFileSync(
    "package-report.txt",
    report
);
console.log(
    "Report Generated Successfully"
);
// PACKAGE PUBLISHING
function publishPackage(pkg) {
    console.log(
        "Checking Package..."
    );
    console.log(
        "Checking Dependencies..."
    );
    console.log(
        "Checking Version..."
    );
    console.log(
        "Packing Files..."
    );
    console.log(
        "Uploading To Registry..."
    );
    console.log(
        "Publishing Package..."
    );
    console.log(
        "Package Published Successfully"
    );
    console.log(
        "Package:",
        pkg.name
    );
    console.log(
        "Version:",
        pkg.version
    );
}
publishPackage(packageInfo);
// TIMER SIMULATION
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
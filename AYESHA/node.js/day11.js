"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

class User {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  getInfo() {
    return `${this.id} - ${this.name} - ${this.role}`;
  }
}

function validateUser(user) {
  if (typeof user.id !== "number") {
    throw new Error("Invalid ID");
  }

  if (typeof user.name !== "string") {
    throw new Error("Invalid Name");
  }

  return true;
}

function createResponse(status, data) {
  return {
    status,
    data,
    time: new Date().toISOString(),
  };
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loadUsers() {
  await delay(1000);

  return [
    new User(1, "Ayesha", "Admin"),
    new User(2, "Rahul", "Developer"),
    new User(3, "Kiran", "Tester"),
  ];
}

async function main() {
  console.log("\nApplication Started\n");

  const users = await loadUsers();

  users.forEach((user) => {
    validateUser(user);
  });

  const formattedUsers = users.map((user) => {
    return {
      id: user.id,
      name: user.name.toUpperCase(),
      role: user.role,
    };
  });

  const admins = formattedUsers.filter((user) => {
    return user.role === "Admin";
  });

  const response = createResponse("success", formattedUsers);

  const filePath = path.join(__dirname, "users.json");

  fs.writeFileSync(
    filePath,
    JSON.stringify(response, null, 2)
  );

  const fileData = fs.readFileSync(filePath, "utf-8");

  console.log("Saved JSON File:\n");
  console.log(fileData);

  console.log("\nAdmin Users:\n");
  console.log(admins);

  console.log("\nSystem Information:\n");
  console.log({
    platform: os.platform(),
    cpuCores: os.cpus().length,
    freeMemory: os.freemem(),
    homeDirectory: os.homedir(),
  });

  const config = {
    database: {
      host: "localhost",
    },
  };

  console.log("\nOptional Chaining:");
  console.log(config?.database?.host);

  const username = null;

  console.log("\nNullish Coalescing:");
  console.log(username ?? "DefaultUser");

  const backendSkills = ["Node.js", "Express"];
  const frontendSkills = ["HTML", "CSS", "JavaScript"];

  const fullStackSkills = [
    ...backendSkills,
    ...frontendSkills,
  ];

  console.log("\nSkills:");
  console.log(fullStackSkills);

  console.log("\nApplication Completed\n");
}

main().catch((error) => {
  console.log("Error:", error.message);
});
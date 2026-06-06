// =====================================
// Advanced TypeScript Example
// =====================================

// Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

// Type Alias
type Contact = {
  email: string;
  phone: string;
};

// Interface
interface Person {
  id: number;
  name: string;
  age: number;
}

// Intersection Type
type EmployeeInfo = Person & Contact;

// Generic Interface
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Abstract Class
abstract class Account {
  protected balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  abstract displayBalance(): void;
}

// Derived Class
class SavingsAccount extends Account {
  displayBalance(): void {
    console.log(`Balance: ₹${this.balance}`);
  }
}

// Class with Access Modifiers
class Employee implements EmployeeInfo {
  public id: number;
  public name: string;
  public age: number;
  public email: string;
  public phone: string;

  private salary: number;
  protected role: Role;

  constructor(
    id: number,
    name: string,
    age: number,
    email: string,
    phone: string,
    salary: number,
    role: Role
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.salary = salary;
    this.role = role;
  }

  public display(): void {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Role:", this.role);
  }

  public getSalary(): number {
    return this.salary;
  }
}

// Generic Function
function printValue<T>(value: T): void {
  console.log("Value:", value);
}

// Generic Class
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(
  a: string | number,
  b: string | number
): string | number {
  return (a as any) + (b as any);
}

// Union Type
let userStatus: string | boolean;

userStatus = "Active";
console.log(userStatus);

userStatus = true;
console.log(userStatus);

// Employee Object
const emp = new Employee(
  1,
  "Varsha",
  21,
  "varsha@gmail.com",
  "9876543210",
  50000,
  Role.Admin
);

emp.display();

console.log("Salary:", emp.getSalary());

// Generic Function Calls
printValue<string>("Hello TypeScript");
printValue<number>(100);
printValue<boolean>(true);

// Generic Class Example
const numberStore = new DataStore<number>();

numberStore.add(10);
numberStore.add(20);
numberStore.add(30);

console.log(numberStore.getAll());

// Function Overloading
console.log(combine(10, 20));
console.log(combine("Hello ", "World"));

// API Response Example
const response: ApiResponse<Employee> = {
  success: true,
  data: emp,
  message: "Employee fetched successfully"
};

console.log(response);

// Optional Chaining
const company = {
  name: "ABC Pvt Ltd",
  address: {
    city: "Chennai"
  }
};

console.log(company?.address?.city);

// Nullish Coalescing
const language: string | null = null;

console.log(language ?? "TypeScript");

// Abstract Class Example
const account = new SavingsAccount(10000);

account.displayBalance();
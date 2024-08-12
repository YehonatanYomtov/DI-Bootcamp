// Exercise 1
const message: string = "Hello World!";
console.log("message: ", message);

// Exercise 2
const age: number = 48;
const username: string = "John";
console.log("age: ", age);
console.log("name: ", username);

// Exercise 3
let id: string | number;

id = 123;
id = "hio4322sa-ds234";
console.log("id: ", id);

// Exercise 4
function checkNumber(num: number): string {
  if (num > 0) {
    return "Positive number";
  } else if (num < 0) {
    return "Negative number";
  } else {
    return "Its a 0";
  }
}

console.log(checkNumber(-12));
console.log(checkNumber(0));
console.log(checkNumber(12));

// Exercise 5
function add(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }

  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + input2;
  }
}

console.log(add(5, 5));
console.log(add("Hello ", "World"));

// Exercise 6
function getDetails(name: string, age: number): [string, number, string] {
  const greeting = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, greeting];
}

console.log(getDetails("Mike", 35));

// Exercise 7
type Person = { name: string; age: number };

function createPerson(name: string, age: number): Person {
  return { name, age };
}

console.log(createPerson("Alex", 40));

// Exercise 8
const inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "This is TypeScript baby!";

// Exercise 9
function getAction(userRole: string): string {
  switch (userRole) {
    case "admin":
      return "Full access granted ⭐️";
    case "editor":
      return "Access to edit content 📝";
    case "viewer":
      return "View-only access granted 👀";
    case "guest":
      return "Limited access granted 👍";
    default:
      return "No access, sorry :(";
  }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

// Exercise 10
function greet(name: string): string;
function greet(): string;

function greet(name: string = "Friend"): string {
  return `Hi there ${name}!`;
}

console.log(greet("Mark"));
console.log(greet());
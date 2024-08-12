// Exercise 1
function formatValue(input: string | number): string {
  if (typeof input === "string") {
    return input;
  }

  if (typeof input === "number") {
    return `${input}`;
  }

  return "";
}

console.log(formatValue("hello"));
console.log(formatValue(123.456));

// Exercise 2
function sumNumbers(arrOfNums: number[]): number {
  return arrOfNums.reduce((cur, acc) => (cur += acc), 0);
}

console.log(sumNumbers([5, 10, 15]));

// Exercise 3
type User = {
  name: string;
  age: number;
};

let userObj: User = {
  name: "Jim",
  age: 35,
};

function introduceUser(user: User): string {
  return `Hi ${user.name}, you are ${user.age} years old.`;
}

console.log(introduceUser(userObj));

// Exercise 4
function greetUser(name: string, greeting?: string): string {
  return `${greeting ? greeting : "Welcome"} ${name}!`;
}

console.log(greetUser("Marvin"));
console.log(greetUser("Marvin", "Hi there"));

// Exercise 5
function calculate(value1: number, value2: number): number;
function calculate(value1: string, value2: string): string;

function calculate(
  value1: number | string,
  value2: number | string
): string | number {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2;
  }

  if (typeof value1 === "string" && typeof value2 === "string") {
    return value1 + value2;
  }

  throw new Error("Invalid arguments");
}

console.log(calculate(10, 5));
console.log(calculate("Hello ", "World!"));

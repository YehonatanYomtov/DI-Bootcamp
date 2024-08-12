"use strict";
// Exercise 1
function formatValue(input) {
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
function sumNumbers(arrOfNums) {
    return arrOfNums.reduce((cur, acc) => (cur += acc), 0);
}
console.log(sumNumbers([5, 10, 15]));
let userObj = {
    name: "Jim",
    age: 35,
};
function introduceUser(user) {
    return `Hi ${user.name}, you are ${user.age} years old.`;
}
console.log(introduceUser(userObj));
// Exercise 4
function greetUser(name, greeting) {
    return `${greeting ? greeting : "Welcome"} ${name}!`;
}
console.log(greetUser("Marvin"));
console.log(greetUser("Marvin", "Hi there"));
function calculate(value1, value2) {
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

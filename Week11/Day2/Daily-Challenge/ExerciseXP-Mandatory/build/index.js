"use strict";
// Exercise 1
class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person("John", "Silver", 34, "Tel Aviv");
console.log("person1: ", person1);
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return `Your ${this.make} ${this.model}'s engine started!`;
    }
}
const sedan1 = new Sedan("Sedan", "DX", 4);
console.log("sedan1: ", sedan1.start());
const objA = { name: "John", age: 30 };
const objB = { city: "New York", country: "USA" };
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(combineObjects(objA, objB));
// Exercise 4
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Before pop -> ", numberStack);
numberStack.pop();
console.log("After pop -> ", numberStack);
console.log(numberStack.isEmpty());
numberStack.pop();
numberStack.pop();
console.log(numberStack.isEmpty());
const stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
console.log(stringStack.isEmpty());
// Exercise 5
function filterArray(arr, predicate) {
    const result = [];
    for (const element of arr) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}
const testArr1 = ["apple", "banana", "cherry", "date"];
const testArr2 = [1, 2, 3, 4, 5, 6];
function isEven(num) {
    return num % 2 === 0;
}
function startsWithB(fruit) {
    return fruit.startsWith("b");
}
console.log(filterArray(testArr1, startsWithB));
console.log(filterArray(testArr2, isEven));

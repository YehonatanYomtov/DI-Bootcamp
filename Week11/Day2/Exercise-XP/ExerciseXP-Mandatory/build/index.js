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
const person = new Person("Yehonatan", "Yomtov", 30, "123 Main St Bet Shemesh");
console.log(person.getFullName());
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return `${this.make} ${this.model} engine is roaring :p.`;
    }
}
const myCar = new Sedan("Toyota", "Camry", 4);
console.log(myCar.start());
// Exercise 3
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const combined = combineObjects(obj1, obj2);
console.log(combined);
// Exercise 4
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
console.log(numberStack.pop());
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
// Exercise 5
function filterArray(array, predicate) {
    return array.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

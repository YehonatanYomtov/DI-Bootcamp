// Exercise 1
class Person {
  private firstName: string;
  private lastName: string;
  public age: number;
  protected address: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
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

// Exercise 2
interface Vehicle {
  make: string;
  model: string;
  start(): string;
}

interface Car extends Vehicle {
  numberOfDoors: number;
}

class Sedan implements Car {
  make: string;
  model: string;
  numberOfDoors: number;

  constructor(make: string, model: string, numberOfDoors: number) {
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

// Exercise 3
type T = {
  name: string;
  age: number;
};

type U = {
  city: string;
  country: string;
};

const objA: T = { name: "John", age: 30 };
const objB: U = { city: "New York", country: "USA" };

function combineObjects(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

console.log(combineObjects(objA, objB));

// Exercise 4
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
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

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
console.log(stringStack.isEmpty());

// Exercise 5
function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
  const result: T[] = [];
  for (const element of arr) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

const testArr1 = ["apple", "banana", "cherry", "date"];
const testArr2 = [1, 2, 3, 4, 5, 6];

function isEven(num: number) {
  return num % 2 === 0;
}

function startsWithB(fruit: string) {
  return fruit.startsWith("b");
}

console.log(filterArray(testArr1, startsWithB));
console.log(filterArray(testArr2, isEven));

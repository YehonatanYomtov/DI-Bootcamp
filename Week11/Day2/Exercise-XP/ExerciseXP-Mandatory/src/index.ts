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

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Yehonatan", "Yomtov", 30, "123 Main St Bet Shemesh");
console.log(person.getFullName());

//Exercise 2
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

  start(): string {
    return `${this.make} ${this.model} engine is roaring :p.`;
  }
}

const myCar = new Sedan("Toyota", "Camry", 4);
console.log(myCar.start());

// Exercise 3
function combineObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const combined = combineObjects(obj1, obj2);
console.log(combined);

// Exercise 4
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
console.log(numberStack.pop());
console.log(numberStack.pop());
console.log(numberStack.isEmpty());

// Exercise 5
function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
  return array.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

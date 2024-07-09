// // Exercise 1 : Print Full Name
// // Instructions
// // 1) Create a function called printFullName.
// // 2) The function should return a string like the example below
// // printFullName({first: 'Elie', last:'Schoppik'})
// // // 'Your full name is Elie Schoppik`

// // Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// // The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

// function printFullName({ first, last }) {
//   console.log(`Your full name is ${first} ${last}`);
// }

// printFullName({ first: "Elie", last: "Schoppik" });

// --------------------

// Exercise 2 : Keys And Values
// Instructions
// 1) Create a function that takes an object and returns the keys and values as separate arrays.
// 2) Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);

  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// --------------------

// Exercise 3 : Counter Class
// Instructions
// Analyze the code below, what will be the output?
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment(); // 1
// counterOne.increment(); // 2

// const counterTwo = counterOne; // 2
// counterTwo.increment(); // 3

// console.log(counterOne.count); // 3

// --> The output is: 3, because when we assigned counterOne to counterTwo, the counterTwo value is going to point to the same object reference of the object (counterOne) in memory, so if you change one of the objects that are a reference to the same address in memory it will change them all. (Since objects in JS are passed by reference).

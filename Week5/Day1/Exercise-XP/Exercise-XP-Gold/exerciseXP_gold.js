// Exercise 1 : Divisible By Three
// // Instructions
// // let numbers = [123, 8409, 100053, 333333333, 7]
// // 1) Loop through the array above and determine whether or not each number is divisible by three.
// // 2) Each time you loop console.log true or false.

// let numbers = [123, 8409, 100053, 333333333, 7];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// ------------------------------------

// // Exercise 2 : Attendance
// // Instructions
// // let guestList = {
// //   randy: "Germany",
// //   karla: "France",
// //   wendy: "Japan",
// //   norman: "England",
// //   sam: "Argentina"
// // }

// // Given the object above where the key is the student’s name and the value is the country they are from.

// // 1) Prompt the student for their name.

// // 2) If the name is in the object, console.log the name of the student and the country they come from.
// // For example: "Hi! I'm [name], and I'm from [country]."
// // Hint: You don’t need to use a for loop, just look up the statement if ... in

// // 3) If the name is not in the object, console.log: "Hi! I'm a guest."

// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }

// let namePrompt = prompt("Enter your name: ").toLowerCase()

// if (namePrompt in guestList) {
//   console.log("Hi! I'm " + namePrompt + " and I'm from " + guestList[namePrompt]);
// } else {
//   console.log("Hi! I'm a guest.")
// }

// ------------------------------------

// Exercise 3 : Playing With Numbers
// Instructions
// let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.

// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.

let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
let highestNumber = 0;

for (let i = 0; i < age.length; i++) {
  sum += age[i];

  if (age[i] > highestNumber) {
    highestNumber = age[i];
  }
}

console.log(sum);
console.log(highestNumber);

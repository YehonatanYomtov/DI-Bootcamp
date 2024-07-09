// // Exercise 1: Sum Elements
// // Instructions
// // 1) Write a JavaScript program to find the sum of all elements in an array.

// const arrayOfNumbers = [10, 5, 20, 40, 15, 10];

// // Option #1:
// function sumOfArray1(array) {
//   const sum = array.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

//   return sum;
// }

// // Option #2:
// const sumOfArray2 = (array) => array.reduce((acc, cur) => acc + cur, 0);

// console.log("sumOfArray1: ", sumOfArray1(arrayOfNumbers));
// console.log("sumOfArray2: ", sumOfArray2(arrayOfNumbers));

// ---------------------

// // Exercise 2 : Remove Duplicates
// // Instructions
// // 1) Write a JavaScript program to remove duplicate items in an array.

// const arrayOfLetters = ["a", "g", "a", "b", "x", "x", "p", "z"];

// Option #1:
// function removeDuplicates1(array) {
//   const noDuplicatesArray = [];

//   return array.filter((letter) =>
//     !noDuplicatesArray.includes(letter) ? noDuplicatesArray.push(letter) : null
//   );
// }

// // Option #1:
// const removeDuplicates2 = (array) => [...new Set(array)];

// console.log(removeDuplicates1(arrayOfLetters));
// console.log(removeDuplicates2(arrayOfLetters));

// ---------------------

// // Exercise 3 : Remove Certain Values
// // Instructions
// // 1) Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// // Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// // Expected result : [15, -22, 47]

// function removeAllFalsyValues(array) {
//   return array.filter((val) => (val !== !val ? val : null));
// }

// console.log(
//   removeAllFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null])
// );

// ---------------------

// // Exercise 4 : Repeat Please !
// // Instructions
// // 1) Write a JavaScript function to concatenate a given string n times (default is 1).
// // Create the repeat function yourself:
// // console.log(repeat('Ha!',3));
// // "Ha!Ha!Ha!"

// function repeat(string, repeat = 1) {
//   let result = "";

//   for (let i = 0; i < repeat; i++) {
//     result += String(string);
//   }

//   return result;
// }

// console.log(repeat("Ha!", 3));

// ---------------------

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// 1) Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'

// 2) What happens when you run turtle = turtle.trim().padEnd(9, '='); ?

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

turtle = turtle.padStart(9, " ");
rabbit = rabbit.padStart(9, " ");

turtle = turtle.trim().padEnd(9, "=");

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// -->      ||<- Start line
// 🐢=======
//            🐇

// Reason: --> we trimmed (deleted) all the white spaces in the string and then added to the end of the turtle (after the turtle) the string '=' 9 times, causing the effect that the turtle got to the finish line fast :p

// // Instructions
// 1) Write a JavaScript program that recreates the pattern below.
// 2) Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// 3) Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

// let string = '';

// for (let i = 0; i < 6; i++) {
//   string += '*';
//   console.log(string);
// }

for (let i = 0; i < 6; i++) {
  let string = "";
  for (let x = 0; x < i + 1; x++) {
    string += "*";
  }

  console.log(string);
}

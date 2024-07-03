// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>

// Part I
// 1) In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2) The function will alert “Hello World”.

// Part II
// 1) In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2) The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// Part III
// 1) In your Javascript file, using setInterval, call a function every 2 seconds.
// 2) The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3) The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4) Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// // Part I
// function sayHello() {
//    alert("Hello World");
// }

// setTimeout(function () {
//   sayHello();
// }, 2000);

// // Part II
// function addParagraph() {
//   const container = document.getElementById("container");

//   container.innerHTML = "<p>Hello World</p>";
// }

// setTimeout(function () {
//   addParagraph();
// }, 2000);

// // Part III
// let intervalID = setInterval(function () {
//   const container = document.getElementById("container");

//   container.innerHTML += "<p>Hello World</p>";

//   const clearBtn = document.getElementById("clear");

//   clearBtn.addEventListener("click", function () {
//     clearInterval(intervalID);
//   });

//   if (container.children.length === 5) {
//     clearInterval(intervalID);
//   }
// }, 2000);

// -------------------------------------------

// // 🌟 Exercise 2 : Move The Box
// // Instructions
// // <!DOCTYPE html>
// //     <html>
// //     <head>
// //         <style>
// //         #container {
// //           width: 400px;
// //           height: 400px;
// //           position: relative;
// //           background: yellow;
// //         }
// //         #animate {
// //           width: 50px;
// //           height: 50px;
// //           position: absolute;
// //           background-color: red;
// //         }
// //         </style>
// //     </head>
// //     <body>
// //         <p><button onclick="myMove()">Click Me</button></p>
// //         <div id="container">
// //           <div id="animate"></div>
// //         </div>
// //     </body>
// //     </html>

// // 1) Copy the code above, to a structured HTML file.
// // 2) In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// // The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// // Hint : use clearInterval as soon as the box reaches the right end side of the container
// // Hint : check out the demonstration in the Course Noted named JS Functions

// function myMove() {
//   const container = document.getElementById("container");

//   const animatedDiv = document.getElementById("animate");

//   tracker = 0;

//   let intervalID = setInterval(function () {
//     animatedDiv.style.left = `${(tracker += 1)}px`;

//     if (tracker === 350) {
//       clearInterval(intervalID);
//     }
//   }, 1);
// }

// myMove();

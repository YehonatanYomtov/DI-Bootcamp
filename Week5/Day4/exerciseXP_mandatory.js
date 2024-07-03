// // 🌟 Exercise 1 : Change The Article
// // Instructions
// // Copy the code below, into a structured HTML file:

// // <article>
// //     <h1> Some Facts </h1>
// //     <h2> The Chocolate </h2>
// //     <h3> History of the chocolate </h3>
// //     <p> Chocolate is made from tropical Theobroma cacao tree seeds.
// //     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
// //     <p> After the European discovery of the Americas, chocolate became
// //     very popular in the wider world, and its demand exploded. </p>
// //     <p> Chocolate has since become a popular food product that millions enjoy every day,
// //     thanks to its unique, rich, and sweet taste.</p>
// //     <p> But what effect does eating chocolate have on our health?</p>
// // </article>

// // 1) Using a DOM property, retrieve the h1 and console.log it.

// // 2) Using DOM methods, remove the last paragraph in the <article> tag.

// // 3) Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// // 4) Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// // 5) Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// // 6) ✅ BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// // 7) ✅ BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// const h1 = document.querySelector("h1");
// console.log(h1);

// const article = document.querySelector("article");
// const lastP = article.children[article.children.length - 1];
// lastP.remove();

// const h2 = document.querySelector("h2");
// h2.addEventListener("click", function (e) {
//   e.target.style.backgroundColor = "red";
// });

// const h3 = document.querySelector("h3");
// h3.addEventListener("click", function (e) {
//   e.target.style.display = "none";
// });

// const body = document.body;

// const button = document.createElement("button");
// button.textContent = "Click me!";

// button.addEventListener("click", function () {
//   const allP = document.querySelectorAll("p");

//   for (let i = 0; i < allP.length; i++) {
//     allP[i].style.fontWeight = "bold";
//   }
// });

// body.append(button);

// h1.addEventListener("mouseover", function (e) {
//   e.target.style.fontSize = `${Math.random() * 100}px`;
// });

// h2.addEventListener("mouseover", function (e) {
//   e.target.style.opacity = "0";
//   e.target.style.transition = "opacity 0.5s ease";
// });

// ---------------------------------------

// // 🌟 Exercise 2 : Work With Forms
// // Instructions
// // Copy the code below, into a structured HTML file:

// // <form>
// //   <label for="fname">First name:</label><br>
// //   <input type="text" id="fname" name="firstname"><br>
// //   <label for="lname">Last name:</label><br>
// //   <input type="text" id="lname" name="lastname"><br><br>
// //   <input type="submit" value="Submit" id="submit">
// // </form>
// // <ul class="usersAnswer"></ul>

// // 1) Retrieve the form and console.log it.

// // 2) Retrieve the inputs by their id and console.log them.

// // 3) Retrieve the inputs by their name attribute and console.log them.

// // 4) When the user submits the form (ie. submit event listener)
// //      - use event.preventDefault(), why ? => to prevent the default behavior of the page which is to refresh the page, and that can cause us issues with as an example: console.log a piece of code.
// //      - get the values of the input tags,
// //      - make sure that they are not empty,
// //      - create an li per input value,
// //      - then append them to a the <ul class="usersAnswer"></ul>, below the form.

// // The output should be :
// // <ul class="usersAnswer">
// //     <li>first name of the user</li>
// //     <li>last name of the user</li>
// // </ul>

// const form = document.querySelector("form");
// console.log(form);

// const firstNameInputById = document.getElementById("fname");
// const lastNameInputById = document.getElementById("lname");
// const submitInputById = document.getElementById("submit");
// console.log(firstNameInputById);
// console.log(lastNameInputById);
// console.log(submitInputById);

// const firstNameInputByName = document.getElementsByName("firstname");
// const lastNameInputByName = document.getElementsByName("lastname");
// console.log(firstNameInputByName);
// console.log(lastNameInputByName);

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // => We use this method to prevent the default behavior of the page which is to refresh the page, and that can cause us issues with as an example: console.log a piece of code.
//   const firstNameValue = e.target.firstname.value;
//   const lastNameValue = e.target.lastname.value;
//   console.log(firstNameValue);
//   console.log(lastNameValue);

//   const ul = document.querySelector("ul");

//   for (let i = 0; i < [firstNameValue, lastNameValue].length; i++) {
//     const li = document.createElement("li");
//     li.textContent = [firstNameValue, lastNameValue][i];
//     ul.append(li);
//   }
// });

// ---------------------------------------

// // 🌟 Exercise 3 : Transform The Sentence
// // Instructions
// // Add this sentence to your HTML file then follow the steps :

// // <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// // <strong>end</strong> you <strong>will</strong> be great Developers!
// // <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

// // In the JS file:

// // 1) Declare a global variable named allBoldItems.

// // 2) Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// // 3) Create a function called highlight() that changes the color of all the bold text to blue.

// // 4) Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// // 5) Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// let allBoldItems = [];

// function getBoldItems() {
//   const allStrongElements = document.querySelectorAll("strong");
//   for (let i = 0; i < allStrongElements.length; i++) {
//     allBoldItems.push(allStrongElements[i]);
//   }

//   console.log(allBoldItems);
// }

// getBoldItems();

// function highlight() {
//   for (let i = 0; i < allBoldItems.length; i++) {
//     allBoldItems[i].style.color = "blue";
//   }
// }

// function returnItemsToDefault() {
//   for (let i = 0; i < allBoldItems.length; i++) {
//     allBoldItems[i].style.color = "black";
//   }
// }

// const p = document.querySelector("p");

// p.addEventListener("mouseover", highlight);
// p.addEventListener("mouseout", returnItemsToDefault);

// ---------------------------------------

// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions

// 1) Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

// <!doctype html>
// <html lang="en">
//     <head>
//         <meta charset="utf-8">
//         <title>Volume of a Sphere</title>
//         <style>
//             body {
//                 padding-top:30px;
//             }

//             label,input {
//                 display:block;
//             }
//         </style>
//     </head>
//     <body>
//         <p>Input radius value and get the volume of a sphere.</p>
//         <form  id="MyForm">
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume">
//             <input type="submit" value="Calculate" id="submit">
//         </form>
//     </body>
// </html>

const form = document.getElementById("MyForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let radius = parseFloat(e.target.radius.value);

  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  e.target.volume.value = volume.toFixed(2);
});

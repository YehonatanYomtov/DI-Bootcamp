// 🌟 Exercise 1 : Scope
// Instructions

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne();
// // #1.2 What will happen if the variable is declared
// // with const instead of let ? --> It will return a TypeError since the 'a' variable is a constant

// //#2
// let a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();
// // #2.2 What will happen if the variable is declared
// // with const instead of let ? --> It will return 1 alert with 0 and then the console display a TypeError since we assigned the 'a' variable to a const so its value can't be reassigned. And because of the error the application stops running and it won't get to the next alert message.

// //#3
// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour();
// funcFive();

// // --> 'a' will = "hello", since it is in the global scope, so we can access it via the window object, so 'funcFive()' will alert -> inside the funcFive function hello

// //#4
// let a = 1;
// function funcSix() {
//   let a = "test";
//   alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix();
// // #4.2 What will happen if the variable is declared
// // with const instead of let ? The result of the alert will stay the same since the variable in the function, since the scoping is still the same, it is in the same scoped block. the only difference is that now you cant change the value of the constant variable.

// //#5
// let a = 2;
// if (true) {
//   let a = 5;
//   alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ? --> Nothing will change regarding the scope, only that now you cant change the value of the constant variable.

// --------------------

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// 1) Transform the winBattle() function to an arrow function.
// 2) Create a variable called experiencePoints.
// 3) Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// 4) Console.log the experiencePoints variable.

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// --------------------

// 🌟 Exercise 3 : Is It A String ?
// Instructions
// 1) Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (value) => (typeof value === "string" ? true : false);

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// --------------------

// 🌟 Exercise 4 : Find The Sum
// Instructions
// 1) Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b;
console.log(sum(5, 10));

// --------------------

// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1) First, use function declaration and invoke it.
// 2) Then, use function expression and invoke it.
// 3) Write in a one line comment, the difference between function declaration and function expression.
// 4) Finally, use a one line arrow function and invoke it.

function kgToGrams1(kilos) {
  return kilos * 1000;
}
kgToGrams1(2);

const kgToGrams2 = function (kilos) {
  return kilos * 1000;
};
kgToGrams2(2);

// --> Unlike function expression, the Function declarations are hoisted and can be called before they are defined.

const kgToGrams3 = (kilos) => kilos * 1000;

kgToGrams3(2);

// --------------------

// // 🌟 Exercise 6 : Fortune Teller
// // Instructions
// // 1) Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// // 2) The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
//   document.body.innerHTML = `You will be a ${jobTitle} in ${geographicLocation} , and married to ${partnersName} with ${numberOfChildren} kids.`;
// })(4, "Rose", "paris", "Programmer");

// --------------------

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// 1) Create a Navbar in your HTML file.
// 2) In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3) The function should add a div in the nabvar, displaying the name of the user and his profile picture.

const navbar = document.querySelector("nav");

(function (name) {
  const div = document.createElement("div");
  div.textContent = name;
  navbar.append(div);
})("Yonski");

// --------------------

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// 1) The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// 2) The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 3) Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// 1) In the makeJuice function, create an empty array named ingredients.

// 2) The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// 3) Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 4) The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

const makeJuice = (beverageSize) => {
  let ingredients = [];

  const addIngredients = (ing1, ing2, ing3) =>
    ingredients.push(ing1, ing2, ing3);

  const displayJuice = () =>
    (document.querySelector(
      "main"
    ).textContent = `The client wants a ${beverageSize} juice, containing ${ingredients.join(
      ", "
    )}`);

  addIngredients("orange", "sugar", "apples");
  addIngredients("Maple", "Grapes", "Cinnamon");
  console.log(ingredients);
  displayJuice();
};

makeJuice("Large");

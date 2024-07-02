// // 🌟 Exercise 1 : Find The Numbers Divisible By 23
// // Instructions
// // 1) Create a function call displayNumbersDivisible() that takes no parameter.

// // 2) In the function, loop through numbers 0 to 500.

// // 3) Console.log all the numbers divisible by 23.

// // 4) At the end, console.log the sum of all numbers that are divisible by 23.

// // Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345
// // 368 391 414 437 460 483
// // Sum : 5313

// // 5) ✅ Bonus: Add a parameter divisor to the function.

// // displayNumbersDivisible(divisor)

// // Example:
// // displayNumbersDivisible(3) : Console.log all the numbers divisible by 3,
// // and their sum
// // displayNumbersDivisible(45) : Console.log all the numbers divisible by 45,
// // and their sum

// function displayNumbersDivisible(divisor) {
//   let sumOfAllNumbers = 0;

//   for (let i = 0; i < 500; i++) {
//     if (i % divisor === 0) {
//       console.log(i);
//       sumOfAllNumbers += i;
//     }
//   }

//   console.log("Sum: ", sumOfAllNumbers);
// }

// displayNumbersDivisible(23)

// ---------------------------------------

// // 🌟 Exercise 2 : Shopping List
// // Instructions
// // const stock = {
// //     "banana": 6,
// //     "apple": 0,
// //     "pear": 12,
// //     "orange": 32,
// //     "blueberry":1
// // }

// // const prices = {
// //     "banana": 4,
// //     "apple": 2,
// //     "pear": 1,
// //     "orange": 1.5,
// //     "blueberry":10
// // }

// // 1) Add the stock and prices objects to your js file.

// // 2) Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// // 3) Create a function called myBill() that takes no parameters.

// // 4) The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// //    - The item must be in stock. (Hint : check out if .. in)
// //    - If the item is in stock find out the price in the prices object.

// // 5) Call the myBill() function.

// // 6) Bonus: If the item is in stock, decrease the item’s stock by 1

// const stock = {
//   "banana": 6,
//   "apple": 0,
//   "pear": 12,
//   "orange": 32,
//   "blueberry":1
// }

// const prices = {
//   "banana": 4,
//   "apple": 2,
//   "pear": 1,
//   "orange": 1.5,
//   "blueberry":10
// }

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//   let totalPrice = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     if (shoppingList[i] in stock && stock[shoppingList[i]] > 0) {
//       totalPrice += prices[shoppingList[i]];
//       stock[shoppingList[i]] -= 1;
//     }
//   }

//   console.log(totalPrice)
// }

// myBill()

// console.log(stock)

// ---------------------------------------

// // 🌟 Exercise 3 : What’s In My Wallet ?
// // Instructions
// // Note: Read the illustration (point 4), while reading the instructions

// // 1) Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// //    - an item price
// //    - and an array representing the amount of change in your pocket.

// // 2) In the function, determine whether or not you can afford the item.
// //    - If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// //    - If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// // 3) Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// // A quarters is 0.25
// // A dimes is 0.10
// // A nickel is 0.05
// // A penny is 0.01

// // 4) To illustrate:

// // After you created the function, invoke it like this:

// // changeEnough(4.25, [25, 20, 5, 0])
// //    - The value 4.25 represents the item’s price
// //    - The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// //    - The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// // Examples

// // changeEnough(14.11, [2,100,0,0]) => returns false
// // changeEnough(0.75, [0,0,20,5]) => returns true

// function changeEnough(itemPrice, amountOfChange) {
//   let sum = 0;
//   sum += 0.25 * amountOfChange[0];
//   sum += 0.10 * amountOfChange[1];
//   sum += 0.05 * amountOfChange[2];
//   sum += 0.01 * amountOfChange[3];

//   console.log("Sum: ", sum)

//   if (sum >= itemPrice) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2,100,0,0]));
// console.log(changeEnough(0.75, [0,0,20,5]));

// ---------------------------------------

// // 🌟 Exercise 4 : Vacations Costs
// // Instructions
// // Let’s create functions that calculate your vacation’s costs:

// // 1) Define a function called hotelCost().
// //    - It should ask the user for the number of nights they would like to stay in the hotel.
// //    - If the user doesn’t answer or if the answer is not a number, ask again.
// //    - The hotel costs $140 per night. The function should return the total price of the hotel.

// // 2) Define a function called planeRideCost().
// //    - It should ask the user for their destination.
// //    - If the user doesn’t answer or if the answer is not a string, ask again.
// //    - The function should return a different price depending on the location.
// // “London”: 183$
// // “Paris” : 220$
// // All other destination : 300$

// // 3) Define a function called rentalCarCost().
// //    - It should ask the user for the number of days they would like to rent the car.
// //    - If the user doesn’t answer or if the answer is not a number, ask again.
// //    - Calculate the cost to rent the car. The car costs $40 everyday.
// // If the user rents a car for more than 10 days, they get a 5% discount.
// //    - The function should return the total price of the car rental.

// // 4) Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// // Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// // Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// // 5) Call the function totalVacationCost()

// // 6)✅ Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// function hotelCost(amountOfNights) {
//   while (true) {
//     if (!isNaN(amountOfNights) && amountOfNights > 0) {
//       return 140 * amountOfNights;
//     } else {
//       console.log("Please enter a valid number.");
//     }
//   }
// }

// function planeRideCost(destination) {
//   while (true) {
//     if (destination && isNaN(destination)) {
//       if (destination === 'london') {
//         return 183;
//       } else if (destination === 'paris') {
//         return 220;
//       } else {
//         return 300;
//       }
//     } else {
//       console.log("Please enter a valid destination.");
//     }
//   }
// }

// function rentalCarCost(amountOfRentDays) {
//   while (true) {
//     if (!isNaN(amountOfRentDays) && amountOfRentDays > 0) {
//       const regularPrice = amountOfRentDays * 40;
//       if (amountOfRentDays > 10) {
//         return regularPrice * 0.95;
//       } else {
//         return regularPrice;
//       }
//     } else {
//       console.log("Please enter a valid number.");
//     }
//   }
// }

// function totalVacationCost() {
//   amountOfNightsInput = Number(prompt("How many nights would you like to stay in the hotel? "));
//   destinationInput = prompt("What is your destination? ").toLowerCase();
//   amountOfRentDaysInput = Number(prompt("How many days would you like to rent a car for? "));

//   const hotel = hotelCost(amountOfNightsInput);
//   const plane = planeRideCost(destinationInput);
//   const car = rentalCarCost(amountOfRentDaysInput);

//   return `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. Total cost: $${hotel + plane + car}`;
// }

// console.log(totalVacationCost());

// ---------------------------------------

// // 🌟 <div id="container">Users:</div>
// // <ul class="list">
// //     <li>John</li>
// //     <li>Pete</li>
// // </ul>
// // <ul class="list">
// //     <li>David</li>
// //     <li>Sarah</li>
// //     <li>Dan</li>
// // </ul>

// // Add the code above, to your HTML file

// // Using Javascript:
// //      - Retrieve the div and console.log it
// //      - Change the name “Pete” to “Richard”.
// //      - Delete the second <li> of the second <ul>.
// //      - Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// // const div = document.getElementById("container");
// // // console.log(div);

// // const allLi = document.querySelectorAll("li");

// // for (let i = 0; i < allLi.length; i++) {
// //   if (allLi[i].textContent === "Pete") {
// //     allLi[i].textContent = "Richard";
// //   }
// // }

// // const secondUl = document.getElementsByClassName("list")[1];
// // const secondLiToRemove = secondUl.children[1];

// // secondUl.removeChild(secondLiToRemove);

// // console.log(secondUl);

// // const allUl = document.getElementsByClassName("list");

// // for (let i = 0; i < allUl.length; i++) {
// //   const liToChange = allUl[i].querySelectorAll("li")[0];
// //   liToChange.textContent = "Yehonatan";
// // }
// // // Using Javascript:
// // //      - Add a class called student_list to both of the <ul>'s.
// // //      - Add the classes university and attendance to the first <ul>.

// // const uls = document.getElementsByClassName("list");

// // for (let i = 0; i < uls.length; i++) {
// //   uls[i].classList.add("student_list");

// //   if (i === 0) {
// //     uls[i].classList.add("university", "attendance");
// //   }
// // }

// // console.log(uls);

// // Using Javascript:
// //      - Add a “light blue” background color and some padding to the <div>.
// //      - Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// //      - Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// //      - Change the font size of the whole body.

// const allLi = document.querySelectorAll("li");

// // I already changed this but for this part of the exercise i added it here since I commented out all the previous code
// for (let i = 0; i < allLi.length; i++) {
//   if (allLi[i].textContent === "Pete") {
//     allLi[i].textContent = "Richard";
//   }
// }

// const div = document.getElementById("container");
// div.style.backgroundColor = "lightblue";
// div.style.padding = "20px";

// for (let i = 0; i < allLi.length; i++) {
//   if (allLi[i].textContent === "Dan") {
//     allLi[i].style.display = "none";
//   }

//   if (allLi[i].textContent === "Richard") {
//     allLi[i].style.border = "1px solid black";
//   }
// }

// document.body.style.fontSize = "2rem";

// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// if (div.style.backgroundColor === "lightblue") {
//   const names = [];

//   for (let i = 0; i < allLi.length; i++) {
//     names.push(allLi[i].textContent);
//   }
//   const stringOfNames = names.join(" and ");
//   alert(`Hello ${stringOfNames}`);
// }

// ---------------------------------------

// // 🌟 Exercise 6 : Change The Navbar
// // Instructions
// // Create a new structured HTML file and a new Javascript file

// // <div id="navBar">
// //     <ul>
// //         <li><a href="#">Profile</a></li>
// //         <li><a href="#">Home</a></li>
// //         <li><a href="#">My Friends</a></li>
// //         <li><a href="#">Messenger</a></li>
// //         <li><a href="#">My Pics</a></li>
// //     </ul>
// // </div>

// // 1) Add the code above, to your HTML file

// // 2) Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// // 3) We are going to add a new <li> to the <ul>.
// //      - First, create a new <li> tag (use the createElement method).
// //      - Create a new text node with “Logout” as its specified text.
// //      - Append the text node to the newly created list node (<li>).
// //      - Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// // 4) Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// const navDiv = document.getElementById("navBar");
// navDiv.setAttribute("id", "socialNetworkNavigation");

// console.log(navDiv.children);

// const newLi = document.createElement("li");
// const newLiTextNode = document.createTextNode("Logout");
// newLi.append(newLiTextNode);

// const ul = document.querySelector("ul");
// ul.appendChild(newLi);

// const firstElement = ul.firstElementChild;
// const lastElement = ul.lastElementChild;

// console.log(
//   "First Element: ",
//   firstElement.textContent,
//   "\nLast Element: ",
//   lastElement.textContent
// );

// ---------------------------------------

// 🌟 Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// 1) In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// 2) In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//      - title,
//      - author,
//      - image : a url,
//      - alreadyRead : which is a boolean (true or false).

// 3) Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// 4) Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
//      - You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
//      - The width of the image has to be set to 100px.
//      - If the book is already read. Set the color of the book’s details to red.

const allBooks = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    alreadyRead: true,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
    alreadyRead: true,
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
    alreadyRead: true,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
    alreadyRead: true,
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg",
    alreadyRead: false,
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png",
    alreadyRead: false,
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K Rowling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
    alreadyRead: false,
  },
];

const body = document.body;
const section = document.querySelector(".listBooks");

for (let i = 0; i < allBooks.length; i++) {
  let textForIfReadBook = "";
  let color = "";

  if (allBooks[i].alreadyRead) {
    textForIfReadBook = "Has";
    color = "red";
  } else {
    textForIfReadBook = "Hasn't";
  }

  section.innerHTML += `
    <br />
    <div id="${i + 1}">
        <h2 style="color: ${color}">${allBooks[i].title}</h2>
        <h4 style="color: ${color}">${allBooks[i].author}</h4>
        <img style="width: 100px" src="${allBooks[i].image}"/>
        <p>This book ${textForIfReadBook} been read.</p>
    </div>
    <br />
    `;
}

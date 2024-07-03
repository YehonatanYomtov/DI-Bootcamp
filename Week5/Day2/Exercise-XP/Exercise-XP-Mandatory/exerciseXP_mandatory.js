// 🌟 Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];

const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// // 1) Write code to remove “Greg” from the people array.
// const indexOfGreg = people.indexOf('Greg');
// people.splice(indexOfGreg, 1);
// console.log(people);

// // 2) Write code to replace “James” to “Jason”.
// const udatedArray = people.join().replace("James", "Jason").split(',');
// console.log(udatedArray);

// // 3) Write code to add your name to the end of the people array.
// people.push("Yehonatan");
// console.log(people);

// // 4) Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf('Mary'));

// // 5) Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// // Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method
// const people = ["Mary", "Devon", "Jason", "Yehonatan"];
// const copyArray = people.slice(1,3);
// console.log(copyArray);

// // 6) Write code that gives the index of “Foo”. Why does it return -1 ?
// A -> Since it doesn't exist in the array, and the startinf index is 0, so the way it says that that value doesn't exist is that it gives it the value of -1

// // 7) Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?
// // const last = people.slice(-1).join();
// // Or ->
// const last = people[people.length -1];
// console.log(last);

// Part II - Loops
// // 1) Using a loop, iterate through the people array and console.log each person.
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// // 2) Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// // Hint: take a look at the break statement in the lesson.
// for (let i = 0; i < people.length; i++) {
//   if (people[i] === "Devon") {
//     break
//   } else {
//     console.log(people[i])
//   }
// }

// 🌟 Exercise 2 : Your Favorite Colors
// // Instructions
// // 1) Create an array called colors where the value is a list of your five favorite colors.
// // 2) Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// // 3) Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// // Hint : create an array of suffixes to do the Bonus

// const colors = ['Red', 'Green', 'Light blue'];
// const suffixes = ["st", "nd", "rd"];

// for (let i = 0; i < colors.length; i++) {
//   console.log('My ' + (i + 1) + suffixes[i] + ' choice is ' + colors[i])
// }

// 🌟 Exercise 3 : Repeat The Question
// // Instructions
// // 1) Prompt the user for a number.
// // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// // 2) While the number is smaller than 10 continue asking the user for a new number.
// // Tip : Which while loop is more relevant for this situation?

// let number = Number(prompt("Enter any number"));

// while (number < 10) {
//   number =  Number(prompt("Enter any number"));
// }

// 🌟 Exercise 4 : Building Management
// // Instructions:
// // const building = {
// //     numberOfFloors: 4,
// //     numberOfAptByFloor: {
// //         firstFloor: 3,
// //         secondFloor: 4,
// //         thirdFloor: 9,
// //         fourthFloor: 2,
// //     },
// //     nameOfTenants: ["Sarah", "Dan", "David"],
// //     numberOfRoomsAndRent:  {
// //         sarah: [3, 990],
// //         dan:  [4, 1000],
// //         david: [1, 500],
// //     },
// // }

// // Review About Objects
// // 1) Copy and paste the above object to your Javascript file.

// // 2) Console.log the number of floors in the building.

// // 3) Console.log how many apartments are on the floors 1 and 3.

// // 4) Console.log the name of the second tenant and the number of rooms he has in his apartment.

// // 5) Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// const building = {
//   numberOfFloors: 4,

//   numberOfAptByFloor: {
//       firstFloor: 3,
//       secondFloor: 4,
//       thirdFloor: 9,
//       fourthFloor: 2,
//   },

//   nameOfTenants: ["Sarah", "Dan", "David"],

//   numberOfRoomsAndRent:  {
//       sarah: [3, 990],
//       dan:  [4, 1000],
//       david: [1, 500],
//   },
// }

// console.log(building.numberOfFloors)

// console.log("First floor: ", building.numberOfAptByFloor.firstFloor, "\nThird floor: ", building.numberOfAptByFloor.thirdFloor)

// console.log("Name of the second tenant: ", building.nameOfTenants[1], "\nNumber of rooms: ", building.numberOfRoomsAndRent["dan"][0])

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
//   building.numberOfRoomsAndRent.dan[1] += 1200
// }

// console.log(building.numberOfRoomsAndRent)

// 🌟 Exercise 5 : Family
// // Instructions
// // 1) Create an object called family with a few key value pairs.
// // 2) Using a for in loop, console.log the keys of the object.
// // 3) Using a for in loop, console.log the values of the object.

//   const family = {
//     father_name: "John",
//     mother_name: "Rose",
//     son_name: "Mike",
//   }

// for (let key in family) {
//   console.log(key)
//   console.log(family[key])
// }

// 🌟 Exercise 6 : Rudolf
// // Instructions
// // const details = {
// //   my: 'name',
// //   is: 'Rudolf',
// //   the: 'reindeer'
// // }
// // 1) Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }

// let sentace = '';

// for (let i in details) {
//   sentace += i + " " + details[i] + " "
// }

// console.log(sentace);

// 🌟 Exercise 7 : Secret Group
// // Instructions
// // const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// // 1) A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// // Hint: a string is an array of letters
// // 2) Console.log the name of their secret society. The output should be “ABJKPS”

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let groupName = '';

// for (let i = 0; i < names.length; i++) {
//   groupName += names[i].slice(0, 1);
// }

// const sortedString = groupName.split('').sort().join('');

// console.log(sortedString)

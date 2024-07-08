// 🌟 Exercise 1 : Colors
// Instructions
// Using this array :

// // const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // 1) Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// // 2) Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// // Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) =>
//   console.log(`#${index + 1} choice is ${color}`)
// );

// // colors.includes("Violet") ? console.log("Yeah!") : console.log("No...");

// // Or using methods from the Array Methods ->
// const foundViolet = colors.some((color) => color === "Violet");

// console.log(foundViolet ? "Yeah" : "No...");

// --------------------

// // 🌟 Exercise 2 : Colors #2
// // Instructions
// // Using these arrays :

// // const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // const ordinal = ["th","st","nd","rd"];
// // 1) Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// // Hint : Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, i) => {
//   console.log(`${i + 1}${ordinal[i] || "th"} choice is ${color}.`);
// });

// 🌟 Exercise 3 : Analyzing
// Instructions
// 1) Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); --> ['bread', "carrot", "potato", 'chicken', "apple", "orange"];

// ------2------
// const country = "USA";
// console.log([...country]); --> ["U", "S", "A"];

// ✅ ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray); --> [undefined, undefined]

// --------------------

// // 🌟 Exercise 4 : Employees
// // Instructions
// // Using this array:

// // const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// //              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// //              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// //              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// //              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// //              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
// //              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// // 1) Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// // const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// // 2) Using the filter() method, create a new array, containing only the Full Stack Residents.

// // 3) ✅ Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];

// const welcomeStudents = [];

// users.map((user) => welcomeStudents.push(`Hello ${user.firstName}`));

// console.log(welcomeStudents);

// const fullStackResidents = [];
// const fullStackResidentsFirstNames = [];

// users
//   .filter((user) =>
//     user.role.includes("Full Stack") ? fullStackResidents.push(user) : null
//   )
//   .map((user) => fullStackResidentsFirstNames.push(user.firstName));

// console.log(fullStackResidents);
// console.log(fullStackResidentsFirstNames);

// --------------------

// // 🌟 Exercise 5 : Star Wars
// // Instructions
// // Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// // 1) Use the reduce() method to combine all of these into a single string.

// const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// const combinedString = epic.reduce((acc, cur) => {
//   return (acc += ` ${cur}`);
// }, "");

// console.log(combinedString);

// 🌟 Exercise 6 : Employees #2
// Instructions
// Using this object:

// const students = [{name: "Ray", course: "Computer Science", isPassed: true},
//                {name: "Liam", course: "Computer Science", isPassed: false},
//                {name: "Jenner", course: "Information Technology", isPassed: true},
//                {name: "Marco", course: "Robotics", isPassed: true},
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// 1) Using the filter() method, create a new array, containing the students that passed the course.
// 2) ✅ Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedStudents = [];

students
  .filter((stu) => (stu.isPassed ? passedStudents.push(stu) : null))
  .forEach((stu) =>
    console.log(`Good job ${stu.name}, you passed the course in ${stu.course}`)
  );

console.log(passedStudents);

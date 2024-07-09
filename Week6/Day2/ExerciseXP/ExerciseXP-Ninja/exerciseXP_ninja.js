// // Exercise 1 : Dog Age To Human Years
// // Instructions
// // Using the following data

// // const data = [
// //   {
// //     name: 'Butters',
// //     age: 3,
// //     type: 'dog'
// //   },
// //    {
// //     name: 'Cuty',
// //     age: 5,
// //     type: 'rabbit'
// //   },
// //   {
// //     name: 'Lizzy',
// //     age: 6,
// //     type: 'dog'
// //   },
// //   {
// //     name: 'Red',
// //     age: 1,
// //     type: 'cat'
// //   },
// //   {
// //     name: 'Joey',
// //     age: 3,
// //     type: 'dog'
// //   },
// //   {
// //     name: 'Rex',
// //     age: 10,
// //     type: 'dog'
// //   },
// // ];
// // 1) Use a loop to find the sum of the dogs’ ages in human years.
// // Hint: 1 dog year equals 7 human years
// // 2) Using the reduce() method, find the sum of the dogs’ ages in human years.

// const data = [
//   {
//     name: "Butters",
//     age: 3,
//     type: "dog",
//   },
//   {
//     name: "Cuty",
//     age: 5,
//     type: "rabbit",
//   },
//   {
//     name: "Lizzy",
//     age: 6,
//     type: "dog",
//   },
//   {
//     name: "Red",
//     age: 1,
//     type: "cat",
//   },
//   {
//     name: "Joey",
//     age: 3,
//     type: "dog",
//   },
//   {
//     name: "Rex",
//     age: 10,
//     type: "dog",
//   },
// ];

// function dogAgeInHumanYears(array) {
//   let sum = 0;

//   array.forEach((dog) => (sum += dog.age * 7));

//   return sum;
// }

// console.log(dogAgeInHumanYears(data));

// const sum2 = data.reduce((acc, cur) => acc + cur.age * 7, 0);

// console.log(sum2);

// --------------------

// // Exercise 2 : Email
// // Instructions
// // 1) Clean up this email to have no whitespaces. Do it in a single line (return a new string).
// // const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

// const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
// console.log("userEmail3: ", userEmail3);

// const result = userEmail3.trim();
// console.log("result: ", result);

// --------------------

// // Exercise 3 : Employees #3
// // Instructions
// // Using this array

// // const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// //              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// //              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// //              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// //              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// //              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
// //              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// // 1) Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// // Example: { 'Bradley Bouley': 'Full Stack Resident' }
// // Hint: Step one, create an empty object.

// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];

// function toNewObject(array) {
//   const newUsers = {};

//   array.forEach(
//     ({ firstName, lastName, role }) =>
//       (newUsers[`${firstName} ${lastName}`] = role)
//   );

//   return newUsers;
// }

// console.log(toNewObject(users));

// --------------------

// Exercise 4 : Array To Object
// Instructions
// Using this array const letters = ['x', 'y', 'z', 'z'];

// 1) Use a for loop to get this output { x: 1, y: 1, z: 2 };
// 2) Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const letters = ["x", "y", "z", "z"];

let obj = {};

for (let i = 0; i < letters.length; i++) {
  obj.hasOwnProperty(letters[i])
    ? (obj[letters[i]] += 1)
    : (obj[letters[i]] = 1);
}

console.log("obj: ", obj);

let obj2 = letters.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(obj2);

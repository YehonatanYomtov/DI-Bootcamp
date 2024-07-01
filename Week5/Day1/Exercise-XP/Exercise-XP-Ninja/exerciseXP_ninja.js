// // Exercise 1 : Checking The BMI
// // Instructions
// // Hint:
// // - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// // 1) Create two objects, each object should hold a person’s details. Here are the details:
// //    - FullName
// //    - Mass
// //    - Height

// // 2) Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// // 3) Outside of the objects, create a JS function that compares the BMI of both objects.

// // 4) Display the name of the person who has the largest BMI.

// const john = {
//   fullName: "John Smith",
//   mass: 80,
//   height: 1.8,
//   bmi: function () {
//     const bmi = this.mass / this.height ** 2;
//     return bmi.toFixed(2);
//   },
// };

// const mike = {
//   fullName: "Mike Doe",
//   mass: 60,
//   height: 1.7,
//   bmi: function () {
//     const bmi = this.mass / this.height ** 2;
//     return bmi.toFixed(2);
//   },
// };

// if (john.bmi() > mike.bmi()) {
//   console.log(`${john.fullName} has a higher BMI: ${john.bmi()}`);
// } else {
//   console.log(`${mike.fullName} has a higher BMI: ${mike.bmi()}`);
// }

// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// 1) Create a function called findAvg(gradesList) that takes an argument called gradesList.

// 2) Your function must calculate and console.log the average.

// 3) If the average is above 65 let the user know they passed

// 4) If the average is below 65 let the user know they failed and must repeat the course.
// ✅ Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

const grades = [60, 80, 43, 100, 95];

function findAvg(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  const average = sum / gradesList.length;

  console.log(average);

  return average;
}

function checkIfPassed(average) {
  if (average > 65) {
    console.log("You passed!");
  } else {
    console.log("You didn't pass, you must take the test again!");
  }
}

checkIfPassed(findAvg(grades));

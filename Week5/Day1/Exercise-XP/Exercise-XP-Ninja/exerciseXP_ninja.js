// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// 1) Create two objects, each object should hold a person’s details. Here are the details:
//    - FullName
//    - Mass
//    - Height

// 2) Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// 3) Outside of the objects, create a JS function that compares the BMI of both objects.

// 4) Display the name of the person who has the largest BMI.

const john = {
  fullName: "John Smith",
  mass: 80,
  height: 1.8,
  bmi: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi.toFixed(2);
  },
};

const mike = {
  fullName: "Mike Doe",
  mass: 60,
  height: 1.7,
  bmi: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi.toFixed(2);
  },
};

if (john.bmi() > mike.bmi()) {
  console.log(`${john.fullName} has a higher BMI: ${john.bmi()}`);
} else {
  console.log(`${mike.fullName} has a higher BMI: ${mike.bmi()}`);
}

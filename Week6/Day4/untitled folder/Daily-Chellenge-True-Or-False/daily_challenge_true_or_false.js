// Instructions
// 1) Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(...values) {
  if (values.some((value) => !value)) {
    return false;
  } else {
    return true;
  }
}

// 🟢 OR use the arrow function since this can all be done in 1 line =>
//  const allTruthy = (...values) => valuesArray.some((value) => !value) ? false : true

console.log(allTruthy(true, true, true));

console.log(allTruthy(true, false, true));

console.log(allTruthy(5, 4, 3, 2, 1, 0));

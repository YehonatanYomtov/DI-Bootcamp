// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

function isBlank(string) {
  if (!string) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(""));
console.log(isBlank("abc"));

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

function abbrevName(name) {
  const toArr = name.split(" ");
  const firstName = toArr[0];
  const lastNameAbbrev = toArr[1].charAt(0) + ".";

  return `${firstName} ${lastNameAbbrev}`;
}

console.log(abbrevName("Robin Singh"));

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

function caseSwapper(string) {
  const toArr = string.split("");

  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === toArr[i].toUpperCase()) {
      toArr[i] = toArr[i].toLowerCase();
    } else {
      toArr[i] = toArr[i].toUpperCase();
    }
  }

  return toArr.join("");
}

console.log(caseSwapper("The Quick Brown Fox"));

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.

function isOmnipresent(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(num)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
);

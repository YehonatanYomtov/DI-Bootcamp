// // Instructions
// // 1rst Daily Challenge
// // 1) Create two functions. Each function should return a promise.
// // 2) The first function called makeAllCaps(), takes an array of words as an argument
// //      - If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// //      - else, reject the promise with a reason.
// // 3) The second function called sortWords(), takes an array of words uppercased as an argument
// //      - If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// //      - else, reject the promise with a reason.
// // Test:

// // //in this example, the catch method is executed
// // makeAllCaps([1, "pear", "banana"])
// //       .then((arr) => sortWords(arr))
// //       .then((result) => console.log(result))
// //       .catch(error => console.log(error))

// // //in this example, the catch method is executed
// // makeAllCaps(["apple", "pear", "banana"])
// //       .then((arr) => sortWords(arr))
// //       .then((result) => console.log(result))
// //       .catch(error => console.log(error))

// // //in this example, you should see in the console,
// // // the array of words uppercased and sorted
// // makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
// //       .then((arr) => sortWords(arr))
// //       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
// //       .catch(error => console.log(error))

// function makeAllCaps(arrayOfWords) {
//   return new Promise((res, rej) => {
//     if (arrayOfWords.every((word) => typeof word === "string")) {
//       const allToUpperCase = arrayOfWords.map((word) => word.toUpperCase());
//       res(allToUpperCase);
//     } else {
//       rej("Not all words in the array are of type String.");
//     }
//   });
// }

// function sortWords(arrayOfUpperCasedWords) {
//   return new Promise((res, rej) => {
//     if (arrayOfUpperCasedWords.length > 4) {
//       const sorterArray = arrayOfUpperCasedWords.sort();
//       res(sorterArray);
//     } else {
//       rej("The array's length isn't long enough.");
//     }
//   });
// }

// makeAllCaps([1, "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//   --------------------

// 2nd Daily Challenge
// const morse = `{
//   "0": "-----",
//   "1": ".----",
//   "2": "..---",
//   "3": "...--",
//   "4": "....-",
//   "5": ".....",
//   "6": "-....",
//   "7": "--...",
//   "8": "---..",
//   "9": "----.",
//   "a": ".-",
//   "b": "-...",
//   "c": "-.-.",
//   "d": "-..",
//   "e": ".",
//   "f": "..-.",
//   "g": "--.",
//   "h": "....",
//   "i": "..",
//   "j": ".---",
//   "k": "-.-",
//   "l": ".-..",
//   "m": "--",
//   "n": "-.",
//   "o": "---",
//   "p": ".--.",
//   "q": "--.-",
//   "r": ".-.",
//   "s": "...",
//   "t": "-",
//   "u": "..-",
//   "v": "...-",
//   "w": ".--",
//   "x": "-..-",
//   "y": "-.--",
//   "z": "--..",
//   ".": ".-.-.-",
//   ",": "--..--",
//   "?": "..--..",
//   "!": "-.-.--",
//   "-": "-....-",
//   "/": "-..-.",
//   "@": ".--.-.",
//   "(": "-.--.",
//   ")": "-.--.-"
// }`
// 1) Create three functions. The two first functions should return a promise..

// 2) The first function is named toJs():
//      - this function converts the morse json string provided above to a morse javascript object.
//      - if the morse javascript object is empty, throw an error (use reject)
//      - else return the morse javascript object (use resolve)

// 3) The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

//      - This function asks the user for a word or a sentence.
//      - if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//      - else return an array with the morse translation of the user’s word.
//          if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//          if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// 4) The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//      - this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// 5) Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

const morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`;

const userInput = prompt("Enter a valid character: ")
  .replace(/\s/g, "")
  .toLowerCase();

function toJs(jsonString) {
  const toJsObj = JSON.parse(jsonString);

  return new Promise((res, rej) => {
    if (Object.keys(toJsObj).length === 0 || !toJsObj) {
      rej("Your Morse code object is empty!");
    } else {
      res(toJsObj);
    }
  });
}

function toMorse(morseJS) {
  const inputToArray = userInput.split("");
  const keys = Object.keys(morseJS);

  return new Promise((res, rej) => {
    if (inputToArray.every((item) => keys.includes(item))) {
      const result = inputToArray.map((char) => morseJS[char]);
      res(result);
    } else {
      rej("Invalid character entered.");
    }
  });
}

function joinWords(morseTranslation) {
  const displayMorseContainer = document.getElementById("display-morse");
  document.querySelector("h3").textContent = `${userInput} in morse is:`;
  displayMorseContainer.innerHTML = morseTranslation.join("<br>");
}

toJs(morse)
  .then((value) => toMorse(value))
  .then((data) => joinWords(data))
  .catch((err) => console.error(err));

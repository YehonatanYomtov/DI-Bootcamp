// Instructions
// 1) Prompt the user for several words (separated by commas).
// 2) Put the words into an array.
// 3) Console.log the words one per line, in a rectangular frame as seen below.
// 4) Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

const userInput = prompt(
  "Enter a sentence where each word is separated by a space and comma: "
);
const toArr = userInput.split(", ");

let string = "";
let longest = 0;

for (let i = 0; i < toArr.length; i++) {
  if (toArr[i].length > longest) {
    longest = toArr[i].length;
  }
}

const frame = longest + 4;

console.log("*".repeat(frame));

for (let i = 0; i < toArr.length; i++) {
  console.log("* " + toArr[i] + " ".repeat(longest - toArr[i].length) + " *");
}

console.log("*".repeat(frame));

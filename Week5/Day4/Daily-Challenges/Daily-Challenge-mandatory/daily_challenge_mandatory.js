// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// 1) Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// 2) Make sure the values are not empty
// 3) Write a story that uses each of the values.
// 4) Make sure you check the console for errors when playing the game.
// 5) ✅ Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Challenge: Mad Libs</title>
//  </head>
//  <body>

//     <h1>Mad Libs</h1>

//     <form id="libform">
//         <label for="noun">Noun:</label><input type="text" id="noun"><br>
//         <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//         <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//         <label for="verb">Verb:</label><input type="text" id="verb"><br>
//         <label for="place">A place:</label><input type="text" id="place"><br>
//         <button id="lib-button">Lib it!</button>
//     </form>

//     <p>Generated story:
//     <span id="story"></span>
//     </p>

//     <script src="..."></script>

//  </body>
// </html>

const form = document.getElementById("libform");
const storyContainer = document.getElementById("story");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nounValue = document.getElementById("noun").value;
  const adjectiveValue = document.getElementById("adjective").value;
  const personValue = document.getElementById("person").value;
  const verbValue = document.getElementById("verb").value;
  const placeValue = document.getElementById("place").value;

  const story = `
 Once upon a time in a ${adjectiveValue} ${placeValue}, there was a ${nounValue} named ${personValue}. One day, ${personValue} decided to ${verbValue}. It was a ${adjectiveValue} adventure in the ${placeValue}!
`;

  if (
    nounValue === "" ||
    adjectiveValue === "" ||
    personValue === "" ||
    verbValue === "" ||
    placeValue === ""
  ) {
    return;
  } else {
    storyContainer.textContent = story;
  }
});

// Bonus
let count = 0;

const shuffleBtn = document.getElementById("shuffleBtn");

shuffleBtn.addEventListener("click", function () {
  if (count < 3) {
    const storyToArr = storyContainer.textContent.split(" ");

    const shuffledStory = shuffle(storyToArr);

    storyContainer.textContent = shuffledStory;
    count++;
  } else {
    shuffleBtn.disabled = true;
    alert("You've reached the shuffle limit!");
  }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join(" ");
}

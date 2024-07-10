// 🌟 Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol

// form

// 1) Create a form like the one above. The form should contain three inputs:
//      - a small text input asking for a name,
//      - a larger textarea input to write a message,
//      - a submit input (“Send”)

// 2) When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// 3) Where will the sent data appear?

// --> It will appear in the url after the '?' as a query. based on the name attribute, it will look like this (based on what we did in our HTML file) -> http://127.0.0.1:5500/ExerciseXP-mandatory/exerciseXP_mandatory.html?name=John&comment=This+is+my+comment+everyone%21

// --------------------

// 🌟 Exercise 2 : HTML Form #2
// Instructions
// 1) Use the same form structure as Exercise 1.
// 2) When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// 3) Where will the sent data appear? Hint : Look at the Network Tab

// --> The data will appear in the 'payload' tab under network tab.

// --------------------

// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

// const marioGame = {
//   detail : "An amazing game!",
//   characters : {
//       mario : {
//         description:"Small and jumpy. Likes princesses.",
//         height: 10,
//         weight: 3,
//         speed: 12,
//       },
//       bowser : {
//         description: "Big and green, Hates princesses.",
//         height: 16,
//         weight: 6,
//         speed: 4,
//       },
//       princessPeach : {
//         description: "Beautiful princess.",
//         height: 12,
//         weight: 2,
//         speed: 2,
//       }
//   },
// }
// 1) Convert this JS object into a JSON object. What happens to the nested objects ?
// 2) Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// 3) Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

const toJSON = JSON.stringify(marioGame);

// --> The nested objects are turned into a string.

console.log("marioGame: ", marioGame);
console.log("toJSON: ", toJSON);

// JSON.stringify(student, null, 2);

console.log(JSON.stringify(marioGame, null, 2));

// --> Checked the object in the debugger under the 'Scope' tab after I reloaded the page :)

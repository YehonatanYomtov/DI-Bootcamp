// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// 1) Create an array which value is the planets of the solar system.
// 2) For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3) Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// 4) Finally append each div to the <section> in the HTML (presented below).
// 5) Bonus: Do the same process to create the moons.
//      - Be careful, each planet has a certain amount of moons. How should you display them?
//      - Should you still use an array for the planets ? Or an array of objects ?
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Challenge: Create a solar system</title>
//         <style>
//             body {
//                 background-color: black;
//                 padding: 10px;
//             }
//             .planet {
//                 width: 100px;
//                 height: 100px;
//                 border-radius: 50%;
//                 text-align: center;
//                 padding: 10px;
//                 position: relative;
//                 border: 2px solid white;
//             }
//             .moon {
//                 position: absolute;
//                 width: 30px;
//                 height: 30px;
//                 border-radius: 50%;
//                 background: rgb(237, 237, 237);
//                 border: 5px solid red;
//             }
//         </style>
//     </head>
//     <body>

//     <section class="listPlanets"></section>

//     <script src="..."></script>
//     </body>
// </html>

// const planets = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune",
// ];

var planetsWithMoons = [
  { name: "Mercury", moon: null },
  { name: "Venus", moon: null },
  { name: "Earth", moon: "Moon" },
  { name: "Mars", moon: "Phobos" },
  { name: "Jupiter", moon: "Ganymede" },
  { name: "Saturn", moon: "Titan" },
  { name: "Uranus", moon: "Titania" },
  { name: "Neptune", moon: "Triton" },
];

const planetColors = [
  "gray",
  "yellow",
  "blue",
  "red",
  "orange",
  "gold",
  "lightblue",
  "darkblue",
];

const listPlanetsSection = document.querySelector(".listPlanets");

for (var i = 0; i < planetsWithMoons.length; i++) {
  const planet = document.createElement("div");
  planet.setAttribute("class", "planet");
  planet.style.backgroundColor = `${planetColors[i]}`;

  if (planetsWithMoons[i].moon) {
    const moon = document.createElement("div");
    moon.setAttribute("class", "moon");
    moon.style.backgroundColor = "light-grey";

    planet.append(moon);
  }

  listPlanetsSection.append(planet);
}

// Instructions
// You should use the Poke API: https://pokeapi.co/ to get all the information you need to display.

// Some Tips:
// 1) Create the corresponding tags in your HTML file, and select your elements in the javascript file.

// 2) You will use three buttons, one to fetch a random Pokémon, and the other two for the left and right buttons.

// 3) The random button will call an Async Await function to fetch the API and display the data (image, name, id, height, weight and type).

// 4) Make sure to add a catch block in the case of an error and display a message like “Oh no! That Pokemon isn’t available…”.

// 5) Remember to use a loading message while fetching the random Pokémon. It could be an icon or a gif.

// 6) You will also use 2 Async Await functions to fetch the API when pressing the “previous” and “next” buttons. The “previous” will fetch the previous pokemon from the current one that is being displayed and the “next” will fetch the next pokemon from the current one that is being displayed. (You can console.log a global variable in order to achieve this).

let currentPokemonNumber = 0;
let isTurnedOn = false;

function playIntroAnimation() {
  const audio = document.getElementById("my-audio");
  audio.playbackRate = 1.5;
  audio.play();

  setTimeout(() => {
    document.getElementById(
      "pokemon-info-display-canvas"
    ).innerHTML = `<div id="into-animation">GAMEBOY</div>`;
  }, 100);

  setTimeout(() => {
    document.getElementById("pokemon-info-display-canvas").innerHTML = "";
  }, 3000);

  setTimeout(() => {
    displayInstructionMenu();
  }, 4000);
}

function displayInstructionMenu() {
  document.getElementById("pokemon-info-display-canvas").innerHTML = `
  <div id="instructions-container">
    <h2>How to use:</h2>
    <p>
      <strong>1</strong> - Press the <strong>Green</strong> button to get a random Pokémon
    </p>
    <p>
      <strong>2</strong> - Press <strong>Left</strong> and <strong>Right</strong> buttons to
      see previous and next Pokémon
    </p>
  </div>
`;
}

function turnOnAndOffGameboy() {
  isTurnedOn = !isTurnedOn;

  const screenContainer = document.getElementById(
    "pokemon-info-display-canvas"
  );
  const onOffLightDiv = document.querySelector(".on-off-light");

  if (isTurnedOn) {
    onOffLightDiv.classList.add("on");
    screenContainer.classList.add("on-screen");
    playIntroAnimation();
  } else {
    onOffLightDiv.classList.remove("on");
    screenContainer.classList.remove("on-screen");
    document.getElementById("pokemon-info-display-canvas").innerHTML = "";
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchFromApi(url) {
  const loadingSpinner = `
        <div class="fa-3x">
        <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
        `;

  try {
    document.getElementById("pokemon-info-display-canvas").innerHTML =
      loadingSpinner;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("There was an error fetching the data from API.");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);

    document.getElementById("pokemon-info-display-canvas").innerHTML =
      "<p>Oh no! That Pokémon isn't available.</p>";
  }
}

async function getPreviousPokemon() {
  if (!isTurnedOn) return;

  if (currentPokemonNumber === 0) {
    alert("First generate a random Pokémon.");
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonNumber}`;
  currentPokemonNumber--;
  const result = await fetchFromApi(url);
  displayPersonInHtml(result);
}

async function getNextPokemon() {
  if (!isTurnedOn) return;

  if (currentPokemonNumber === 1010) {
    alert(
      "You have reached the last pokemon, press the green button to generate a new random Pokémon."
    );
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonNumber}`;
  currentPokemonNumber++;
  const result = await fetchFromApi(url);
  displayPersonInHtml(result);
}

function displayPersonInHtml(pokemonInfo) {
  // Destructuring it here and not in the function's parameter for simplicity and readability purposes.
  const {
    id,
    name,
    height,
    weight,
    types,
    sprites: { front_default: imgUrl },
  } = pokemonInfo;

  const type = types.map((t) => t.type.name).join();

  const pokemonInfoTemplate = `
      <img src=${imgUrl} alt=${name}/>
      <div class="info-box">
        <h3>${name}</h3>
        <p>Pokémon #<span>${id}</span></p>
        <p>Height: <span>${height}</span></p>
        <p>Weight: <span>${weight}</span></p>
        <p>Type: <span>${type}</span></p>
      </div>
      
      `;

  document.getElementById("pokemon-info-display-canvas").innerHTML =
    pokemonInfoTemplate;
}

const fetchBtn = document.getElementById("green-btn");
fetchBtn.addEventListener("click", async () => {
  if (!isTurnedOn) return;

  currentPokemonNumber = getRandomNumber(1, 1010);
  const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonNumber}`;

  const randomPokemon = await fetchFromApi(url);
  displayPersonInHtml(randomPokemon);
});

const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

previousBtn.addEventListener("click", getPreviousPokemon);
nextBtn.addEventListener("click", getNextPokemon);

document
  .querySelector(".on-off-btn")
  .addEventListener("click", turnOnAndOffGameboy);

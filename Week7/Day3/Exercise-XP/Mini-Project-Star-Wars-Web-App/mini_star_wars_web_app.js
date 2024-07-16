// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1) Create your HTML file, and add the relevant elements.

// 2) In your JS file, create your functions :
//      - to retrieve the elements from the DOM.
//      - to get the data from the API (star wars characters).
//      - to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// 3) Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

// 4) If there is an error getting the data, display a message as follows:

// 5) You can use your own css to style the website as you see fit

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchFromApi(url) {
  const loadingSpinner = `
      <div class="fa-3x">
      <i class="fa-solid fa-cog fa-spin"></i>
      </div>
      `;

  try {
    document.getElementById("main-display-container").innerHTML =
      loadingSpinner;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("There was an error fetching the data from API.");
    }

    const data = await res.json();
    console.log(data.result.properties);

    return data.result.properties;
  } catch (err) {
    console.error(err);

    document.getElementById("main-display-container").innerHTML =
      "<p>Oh no! That person isn't available.</p>";
  }
}

function displayPersonInHtml(
  { name, height, gender, birth_year },
  { name: planetName }
) {
  const personInfoTemplate = `
    <p>Name: <span>${name}</span></p>
    <p>Height: <span>${height}</span></p>
    <p>Gender: <span>${gender}</span></p>
    <p>Birth Year: <span>${birth_year}</span></p>
    <p>Home World: <span>${planetName}</span></p>
    `;

  document.getElementById("main-display-container").innerHTML =
    personInfoTemplate;
}

const findBtn = document.getElementById("find-someone-btn");
findBtn.addEventListener("click", async () => {
  const personUrl = `https://www.swapi.tech/api/people/${getRandomIntInclusive(
    1,
    82
  )}`;

  const personData = await fetchFromApi(personUrl);
  const { homeworld } = personData;
  const [homeworldData] = await Promise.all([fetchFromApi(homeworld)]);

  displayPersonInHtml(personData, homeworldData);
});

// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// 1) In the HTML file, create a form with 4 inputs:
//      - the latitude and longitude of the first city
//      - the latitude and longitude of the second city

// 2) Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.853409
// Longitude: 2.348800

// New York
// Latitude: 40.712784
// Longitude: -74.005943

async function fetchCity(cityLatitude, cityLongitude) {
  const url = `https://api.sunrise-sunset.org/json?lat=${cityLatitude}&lng=${cityLongitude}&date=today`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Error");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("There was an error fetching the city", err);
  }
}

function cleanAllInputs(inputs) {
  inputs.forEach((input) => (input.value = ""));
}

function displayCitesOnHtml(data) {
  const citesDisplayContainer = document.getElementById(
    "cites-display-container"
  );

  citesDisplayContainer.innerHTML = `
              <p><strong>First City Sunrise Time:</strong> ${data[0].results.sunrise}</p>
              <p><strong>Second's City Sunrise Time:</strong> ${data[1].results.sunrise}</p>
          `;
}

const form = document.getElementById("city-location-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const [city1Lat, city1Long, city2Lat, city2Long] = e.target.elements;
  const inputs = [city1Lat, city1Long, city2Lat, city2Long];

  for (const input of inputs) {
    if (isNaN(Number(input.value)) || input.value === "") {
      alert("Please enter a number");
      cleanAllInputs(inputs);
      return;
    }
  }

  try {
    const data = await Promise.all([
      fetchCity(city1Lat.value, city1Long.value),
      fetchCity(city2Lat.value, city2Long.value),
    ]);

    displayCitesOnHtml(data);
    cleanAllInputs(inputs);
  } catch (err) {
    console.error(err);
  }
});

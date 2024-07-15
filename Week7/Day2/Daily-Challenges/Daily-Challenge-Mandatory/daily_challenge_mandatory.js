// Instructions
// 1) Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 2) In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// 3) In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// 4) The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// 5) Allow the user to delete a specific gif by clicking the DELETE button.
// 6) Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchRandomGif(searchInput) {
  const url = `https://api.giphy.com/v1/gifs/random?tag=${searchInput}&api_key=${API_KEY}`;
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch GIF");
    }

    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching GIF:", err);
    return null;
  }
}

function checkIfDeleteAllBtnIsNeeded() {
  const deleteBtn = document.getElementById("delete-all-btn");
  const gifsDisplayContainer = document.getElementById("gifs-display");

  if (gifsDisplayContainer.children.length > 0) {
    deleteBtn.classList.remove("none");
  } else {
    deleteBtn.classList.add("none");
  }
}

function displayGif(gifData) {
  const gifsDisplayContainer = document.getElementById("gifs-display");
  gifsDisplayContainer.innerHTML += `
    <div class="gif">
        <img src=${gifData.images.original.url} alt="Gif"/>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;
}

function deleteGif(allGifs) {
  allGifs.forEach((gif) => {
    gif.children[1].addEventListener("click", () => {
      gif.remove();
    });
  });
}

function deleteAllGifs(allGifs) {
  const deleteAllBtn = document.getElementById("delete-all-btn");

  deleteAllBtn.addEventListener("click", () =>
    allGifs.forEach((gif) => {
      gif.remove();
      checkIfDeleteAllBtnIsNeeded();
    })
  );
}

checkIfDeleteAllBtnIsNeeded();

const form = document.getElementById("search-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();

  if (!searchInput) {
    alert("Please enter a search term.");
    return;
  }

  const gif = await fetchRandomGif(searchInput);

  if (gif) {
    displayGif(gif);
    document.getElementById("search-input").value = "";

    const allGifsInHtml = document.querySelectorAll(".gif");

    deleteGif(allGifsInHtml);
    deleteAllGifs(allGifsInHtml);
    checkIfDeleteAllBtnIsNeeded();
  } else {
    alert("No GIF found for this search term.");
  }
});

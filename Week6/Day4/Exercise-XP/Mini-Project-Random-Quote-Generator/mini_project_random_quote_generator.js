// - Conditionals, and ternary operator
// - Loops
// - Arrow Functions
// - Array methods
// - Objects

// Instructions
// Part 1 : Quote Generator
// 1) Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// 2) In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

// 3) Populate the array with a few quotes that you like.

// 4) When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

import quotes from "./data/quotes.js";

const getElementById = (id) => document.getElementById(id);

const generatedQuoteSection = getElementById("generated-quote-section");
const quotesAvailable = [...quotes];

function printQuote({ id, quote, author }, htmlElement) {
  return (htmlElement.innerHTML = `
       <div id="quote-container" class="quote-container" data-quote-id=${id}>
           <i class="fa-solid fa-quote-left "></i>
           <p id="quote-display" class="quote-display">${quote}</p>
           <p id="author-display" class="author-display">${author}</p>
       </div>
        `);
}

function getRandomQuote(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const quote = array.splice(randomIndex, 1)[0];

  return array.length !== 0
    ? quote
    : alert("You have displayed all your quotes!");
}

getElementById("generate-btn").addEventListener("click", () => {
  printQuote(getRandomQuote(quotesAvailable), generatedQuoteSection);

  const allInfoDisplays = document.querySelectorAll("#info-btns-container p");
  allInfoDisplays.forEach((p) => (p.textContent = ""));
});

// Part 2 : Add Buttons
// 1) In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// 2) In the HTML file, under the displayed quote, create a few more buttons:
//      - A button that gives the number of character inside each quote (space included)
//      - A button that gives the number of character inside each quote (space NOT included)
//      - A button that gives the number of words in each quote
//      - A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

const lastSectionQuoteInput = getElementById("search-all-quotes-input");

function createNewQuote(array) {
  array.push({
    id: array.length,
    quote: getElementById("quote-input").value,
    author: getElementById("author-input").value,
  });
}

getElementById("create-quote-form").addEventListener("submit", (e) => {
  e.preventDefault();

  createNewQuote(quotes);

  lastSectionQuoteInput.placeholder = `Numbers (1/${quotes.length})`;

  getElementById("quote-input").value = "";
  getElementById("author-input").value = "";
});

getElementById("char-in-quote-btn").addEventListener("click", () => {
  const quote = generatedQuoteSection.textContent;
  getElementById("char-in-quote-display").textContent = quote.length;
});

getElementById("char-in-quote-no-spaces-btn").addEventListener("click", () => {
  const quoteWithoutSpaces = generatedQuoteSection.textContent.replace(
    /\s+/g,
    ""
  ).length;
  getElementById("char-in-quote-no-spaces-display").textContent =
    quoteWithoutSpaces;
});

getElementById("words-in-quote-btn").addEventListener("click", () => {
  const wordsInQuote = generatedQuoteSection.textContent.split(" ").length;
  getElementById("words-in-quote-display").textContent = wordsInQuote;
});

getElementById("like-btn").addEventListener("click", () => {
  const quoteId = Number(
    getElementById("quote-container").getAttribute("data-quote-id")
  );

  quotes.forEach((quote) => (quote.id === quoteId ? (quote.likes += 1) : null));
});

// Part 3 : Filter Form
// 1) Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

getElementById("filter-quote-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = getElementById("search-by-author-input");

  const quotesByAuthor = quotes.filter((quote) =>
    quote.author.toLowerCase().includes(input.value.toLowerCase())
  );

  input.value = "";

  const previousQuotes = document.querySelectorAll("#filter-quote-form p");
  previousQuotes.forEach((p) => p.remove());

  quotesByAuthor.forEach(
    (quote) =>
      (getElementById("filter-quote-display-section").innerHTML += `
        <p id="quote-display" class="quote-display">${quote.quote}</p>
        <p id="author-display" class="author-display">${quote.author}</p>
      `)
  );
});

// 2) Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

// -> I added all the functionality in this project :p
const searchBtn = getElementById("search-all-quotes-btn");

let choice = null;

lastSectionQuoteInput.placeholder = `Numbers (1/${quotes.length})`;

searchBtn.addEventListener("click", () => {
  choice = Number(lastSectionQuoteInput.value);

  lastSectionQuoteInput.value = "";

  const match = quotes.find((quote) => quote.id + 1 === choice);

  printQuote(match, getElementById("last-section-quote-display"));
});

[getElementById("Previous-btn"), getElementById("Next-btn")].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "Previous-btn") {
      choice -= 1;
      const match = quotes.find((quote) => quote.id + 1 === choice);

      printQuote(match, getElementById("last-section-quote-display"));
    } else {
      choice += 1;
      const match = quotes.find((quote) => quote.id + 1 === choice);

      printQuote(match, getElementById("last-section-quote-display"));
    }
  });
});

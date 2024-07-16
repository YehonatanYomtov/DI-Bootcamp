// Note
// 1) The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// 2) First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// 3) To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// 4) ✅ Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

const API_KEY = "b943a1f232d87f3abe72c27c";

async function fetchFromCurrencyApi(url) {
  const loadingSpinner = `
          <div class="fa-3x">
          <i class="fa-solid fa-spinner fa-spin-pulse"></i>
          </div>
          `;

  try {
    document.getElementById("conversion-display").innerHTML = loadingSpinner;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("There was an error fetching the data from API.");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);

    document.getElementById(
      "conversion-display"
    ).innerHTML = `<p>Oh no! There was an error fetching the data.</p>`;
  }
}

async function fetchAllCurrencyCodes() {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
  const result = await fetchFromCurrencyApi(url);
  document.getElementById("conversion-display").innerHTML = "";
  return result;
}

async function placeCurrencyCodeInSelectElement() {
  const { supported_codes: currencyCodes } = await fetchAllCurrencyCodes();
  const selectElements = document.querySelectorAll("select");

  selectElements.forEach((el) => {
    currencyCodes.forEach((code) => {
      el.innerHTML += `<option>${code[0]} - ${code[1]}</option>`;
    });
  });
}

async function printResultOfCurrencyInHtml(result, currencyName) {
  const currencyResult = await result;
  document.getElementById(
    "conversion-display"
  ).innerHTML = `<p>${currencyResult} ${currencyName}</p>`;
}

placeCurrencyCodeInSelectElement();

const currencyForm = document.getElementById("currency-form");
currencyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (e.target.amount.value === "") {
    alert("You need to input an amount...");
    return;
  }

  const amount = e.target.amount.value;
  const fromCurrencySelectInput = e.target.fromCur.value.split(" - ")[0];
  const toCurrencySelectInput = e.target.toCur.value.split(" - ")[0];

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrencySelectInput}/${toCurrencySelectInput}/${amount}`;

  const { conversion_result: result } = await fetchFromCurrencyApi(url);

  printResultOfCurrencyInHtml(result, toCurrencySelectInput);

  e.target.amount.value = "";
});

document
  .getElementById("switch-currencies-btn")
  .addEventListener("click", () => {
    const fromSelect = document.getElementById("from-cur");
    const toSelect = document.getElementById("to-cur");

    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
  });

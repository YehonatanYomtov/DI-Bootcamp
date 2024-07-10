// Instructions
// 1) Create a form with two fields (name, last name) and a submit button.
// 2) When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// 3) The output should be:
// {"name":"John","lastname":"Doe"}

const body = document.body;

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInputValue = document.getElementById("name").value;
  const lastNameInputValue = document.getElementById("lastName").value;

  const toObj = { name: nameInputValue, lastname: lastNameInputValue };
  const toJson = JSON.stringify(toObj);

  body.textContent = toJson;
});

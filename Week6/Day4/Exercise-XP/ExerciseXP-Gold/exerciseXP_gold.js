// Exercise 1 : HTML Form #3
// Instructions
// form

// 1) Create a form like the form provided above. The form should contain three inputs:
//      - name,
//      - lastname,
//      - submit
// 2) Send the data to another HTML file and display the sent data to a section tag, using the DOM.

window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  console.log("params: ", params);

  const name = params.get("name");
  const lastName = params.get("lastname");

  const displayDataSection = document.getElementById("display-data");
  console.log("displayDataSection: ", displayDataSection);

  const nameTemplate = `
    <p><strong>Name</strong>: ${name}</p>
    <p><strong>Name</strong>: ${lastName}</p>
  `;

  displayDataSection.innerHTML = nameTemplate;
});

const colorPickerContainer = document.getElementById("color-picker-container");
const main = document.getElementById("main");

const amountOfColorDivs = 21;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let selectedColor = "";

for (let i = amountOfColorDivs; i > 0; i--) {
  const div = document.createElement("div");
  div.classList.add("colorDiv");
  div.style.backgroundColor = getRandomColor();
  colorPickerContainer.append(div);

  div.addEventListener("click", function (e) {
    selectedColor = e.target.style.backgroundColor;
  });
}

const amountOfDisplayDivs = 1440;

let isMouseDown = false;

for (let i = amountOfDisplayDivs; i > 0; i--) {
  const div = document.createElement("div");
  div.classList.add("displayDiv");
  main.append(div);

  div.addEventListener("click", function (e) {
    e.target.style.backgroundColor = selectedColor;
  });

  div.addEventListener("mousedown", function () {
    isMouseDown = true;
  });

  div.addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  div.addEventListener("mouseover", function (e) {
    if (isMouseDown && e.target.classList.contains("displayDiv")) {
      e.target.style.backgroundColor = selectedColor;
    }
  });
}

const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", function () {
  const allDisplayDivs = document.querySelectorAll(".displayDiv");

  for (let i = 0; i < allDisplayDivs.length; i++) {
    allDisplayDivs[i].style.backgroundColor = "white";
  }
});

const drumsContainer = document.getElementById("drum-set");

const typeOfDrums = [
  { A: "Boom" },
  { S: "Clap" },
  { D: "HiHat" },
  { F: "Kick" },
  { G: "OpenHat" },
  { H: "Ride" },
  { J: "Snare" },
  { K: "Tink" },
  { L: "Tom" },
];

for (let i = 0; i < typeOfDrums.length; i++) {
  const drumBox = document.createElement("div");
  drumBox.classList.add("drum");

  for (const key in typeOfDrums[i]) {
    const drumSrc = `./sounds/${typeOfDrums[i][key].toLowerCase()}.wav`;

    const audio = document.createElement("audio");
    audio.setAttribute("src", drumSrc);

    const header = document.createElement("h4");
    header.textContent = key;

    const p = document.createElement("p");
    p.textContent = typeOfDrums[i][key];

    drumBox.append(audio, header, p);

    drumBox.addEventListener("click", function () {
      audio.currentTime = 0;
      audio.play();
    });

    document.addEventListener("keydown", function (event) {
      const keyPress = event.key;

      if (keyPress.toLowerCase() === key.toLowerCase()) {
        audio.currentTime = 0;
        audio.play();

        drumBox.classList.add("pressed");
      }
    });

    document.addEventListener("keyup", function (event) {
      drumBox.classList.remove("pressed");
    });
  }

  drumsContainer.append(drumBox);
}

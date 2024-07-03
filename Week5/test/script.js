const messageContainer = document.getElementById("messageContainer");

let messageInterval;
messageContainer.textContent = "";

setTimeout(function () {
  messageContainer.textContent = "This is the message";
  setTimeout(function () {
    messageContainer.textContent = "";
  }, 15000);
}, 5000);

const showBtn = document.getElementById("showMessageBtn");

showBtn.addEventListener("click", function () {
  clearInterval(messageInterval);
  messageContainer.textContent = "";

  messageInterval = setInterval(function () {
    messageContainer.textContent = "This is the message";

    setTimeout(function () {
      messageContainer.textContent = "";
    }, 5000);
  }, 5000);
});

const stopBtn = document.getElementById("stopMessageBtn");

stopBtn.addEventListener("click", function () {
  clearInterval(messageInterval);
  messageContainer.textContent = "";
});

async function displayColorfulMessage() {
  const chalk = await import("chalk");
  console.log(
    chalk.default.blue.bold("This is a colorful message using chalk!")
  );
}

module.exports = displayColorfulMessage;

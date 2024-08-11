function processInput(
  input: number | string | boolean
): number | string | boolean {
  if (typeof input === "number") {
    return input * input;
  }

  if (typeof input === "string") {
    return input.toUpperCase();
  }

  if (typeof input === "boolean") {
    return !input;
  }

  return input;
}

console.log(processInput(4));
console.log(processInput("hi there"));
console.log(processInput(true));

import people from "./data.js";

function calcAverageAges(people) {
  if (people.length === 0) return;

  const sum = people.reduce((acc, person) => acc + person.age, 0);

  const average = sum / people.length;

  return average;
}

console.log(calcAverageAges(people));

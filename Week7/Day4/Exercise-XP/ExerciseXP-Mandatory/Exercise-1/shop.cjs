const { products } = require("./products.cjs");

function findProduct(productName) {
  return products.filter(
    (prod) => prod.name.toLowerCase() === productName.toLowerCase()
  );
}

console.log(findProduct("Apple"));

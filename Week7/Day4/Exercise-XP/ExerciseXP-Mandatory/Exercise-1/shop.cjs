const { products } = require("./products");

function findProduct(productName) {
  return products.filter(
    (prod) => prod.name.toLowerCase() === productName.toLowerCase()
  );
}

console.log(findProduct("Apple"));

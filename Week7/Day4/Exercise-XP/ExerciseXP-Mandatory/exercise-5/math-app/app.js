import lodash from "lodash";

import { add, multiply } from "./math.js";

const mathAdd = add(5, 10);
const mathMultiply = multiply(2, 5);

console.log("mathAdd: ", mathAdd);
console.log("mathMultiply: ", mathMultiply);

const sum = lodash.sum([mathAdd, mathMultiply]);
const divide = lodash.divide(mathAdd, mathMultiply);
const subtract = lodash.subtract(mathAdd, mathMultiply);

console.log("sum: ", sum);
console.log("divide: ", divide);
console.log("subtract: ", subtract);

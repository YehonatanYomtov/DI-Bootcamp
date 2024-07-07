// Instructions
// Using this object :

// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// 1) Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// 2) Create another arrow function named cloneGroceries.
//      - In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//          - Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//      - In the function, create a variable named shopping that is equal to the groceries variable.
//          - Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//          - Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// 3) Invoke the cloneGroceries function.

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => groceries.forEach((fruit) => console.log(fruit));

const cloneGroceries = () => {
  const user = client;

  client = "Betty"; // --> You will NOT see the same output, since primitive values in JS are passed by value, which means that the value of the user variable is a copy of the value in client back before we made the change, it doesn't copy the reference to the address of the variable (which is what happens with objects and arrays in JS), therefor the value of the user value.

  const shopping = groceries;
  shopping.totalPrice = "35$"; // --> It will change the value also n the groceries object since the JS checks this value by reference, meaning: that it will store the value in memory and then every time we "copy" the values of the object we just copy the address of the values which is stored in memory, not the value itself, so anywhere we change the object/ array, it will change all the arrays/objects in our code (since they all point to the same address in memory).

  shopping.other.paid = false; // --> same point as above (but to solve this issue, it wont be enough to clone the groceries object, you need to deep clone, meaning: to flatten all the arrays so that there arrent any nested arrays/objects, and then do the cloning)
};

cloneGroceries();

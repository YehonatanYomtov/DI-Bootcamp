// Exercise 1 : Bird Class
// Instructions
// 1) Analyze the code below, what will be the output?
// class Bird {
//   constructor() {
//     console.log("I'm a bird. 🦢");
//   }
// }

// class Flamingo extends Bird {
//   constructor() {
//     console.log("I'm pink. 🌸");
//     super();
//   }
// }

// const pet = new Flamingo();

// --> It will call the "I'm pink. 🌸" first then the "I'm a bird. 🦢". This is because we initiated the Flamingo class first and it will call the constructor function first, and therefor the console.log("I'm pink. 🌸"); will run first, and then it will call the super function and go to the parent class and call the constructor there and will execute the console.log("I'm a bird. 🦢"); there after. This is how classes behave in JS. :)

// 🌟 Exercise 1 : Location
// Instructions
// 1) Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// --> I am John Doe from Vancouver, Canada. Latitude(49.2827) , Longitude(-123.1207)

// --------------------

// // 🌟 Exercise 2: Display Student Info
// // Instructions
// // function displayStudentInfo(objUser){
// // //destructuring
// // }

// // displayStudentInfo({first: 'Elie', last:'Schoppik'});

// // 1) Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// // output : 'Your full name is Elie Schoppik'

// function displayStudentInfo({ first, last }) {
//   return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// --------------------

// // 🌟 Exercise 3: User & Id
// // Instructions
// // Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// // 1) Using methods taught in class, turn the users object into an array:
// // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// // FYI : The number is their ID number.

// // 2) Modify the outcome of part 1, by multipling the user’s ID by 2.
// // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const toArray = Object.entries(users);
// console.log("toArray: ", toArray);

// --------------------

// 🌟 Exercise 4 : Person Class
// Instructions
// 1) Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

// --> object, a class is an object.

// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// 1) Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// --> 2

// --------------------

// 🌟 Exercise 6 : Challenges
// 1) Evaluate these (ie True or False)

// [2] === [2]
// {} === {}

// --> Both are false, since they are 2 different references in memory.

// 2) What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// --> 4 4 5. since objects 2 and 3 are pointed to the same reference of object1, if you change any of them they will be changed, but object4 is a new object in memory thus it will still be 5.

// 1) Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// 2) Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// 3) Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(sound) {
    return `My name is ${this.name}, I'm a ${this.type}, my color is ${this.color}, and I make this sound ${sound}`;
  }
}

const farmerCow = new Mammal("Lily", "Cow", "white");

console.log(farmerCow.sound("Moooooo"));

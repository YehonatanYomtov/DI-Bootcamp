// Exercise 1 : Promise.All()
// Instructions
// 1) Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((arrayOfPromises) => console.log(arrayOfPromises))
  .catch((err) => console.err(err));

// --> The way the Promise.all static method works, is that it waits for ALL the promises to be resolved, if one of the promises is rejected then none of the promises will return, rather an error (of the first rejected promise) will be returned. But if it is resolved then it will return a single value which is an array of all the returned promises.

// --------------------

// Exercise 2 : Analyse Promise.All()
// Instructions
// Analyse the code below - what will be the output ?

// function timesTwoAsync(x) {
//   return new Promise(resolve => resolve(x * 2));
// }

// const arr = [1, 2, 3];
// const promiseArr = arr.map(timesTwoAsync);

// Promise.all(promiseArr)
//   .then(result => {
//     console.log(result);
//   });

// --> [2, 4, 6]. The Promise.all gets the array of all resolved promises of the duplicated values, and then displays the returned array of promises :)

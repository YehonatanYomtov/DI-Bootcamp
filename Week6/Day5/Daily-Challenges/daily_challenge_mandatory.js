// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

function isAnagram(string1, string2) {
  const str1 = string1.trim().toLowerCase().replace(/\s+/g, "").split("");
  const str2 = string2.trim().toLowerCase().replace(/\s+/g, "").split("");

  if (str1.length !== str2.length) return false;

  str1.sort();
  str2.sort();

  // I used here a for loop rather then a foreach loop since a foreach loop won't return false to us it will only return it to the isAnagram function, so instead of creating a variable and within the foreach loop assign the variable with true, i used the for loop (you can also use the for of loop as well, I just like the flexibility of the for loop :p)
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
}
console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram(" Morse Code", "Here come dots"));
console.log(isAnagram("TTT Morse Code", "Here come dots"));

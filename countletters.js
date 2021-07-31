const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected} .`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected} .`);
  }
};

// ********** countletters
/* psuedoCode
1. Create an empty object.
2. For each letter in the text
    2a. If the letter is not a property of the object then add it with value=1
    2b. If the letter is already a property of the object increment the count
3. Return the object containing the letters and their frequencies
*/

const countLetters = function (str) {
  let result = {};

  for (const item of str) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

// console.log(countLetters("lighthouse in the house"));
// console.log(countLetters("lighthouse in the house"));

const results1 = countLetters("lighthouse in the house");
console.log(results1);

const expectedResults1 = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, " ": 3, n: 1 };

assertEqual(expectedResults1, results1);

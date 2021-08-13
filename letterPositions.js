const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
  // if array length 1 is NOT equal ( === ) to array length 2, return false
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed.`);
  }
};

// ******************************************letterPositions
// let string = "lighthouse in the house";
// let noSpaces = string.split("").join("");

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i); // Return the first character of a string @ i
    // console.log("------ Letter print out", letter);
    if (results[letter] === undefined) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  //console.log(results);
  return results;
};

module.exports = letterPositions;

//letterPositions(noSpaces);

/// TEST CASES BELOW
const results1 = letterPositions("lighthouse in the house");
console.log(results1);

/// TEST CASES BELOW: Write a test with a small string (eg: "hello")
// assertArraysEqual(letterPositions("hello").e, [1]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

/* Pseudo Code
 * return all the indices in the string where each character is found.
 * indexOf is a method that returns index
 * For each letter, return multiple numbers to represent all the places in the string that it shows up
 * each letter value should be returned in an array, within the object
 */

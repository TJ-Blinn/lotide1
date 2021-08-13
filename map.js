const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed.`);
  }
};

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

// ********************** map function below

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  // console.log("array: ", array);
  // console.log("callback: ", callback);
  const results = [];

  //  loop logic which just console.logs each item in the provided array
  // as well as what happens to the item after being passed into the callback.
  for (let item of array) {
    results.push(callback(item)); // using callback func (line 20) we will print index 0 of item (ie: each element)

    // console.log("item BEFORE: ", item);
    // console.log("item AFTER: ", callback(item)); || this is what we want to push into results[]
    // console.log("---");
  }
  return results;
};

module.exports = map;

const results1 = map(words, (word) => word[0]); // callback func here is simply stating to print index 0
console.log(results1);

// TEST CASE #1
// const expectedResults1 = ["g", "c", "t", "m", "t"];
// assertArraysEqual(expectedResults1, results1);
// -------------------Test Case #2
// const words1 = ["The", "cat", "is", "in", "the", "hat"];
// const results2 = map(words1, (word1) => word1[0]); // callback func here is simply stating to print index 0
// console.log(results2);
// const expectedResults2 = ["T", "c", "i", "i", "t", "h"];
// assertArraysEqual(expectedResults2, results2);
// -------------------Test Case #2
// const num = ["101", "102", "103", "104", "105", "106"];
// const numResults = map(num, (num1) => num1[2]); // callback func here is simply stating to print index 0
// console.log(numResults);
// const expectednumResults = ["1", "2", "3", "4", "5", "6"];
// assertArraysEqual(expectednumResults, numResults);

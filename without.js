/*
// without function will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array.
// the original array must not modified.
*/

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
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

// Without function below ************************************************************
// loop through source array
// if elements match source and toRemove, slice out each

const without = function (source, toRemove) {
  const results = [];
  //console.log("new", source.length);
  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    if (!toRemove.includes(element)) {
      results.push(element);
    }
  }
  return results;
};

// Without function Assertions (TEST CASES)
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const withoutResult = without([1, 2, 3], [1]);
console.log("without Results", withoutResult);
//console.log(assertEqual(withoutResult, [2, 3])); // withoutResult now = actual parameter passed into assertEqual
console.log(eqArrays(withoutResult, [2, 3]));

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

/// TEST CASES BELOW
const results1 = without([1, 2, 3], [1]);
console.log(`Results 1: ${results1}`);

/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

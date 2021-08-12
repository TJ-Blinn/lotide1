const eqArrays = require("./eqArrays");

/* Implement assertArraysEqual which will take in two arrays and
 console.log an appropriate message to the console.
assertArraysEqual does NOT have assertion (test code). Instead print using console.log and compare.
 */

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
//   // if array length 1 is NOT equal ( === ) to array length 2, return false
// };

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed.`);
  }
};

module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL

const assertArraysEqual = require("./assertArraysEqual");

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

// const assertArraysEqual = function (actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed.`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed.`);
//   }
// };

// ************** Middle function take in an array and return the middle-most element(s) of the given array.
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    const position = (array.length - 1) / 2;
    const midValue = array[position];
    return [midValue]; // return as an array
  } else {
    const firstPosition = array.length / 2 - 1; // position of 1st value
    const secondPosition = array.length / 2;
    const firstValue = array[firstPosition];
    const secondValue = array[secondPosition];
    const midValue = [firstValue, secondValue];
    return midValue;
  }
};
module.exports = middle;

// TEST CODE assertArraysEqual(middle

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// TEST Code middle

// middle([1]); // => []
//middle([1, 2]) // => []
//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3]
//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

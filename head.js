// * old implementation for head.js which used assertEqual for testing
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected} .`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected} .`);
//   }
// };

// ********************* head function
/*
// Here, the only parameter for head function is an array, here "arr".
// When using the assertEqual test code, the other value outside of the array is the expected output
*/
const head = function (arr) {
  return arr[0];
};
module.exports = head;

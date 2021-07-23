const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed:  ${actual}  ===  ${expected} .`);
  } else if (actual !== expected) {
    console.log(`✅✅✅ Assertion Failed: ${actual} !==  ${expected} .`);
  }
};

// Test Code
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);

// ********************* head function
/*
// Here, the only parameter for head function is an array, here "arr".
// When using the assertEqual test code, the other value outside of the array is the expected output
*/
const head = function (arr) {
  return arr[0];
};

// Test Cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);

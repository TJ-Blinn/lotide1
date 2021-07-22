const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🛑🛑🛑 Assertion Passed: " + actual + " === " + expected + ".");
  } else if (actual !== expected) {
    console.log("✅✅✅ Assertion Failed: " + actual + " !== " + expected + ".");
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

//TEST CODE
// console.log("Assertion Passed: " + actual " === " + expected ".");
// console.log("Assertion Failed: " + actual " !== " + expected ".");

// console.log("Assertion Passed: " + actual " === " + expected ".");
// console.log("Assertion Failed: " + actual " !== " + expected ".");

/*
const sum = function (a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

const sumBuggy = function (a, b) {
  return a * b;
};

console.assert(sumBuggy(1, 2) === 3);
*/

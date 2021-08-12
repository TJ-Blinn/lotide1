// * old implementation for head.js which used assertEqual for testing
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected} .`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected} .`);
//   }
// };

const tail = function (arr) {
  if (arr.length < 2) {
    // if array is 1 element long, return that element
    return arr;
  } else {
    return arr.slice(1);
    // slice prototype will START array from the index position in brackets (1).
  }
};

module.exports = tail;

// Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const oneElement = ["Only one element"];
// tail(oneElement);
// assertEqual(oneElement.length, []);

// const empty = [];
// tail(empty);
// assertEqual(empty.length, []);

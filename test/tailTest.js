const tail = require("../tail");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it("returns result[1] for 'Labs'", () => {
    assert.deepEqual(assertEqual(result[1], "Labs"));
  });
  it("returns 2 for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(assertEqual(result.length, 2));
  });
});

// npm test test/headTest.js

// Test Cases

// Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const oneElement = ["Only one element"];
// tail(oneElement);
// assertEqual(oneElement.length, []);

// const empty = [];
// tail(empty);
// assertEqual(empty.length, []);

const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(assertArraysEqual(middle([1]), []));
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });
});
// npm test test/middleTest.js

// TEST CODE assertArraysEqual(middle

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// TEST Code middle

// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

/*
The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value. Parameters:
    The array
    The callback (which Lodash calls "predicate")
    > the callback should only be provided one value: The item in the array.
*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);
    // } else if (actual !== expected) {
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
 
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

const takeUntil = function (array, callback) {
  // keep going until the callback/predicate returns a truthy value.
  const newArray = [];
  for (let elem of array) {
    if (callback(elem)) {
      // is elem === to "," || true or false value
      return newArray;
    } else {
      newArray.push(elem);
    }
  }
  return newArray;
};

// Test code numbers # 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log("---");

// Test code strings # 1
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

const callback2 = (x) => x === ",";
const actual = eqArrays(takeUntil(data2, callback2), ["I've", "been", "to", "Hollywood"]); // closure (ie: assigning it to a vairable) around input/output
console.log(actual); // returns true

assertEqual(actual, true);



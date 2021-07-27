const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed.`);
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

/* Flatten function ********************
// flatten - take in an array containing elements including nested arrays of elements,
and return a "flattened" version of the array. 1 level of nesting.
Array.isArray - returns true if an object is an arry
*/
const flatten = function (arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      // console.log("--------", element);
      // results = [...results, ...element];
      for (let j = 0; j < element.length; j++) {
        results.push(element[j]);
        // results.push(arr[i][j]);
        // console.log(">>>", element[j]);
      }
    } else {
      results.push(element);
    }
  }

  // console.log("+++++", results);
  return results;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

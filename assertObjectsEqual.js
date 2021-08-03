const util = require('util');

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

const eqObjects = function (object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);

  if (keysArray1.length !== keysArray2.length) {
    // begin writing logic to check for falsy, and end code with return true (line 55)
    return false;
  }

  for (let object1key of keysArray1) {
    if (!object2[object1key]) {
      // if keys from both objects do not match, return false
      // (object2[object1key]) === false/undefined/null
      return false;
    }
    if (Array.isArray(object1[object1key])) {
      // checking if value is an array or not
      if (!eqArrays(object1[object1key], object2[object1key])) {
        // keys here should already match || return false if opposite of eqArrays
        // eqArrays(object1[object1key], object2[object1key]) === false;
        return false;
      }
    } else {
      if (object1[object1key] !== object2[object1key]) {
        // if values in object 1 is not the same as value 2, return false (using keys to find values)
        return false;
      }
    }
  }
  return true;
};

// ---------------------- assertObjectsEqual
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const assertObjectsEqual = function(actual, expected) {
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${util.inspect(actual)} === ${util.inspect(expected)}`); // detailed object output to the console:
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${util.inspect(expected)} !== ${util.inspect(expected)}`);
  }
  console.log(`Example label: ${util.inspect(actual)}`);
};


// TEST CODE
assertObjectsEqual(ab, ba);

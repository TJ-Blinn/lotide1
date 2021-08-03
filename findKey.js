/*
Implement the function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.
*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected} .`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected} .`);
  }
};
// ----------------------findKey function

const findKey = function (restaurants, cb) {
  const keysArray = Object.keys(restaurants);
  
  for (let element of keysArray) {
    if (cb(restaurants[element])) {
      return element;
    }
  }
  return undefined;
};

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// Test cases
assertEqual(findKey(restaurants, (x) => x.stars === 2),
  "noma");

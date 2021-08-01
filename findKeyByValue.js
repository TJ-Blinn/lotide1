// search for a key on an object where its value matches a given value.
// findKeyByValue which takes in an object and a value.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected} .`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected} .`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (tvValue, tvKey) {
  //Object constructor - returns the value for my object (bestTVShowsByGenre)
  const keysArray = Object.keys(tvValue);
  for (let element of keysArray) {
    if (tvValue[element] === tvKey) {
      console.log(element);
      return element;
    }
  }
  // console.log(keysArray);
  return keysArray;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

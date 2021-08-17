# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @tj-blinn/lotide`
6
**Require it:**

`const _ = require('@tj-blinn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

    1. function1(head): Function that takes 1 parameter of an array and returns the element at index position 0

    2. function2(tail): Function that takes 1 parameter of an array and returns all other elements except for index position 0

    3. function3(middle): Function that takes 1 parameter of an array and returns the elements except for 1st and last.

    4. function4(assertArraysEqual,): Function takes 2 parameters of actual and expected results and console.log's if assertion passed or failed, based on the conditions set by eqArrays.

    5. function5(assertEqual,): Function takes 2 parameters of actual and expected results and console.log's if assertion passed or failed.

    6. function6(assertObjectsEqual): Function takes 2 parameters of actual and expected results and console.log's if assertion passed or failed by using inspection method, based on the conditional statement of the eqObjects function.

    7. function7(countLetters): Function takes 1 parameter of a string and returns the number of times each letter is used

    8. function8(countOnly): Function takes in 2 parameters, an array of strings and an object specifying what to count

    9. function9(eqArrays): Function that takes 2 parameters and compares each by length and then equates by value

    10. function10(eqObjects): Function that takes 2 objects as parameters and compares each by length and then verifying the object_key then value for equality

    11. function11(findKey): Function that takes 2 parameters, an object and callback, taking in itself an object and element, and returns the key from which it is paired

    12. function12(findKeyByValue): Function that takes 2 parameters, an object's key and value, and returns the key that is paired to given value

    13. function13(letterPositions): expected result should be an object with letters as "key" and index positions as values. Return all the indices

    14. function14(map): Function that takes 2 parameters, an array and callback, and returns 1st letter of each word

    15. function15(takeUntil): Function that takes 2 parameters, an array and callback, collecting items from a provided array until the callback provided returns a truthy value.

    16. function16(without): Function that takes 2 arrays with one parameter telling the other which elements to exclude and returns altered result.

    17. function 17(flatten): Function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

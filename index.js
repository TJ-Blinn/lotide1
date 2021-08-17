// index.js

const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const assertEqual = require("./assertEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");

// prettier-ignore
module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey: findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
  flatten
};
console.log(exports);

// TEST CODE
// run node REPL | const _ = require('./index')
// run node REPL | _

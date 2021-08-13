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

// prettier-ignore
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};
console.log(exports);

// TEST CODE
// run node REPL | const _ = require('./index')
// run node REPL | _

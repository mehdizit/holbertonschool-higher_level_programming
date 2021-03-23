#!/usr/bin/node

const dict = require('./101-data.js').dict;

let newDict = {};

for (let key in dict) {
  newDict[dict[key]] = [];
}

for (let key in dict) {
  newDict[dict[key]].push(key);
}

console.log(newDict);

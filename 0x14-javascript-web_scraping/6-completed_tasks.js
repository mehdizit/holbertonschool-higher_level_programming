#!/usr/bin/node
// computes the number of tasks completed by user id
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const length = data.length;
    let countDict = {};
    for (let i = 1; i <= 10; i++) {
      let count = 0;
      for (let j = 0; j < length; j++) {
        if (data[j].userId === i && data[j].completed === true) {
          count++;
        }
      }
      if (count > 0) {
        countDict[i] = count;
      }
    }
    console.log(countDict);
  }
});

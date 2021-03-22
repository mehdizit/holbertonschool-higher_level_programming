#!/usr/bin/node

exports.addMeMaybe = function (number, theFunction) {
  let newNum = number + 1;
  theFunction(newNum);
};

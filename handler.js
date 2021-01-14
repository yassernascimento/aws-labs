"use strict";

const { add } = require("ramda");

module.exports.ramda = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `2 + 2 is: ${add(2)(2)}` }),
  };
};

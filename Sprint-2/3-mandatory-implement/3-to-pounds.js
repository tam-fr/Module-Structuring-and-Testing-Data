// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

let toPounds = function (str) {
  const penceStringWithoutTrailingP = str.substring(
    0,
    penceString.length - 1 // take only 399
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //The padStart() adds characters to the beginning of a string until the string reaches a specified total length

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2 // gives only the pound
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
  return `£${pounds}.${pence}`;
};

const penceString = "399p";
console.log(toPounds(penceString));

// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here  --> a integer is transformed to a string and .slice() take only the last character

/* const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
} */

/* console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is  --> because we use num
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

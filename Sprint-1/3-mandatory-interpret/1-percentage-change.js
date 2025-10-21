let carPrice = 10000;
let priceAfterOneYear = 8543;

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made --> Number() line4 and line5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem? --> the 2 variables are strings and Number returns a integer

// c) Identify all the lines that are variable reassignment statements -->4,5,7,8

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// --> Number gives the integer or real number and .replace() works with a string and replace all "," by nothing ""
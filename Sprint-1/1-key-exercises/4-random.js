const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents? --> num gives a random number between 1 and 100
// Try breaking down the expression and using documentation to explain what it means  --> Math.floor() give the rounded number below
// --> Math.random give a number between 0 and 1 but never 1
// It will help to think about the order in which expressions are evaluated --> first what is in parenthesis
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

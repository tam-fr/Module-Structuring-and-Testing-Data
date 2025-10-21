const movieLength = 65; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?  -> 6 because in the same time, there are assignments

// b) How many function calls are there?  --> 0 because console.log() is a method

// c) Using documentation, explain what the expression movieLength % 60 represents --> % is the modulo which gives the remaining
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? -->We remove the seconds and divide with 60 to have the remaining time without the seconds

// e) What do you think the variable result represents? Can you think of a better name for this variable? -->lengthOfMovieHours

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//--> not with a negative number

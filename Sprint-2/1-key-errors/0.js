// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring  --> str is already declared when the function is declared

function capitalise(str) {
  let str2 = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str2;
}

// =============> write your explanation here
// =============> write your new code here

let test = "tamTamyngo";
console.log(capitalise(test));

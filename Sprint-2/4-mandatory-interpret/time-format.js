function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  // console.log(totalHours);
  console.log(remainingSeconds);
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here ---> 3 times

// Call formatTimeDisplay with an input of 61, now answer the following: ---> 00:01:01

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here ---> 61

// c) What is the return value of pad is called for the first time?
// =============> write your answer here  ---> 0

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here ---> 1 the function pad is called last time at the last place of return for remainingSeconds

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here  --> 1 because num is the parameter and pad has 1 as argument
console.log(formatTimeDisplay(61));

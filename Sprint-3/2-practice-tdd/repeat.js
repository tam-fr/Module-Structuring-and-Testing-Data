function repeat(str, count) {
  let repeatedStr = "";
  if (count === 0) {
    return "";
  }
  for (i = 1; i <= count; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

let test = "hello";
let c = 3;
console.log(repeat(test, c));

module.exports = repeat;

let passwordValidator = function (password) {
  let digits = password;
  const integer = "0123456789";
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (!integer.includes(digits[i])) {
      return "Invalide numbers";
    }
  }

  // Check all digits are NOT the same
  if (digits.split("").every((d) => d === digits[0])) {
    return "Must not have the same digits";
  }

  if (digits[digits.length - 1] % 2 !== 0) {
    return "The last digit must be even";
  }

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  if (sum <= 16) {
    return "The sum of all digits must greater than 16";
  }
  if (digits.length !== 16) {
    return "Must have 16 digits";
  }
  return "Good one!!";
};

const test = "4444444444444446";
console.log(passwordValidator(test));
// 100% correct without mistakes made by Tam --> to check if all digits are the same, I have to use AI.

module.exports = passwordValidator;

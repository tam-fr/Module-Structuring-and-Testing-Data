let ccValidator = function (digits) {
  const integer = "0123456789";
  let same = digits[0];
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (!integer.includes(digits[i])) {
      return "Invalide numbers";
    }
  }
  for (let i = 1; i < digits.length; i++) {
    if (same === digits[i]) {
      same = digits[i];
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

const test = "1234567890123628";
console.log(ccValidator(test));
// 100% correct without mistakes made by Tam --> to check if all digits are the same, I have to use AI.

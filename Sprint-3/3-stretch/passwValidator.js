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
    if (same === digits[digits.length]) {
      return "Must not have the same digits";
    }

    if (digits[digits.length - 1] % 2 !== 0) {
      return "The last digit must be even";
    }
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

const test = "4444444444444344";
console.log(ccValidator(test));
// 100% correct without mistakes made by Tam

let cardValidator = function (creditNumber) {
  let onlyNum = "0123456789";
  let lastChar = creditNumber[creditNumber.length - 1];
  let sum = 0;
  let same = creditNumber[0];
  if (Number(lastChar) % 2 === 0) {
    return "error even number at the end";
  } else {
    for (let i = 0; i < creditNumber.length; i++) {
      if (!onlyNum.includes(creditNumber[i])) {
        return "error on characters";
      }
    }
  }
  for (let j = 0; j < creditNumber.length; j++) {
    sum += Number(creditNumber[j]);
  }
  if (sum < 16) {
    return "too short";
  }
  for (let g = 1; g < creditNumber.length; g++) {
    if (same !== creditNumber[g]) {
      return "It's OK!";
    }
  }
  return "same numbers";
};
console.log(cardValidator("7725463"));

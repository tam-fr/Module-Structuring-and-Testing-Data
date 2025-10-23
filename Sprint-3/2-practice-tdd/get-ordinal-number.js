function getOrdinalNumber(num) {
  if (num > 1 || num < 1) {
    return "No 1st";
  }

  return "1st";
}

console.log(getOrdinalNumber(1));

module.exports = getOrdinalNumber;

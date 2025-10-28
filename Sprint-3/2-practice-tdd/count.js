function countChar(stringOfCharacters, findCharacter) {
  let num = 0;
  if (findCharacter) {
    for (let i = 0; i < stringOfCharacters.length; i++) {
      if (stringOfCharacters[i] === findCharacter) {
        num++;
      }
    }
    return `${findCharacter} appears ${num} time(s)`;
  } else return 0;
}

console.log(countChar("Hello", "l"));

module.exports = countChar;

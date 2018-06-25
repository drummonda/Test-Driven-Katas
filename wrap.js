const wrap = (line, maxLen) => {
  if(!maxLen) { return line; }
  if(!line.length) { return ""; }
  let currentLineLength = 1;
  const words = line.split(" ");
  let result = [];

  words.map((word, index) => {
    currentLineLength += word.length + 1;
    if(currentLineLength >= maxLen && index !== words.length - 1) {
      result.push(word);
      result.push("\n");
      currentLineLength = 0;
    }
    else if(index !== words.length - 1) {
      result.push(word + " ");
    }
    else {
      result.push(word);
    }
  })
  return result.join("");
}

module.exports = wrap;

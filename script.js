/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = s.length;
  let result = 0;
  let startCounting = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      startCounting = true;
      result++;
    } else if (s[i] === " " && startCounting) {
      break;
    }
    length--;
  }
  return result;
};

console.log(lengthOfLastWord("a"));

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphabetSet = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const string = s.split("");
  const arrayAlphabet = string.filter((ch) => {
    if (alphabetSet.has(ch.toLocaleLowerCase())) {
      return ch;
    }
  });
  let start = 0;
  let end = arrayAlphabet.length - 1;
  while (start <= end) {
    if (start === end) {
      return true;
    }
    if (
      arrayAlphabet[start].toLocaleLowerCase() !==
      arrayAlphabet[end].toLocaleLowerCase()
    ) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

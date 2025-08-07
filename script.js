/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let lastNum = romanObj[s[s.length - 1]];
  for (let i = s.length - 1; i >= 0; i--) {
    let currentNum = romanObj[s[i]];
    if (currentNum >= lastNum) {
      result += currentNum;
    } else {
      result -= currentNum;
    }

    lastNum = romanObj[s[i]];
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));

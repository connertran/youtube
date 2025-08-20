/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const strimStr = s.trim();
  const strArr = strimStr.split(" ");
  const strArrWithoutSpaces = strArr.filter((item) => {
    return item !== "";
  });
  strArrWithoutSpaces.reverse();
  return strArrWithoutSpaces.join(" ");
};

console.log(reverseWords("a good   example"));

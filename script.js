/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineObj = {};
  for (let ch of magazine) {
    if (magazineObj[ch] !== undefined) {
      magazineObj[ch]++;
    } else {
      magazineObj[ch] = 1;
    }
  }

  for (let ch of ransomNote) {
    if (magazineObj[ch] !== undefined && magazineObj[ch] > 0) {
      magazineObj[ch]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("aa", "aabbcs"));

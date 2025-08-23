/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  const existenceSet = new Set(nums);
  let best = 1;
  for (let num of existenceSet) {
    if (!existenceSet.has(num - 1)) {
      let count = 1;
      while (existenceSet.has(num + 1)) {
        count++;
        num++;
      }
      best < count ? (best = count) : (count = count);
    }
  }
  return best;
};

console.log(longestConsecutive([1, 0, 1, 2]));

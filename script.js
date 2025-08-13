/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let lastNum;
  let k = 0;
  let index = 0;
  while (index < nums.length) {
    const currentNum = nums[index];
    if (lastNum === currentNum) {
      console.log("If: " + lastNum, currentNum);
      nums.splice(index, 1);
      console.log("nums: " + nums);
    } else {
      console.log("Else: " + lastNum, currentNum);
      k++;
      index++;
      lastNum = currentNum;
    }
  }
  return k, nums;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));

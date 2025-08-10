/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftRight = {};
  const rightLeft = {};
  let leftValue = 1;
  let rightValue = 1;
  for (let i = 0; i < nums.length; i++) {
    leftValue = leftValue * nums[i];
    leftRight[i] = leftValue;

    rightValue = rightValue * nums[nums.length - 1 - i];
    rightLeft[nums.length - 1 - i] = rightValue;
  }
  console.log(leftRight);
  console.log(rightLeft);
  for (let i = 0; i < nums.length; i++) {
    let leftProduct = 1;
    let rightProduct = 1;
    if (leftRight[i - 1] !== undefined) leftProduct = leftRight[i - 1];
    if (rightLeft[i + 1] !== undefined) rightProduct = rightLeft[i + 1];
    nums[i] = leftProduct * rightProduct;
  }

  return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]));

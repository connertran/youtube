function searchRange(nums, target) {
  if (nums.length === 0) return [-1, -1];

  let lo = 0;
  let hi = nums.length - 1;
  let found = -1;

  // binary search for any occurrence
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      found = mid;
      break;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (found === -1) return [-1, -1];

  // expand to both sides
  let left = found;
  let right = found;

  while (left - 1 >= 0 && nums[left - 1] === target) left--;
  while (right + 1 < nums.length && nums[right + 1] === target) right++;

  return [left, right];
}

// quick checks
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]

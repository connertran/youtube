var findPeakElement = function (nums) {
  let lo = 0,
    hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    // If the slope goes up to the right, a peak exists on the right side
    if (nums[mid] < nums[mid + 1]) {
      lo = mid + 1;
    } else {
      // Slope goes down or flat to the right, a peak exists at mid or to the left
      hi = mid;
    }
  }
  return lo; // or hi, they are equal
};

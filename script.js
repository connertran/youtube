var rotate = function (nums, k) {
  const n = nums.length;
  if (n === 0) return;
  k %= n;
  if (k === 0) return;

  let moved = 0;
  for (let start = 0; moved < n; start++) {
    let current = start;
    let prev = nums[start];

    do {
      const next = (current + k) % n;
      [nums[next], prev] = [prev, nums[next]];
      current = next;
      moved++;
    } while (current !== start);
  }
};

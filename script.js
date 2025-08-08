/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let best = 0;

  while (start < end) {
    let firstColumn = height[start];
    let lastColumn = height[end];
    let current = 0;

    if (firstColumn >= lastColumn) {
      current = lastColumn * (end - start);
      best < current ? (best = current) : (best = best);
      end--;
    } else if (firstColumn < lastColumn) {
      current = firstColumn * (end - start);
      best < current ? (best = current) : (best = best);
      start++;
    }
  }

  return best;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

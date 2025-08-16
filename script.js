/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function powFunc(x, n) {
  if (n === 0) return 1;
  const half = powFunc(x, Math.floor(n / 2));
  const sqr = half * half;
  return n % 2 === 0 ? sqr : sqr * x;
}

var myPow = function (x, n) {
  if (n > 0) {
    return powFunc(x, n);
  } else if (n === 0) {
    return 1;
  } else {
    const positiveN = -n;
    const denominator = powFunc(x, positiveN);
    return 1 / denominator;
  }
};

console.log(myPow(2.0, -200000000));

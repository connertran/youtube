/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let best = "";
  if (s.length === 0) return best;

  best = s[0];

  let current = "";

  for (let i = 0; i < s.length; i++) {
    let position = 1;
    let frontletter = s[i - position];
    let backletter = s[i + position];
    let backletterDouble = s[i + position + 1];

    if (s[i] === backletter) {
      current = s[i] + backletter;
      current.length > best.length ? (best = current) : (best = best);
      while (frontletter && backletterDouble) {
        console.log(`double: ${frontletter} & ${backletterDouble}`);
        if (frontletter === backletter) {
          current = frontletter + current + backletterDouble;
          current.length > best.length ? (best = current) : (best = best);
          position++;
        } else {
          break;
        }
      }
    } else {
      current = s[i];
      while (frontletter && backletter) {
        console.log(`single: ${frontletter} & ${backletter}`);
        if (frontletter === backletter) {
          current = frontletter + current + backletter;
          current.length > best.length ? (best = current) : (best = best);
          position++;
        } else {
          break;
        }
      }
    }
  }
  return best;
};

console.log(longestPalindrome("babad"));

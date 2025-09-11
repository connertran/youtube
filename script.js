var merge = function (intervals) {
  const arrayObj = {};

  for (let array of intervals) {
    if (arrayObj[array[0]] === undefined) {
      arrayObj[array[0]] = array;
    } else {
      if (arrayObj[array[0]][1] < array[1]) {
        arrayObj[array[0]] = [array[0], array[1]];
      }
    }
  }

  // be explicit about numeric ordering
  const keys = Object.keys(arrayObj)
    .map(Number)
    .sort((a, b) => a - b);

  let mergingArr = [];
  let maxEndValue;
  const result = [];

  for (let i = 0; i < keys.length; i++) {
    const arr = arrayObj[keys[i]];

    if (mergingArr.length === 0) {
      mergingArr.push(arr[0]);
      maxEndValue = arr[1];
    } else {
      if (arr[0] <= maxEndValue) {
        // bug 2 fix: keep the farthest end
        maxEndValue = Math.max(maxEndValue, arr[1]);
      } else {
        mergingArr.push(maxEndValue);
        result.push(mergingArr);
        mergingArr = [arr[0]];
        maxEndValue = arr[1];
      }
    }
  }

  // bug 1 fix: flush the last interval
  if (mergingArr.length) {
    mergingArr.push(maxEndValue);
    result.push(mergingArr);
  }

  return result;
};

const intervals = [
  [4, 7],
  [1, 4],
];

console.log(merge(intervals));

var spiralOrder = function (matrix) {
  let right = true;
  let down = false;
  let left = false;
  let up = false;
  const result = [];

  while (matrix.length > 0) {
    if (right) {
      for (let i = 0; i < matrix[0].length; i++) {
        result.push(matrix[0][i]);
      }
      matrix.shift();
      right = false;
      down = true;
    } else if (down) {
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > 0) {
          result.push(matrix[i][matrix[i].length - 1]);
          matrix[i].pop();
        }
      }
      down = false;
      left = true;
    } else if (left) {
      const lastRow = matrix[matrix.length - 1];

      const n = lastRow.length;
      for (let i = 0; i < n; i++) {
        result.push(lastRow.pop());
      }

      matrix.pop();
      left = false;
      up = true;
    } else if (up) {
      for (let i = matrix.length - 1; i >= 0; i--) {
        if (matrix[i].length > 0) {
          result.push(matrix[i].shift());
        }
      }

      matrix = matrix.filter((row) => row.length > 0);
      up = false;
      right = true;
    }
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

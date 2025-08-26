/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  let sum = 0;
  function recursion(node) {
    if (node === null) return false;

    sum += node.val;
    if (node.left === null && node.right === null) {
      if (sum === targetSum) {
        sum -= node.val;
        return true;
      }
      sum -= node.val;
      return false;
    }

    const hasLeft = recursion(node.left);
    const hasRight = recursion(node.right);

    sum -= node.val;

    return hasLeft || hasRight;
  }

  return recursion(root) === true;
};

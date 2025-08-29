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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return true;
  }
  const nodeArr = [];
  function recursion(node) {
    if (node === null) {
      return;
    }

    recursion(node.left);
    nodeArr.push(node.val);
    recursion(node.right);
  }
  recursion(root);

  let prev = -Infinity;
  for (let i = 0; i < nodeArr.length; i++) {
    const current = nodeArr[i];
    if (prev >= current) {
      return false;
    }
    prev = current;
  }
  return true;
};

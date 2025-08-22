/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function treeToArray(root) {
  if (root === null) return [];

  const result = [];

  function dfs(node) {
    if (node === null) {
      result.push(null);
      return;
    }
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;

  const pArray = treeToArray(p);
  const qArray = treeToArray(q);

  return JSON.stringify(pArray) === JSON.stringify(qArray) ? true : false;
};

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function treeToArray(root, side) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr !== null) {
      if (side === "left") {
        queue.push(curr.left);
        queue.push(curr.right);
      } else {
        queue.push(curr.right);
        queue.push(curr.left);
      }
    }
    if (curr !== null) {
      result.push(curr.val);
    } else {
      result.push(curr);
    }
  }
  return result;
}
var isSymmetric = function (root) {
  if (root === null) return null;
  if (root.left === null && root.right === null) return true;
  if (root.left === null || root.right === null) return false;

  const leftArray = treeToArray(root.left, "left");
  const rightArray = treeToArray(root.right, "right");

  if (leftArray.length !== rightArray.length) return false;

  for (let i = 0; i < leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
};

// Left subtree
const leftNode3_b = new TreeNode(3);
const leftNode2_b = new TreeNode(2, null, leftNode3_b);

// Right subtree
const rightNode3_b = new TreeNode(3);
const rightNode2_b = new TreeNode(2, null, rightNode3_b);

// Root
const root2 = new TreeNode(1, leftNode2_b, rightNode2_b);

console.log(isSymmetric(root2));

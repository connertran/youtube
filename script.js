class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

class Tree {
  constructor(root) {
    this.root = root;
  }
  BFS() {
    if (this.root === null) return [];

    const resultArr = [];
    const queue = [this.root];
    while (queue.length > 0) {
      const nodeFromQueue = queue.shift();
      resultArr.push(nodeFromQueue.value);
      if (nodeFromQueue.left) {
        queue.push(nodeFromQueue.left);
      }
      if (nodeFromQueue.right) {
        queue.push(nodeFromQueue.right);
      }
    }
    return resultArr;
  }

  DFSrecursive() {
    if (this.root === null) return [];
    const resultArr = [];

    function recursion(node) {
      if (node === null) {
        return;
      }
      resultArr.push(node.value);
      recursion(node.left);
      recursion(node.right);
    }

    recursion(this.root);
    return resultArr;
  }

  DFS() {
    if (this.root === null) return [];
    const resultArr = [];
    const stack = [this.root];
    while (stack.length > 0) {
      const nodeFromQueue = stack.pop();
      resultArr.push(nodeFromQueue.value);
      if (nodeFromQueue.right) {
        stack.push(nodeFromQueue.right);
      }
      if (nodeFromQueue.left) {
        stack.push(nodeFromQueue.left);
      }
    }
    return resultArr;
  }
}

const newTree = new Tree(root);
console.log(newTree.BFS());
console.log(newTree.DFSrecursive());
console.log(newTree.DFS());

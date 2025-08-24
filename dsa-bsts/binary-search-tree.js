class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // meaning there is the duplicate;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      function recursiveInsert(currentNode, val) {
        if (currentNode.val < val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          }
          recursiveInsert(currentNode.right, val);
        } else if (currentNode.val > val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          }
          recursiveInsert(currentNode.left, val);
        } else {
          return;
        }
      }
      recursiveInsert(currentNode, val);
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {}

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {}

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

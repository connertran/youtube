/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0) {
    return head;
  }
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  const linkedListStack = [];
  let currentNode = head;
  while (currentNode) {
    linkedListStack.push(currentNode);
    if (currentNode.next !== null) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
  let result = head;
  let rotate = k % linkedListStack.length;
  while (rotate > 0) {
    const lastNode = linkedListStack.pop();
    linkedListStack[linkedListStack.length - 1].next = null;
    lastNode.next = result;
    result = lastNode;
    linkedListStack.unshift(lastNode);
    rotate--;
  }
  return result;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function linkedListObj(node) {
  if (node === null) return {};
  const result = {};
  while (node) {
    result[node.val] = node;
    node = node.next;
  }
  return result;
}
var sortList = function (head) {
  if (head === null) return null;
  const nodesObj = linkedListObj(head);
  const arrayOfKeys = Object.keys(nodesObj);
  const arrayOfKeysInt = arrayOfKeys.map((each) => Number(each));
  const sortedArray = arrayOfKeysInt.sort((a, b) => a - b);

  const resultHead = nodesObj[sortedArray[0]];
  let curr = resultHead;
  curr.next = null;
  for (let i = 1; i < arrayOfKeys.length; i++) {
    const nextNode = nodesObj[sortedArray[i]];
    curr.next = nextNode;
    curr = nextNode;
    curr.next = null;
  }
  return resultHead;
};

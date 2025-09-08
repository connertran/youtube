# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1, list2):
        if list1 == None and list2 == None:
            return None
        
        if list1 == None:
            return list2
        
        if list2 == None:
            return list1
        
        #merge
        head1 = list1 #the node not the value
        head2 = list2
        result = None
        current = None
        if head1.val>head2.val:
            result = head2
            current = result
            head2 = head2.next
        else:
            result = head1
            current = result
            head1 = head1.next

        while head1 and head2:
            if head1.val>head2.val:
                current.next = head2
                current = current.next
                head2 = head2.next
            else:
                current.next = head1
                current = current.next
                head1 = head1.next

        while head1:
            current.next = head1
            current = current.next
            head1 = head1.next


        while head2:
            current.next = head2
            current = current.next
            head2 = head2.next
            
        return result
    

# Linked list 1: 1 -> 2 -> 4
l1 = ListNode(1)
l1.next = ListNode(2)
l1.next.next = ListNode(4)

# Linked list 2: 1 -> 3 -> 4
l2 = ListNode(1)
l2.next = ListNode(3)
l2.next.next = ListNode(4)

def printResult(linkedList):
    while linkedList:
        print(linkedList.val)
        linkedList = linkedList.next

answer = Solution().mergeTwoLists(l1,l2)
printResult(answer)

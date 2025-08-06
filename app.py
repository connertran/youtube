class Node:
    def __init__(self, data):
        self.data = data  # Store the data
        self.next = None  # Pointer to the next node


class LinkedList:
    def __init__(self):
        self.head = None  # Start with an empty list

    def insert_at_beginning(self, data):
        new_node = Node(data)  # Create a new node
        new_node.next = self.head  # Link new node to current head
        self.head = new_node  # Update head to new node

    def delete_at_beginning(self):
        if self.head is None:
            print("List is already empty.")
            return
        self.head = self.head.next  # Move head to the next node

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# Testing the deletion function
ll = LinkedList()
ll.insert_at_beginning(30)
ll.insert_at_beginning(20)
ll.insert_at_beginning(10)

print("Before deletion:")
ll.print_list()  # Output: 10 -> 20 -> 30 -> None

ll.delete_at_beginning()

print("After deletion:")
ll.print_list()  # Output: 20 -> 30 -> None

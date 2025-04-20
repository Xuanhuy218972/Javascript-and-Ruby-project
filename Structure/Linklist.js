function Node(value) {
    this.value = value; // Value of the node
    this.next = null; // Pointer to the next node       
}
function LinkedList() {
    this.head = null; // Head of the list
    this.tail = null; // Tail of the list
    this.length = 0; // Length of the list
}
LinkedList.prototype.add = function(value) {
    const newNode = new Node(value); // Create a new node
    if (!this.head) { // If the list is empty
        this.head = newNode; // Set head to the new node
        this.tail = newNode; // Set tail to the new node
    } else { // If the list is not empty
        this.tail.next = newNode; // Link the last node to the new node
        this.tail = newNode; // Update the tail to the new node
    }
    this.length++; // Increment the length of the list
}
LinkedList.prototype.remove = function(value) {
    if (!this.head) { // If the list is empty
        return false; // Nothing to remove
    }
    if (this.head.value === value) { // If the head is the node to remove
        this.head = this.head.next; // Update head to the next node
        this.length--; // Decrement the length of the list
        return true; // Node removed successfully
    }
    let currentNode = this.head; // Start from the head
    while (currentNode.next) { // Traverse the list
        if (currentNode.next.value === value) { // If the next node is the one to remove
            currentNode.next = currentNode.next.next; // Link to the next node
            this.length--; // Decrement the length of the list
            return true; // Node removed successfully
        }
        currentNode = currentNode.next; // Move to the next node
    }
    return false; // Node not found in the list
}
LinkedList.prototype.display = function() {
    let currentNode = this.head; // Start from the head
    let result = []; // Array to store the values
    while (currentNode) { // Traverse the list
        result.push(currentNode.value); // Add the value to the array
        currentNode = currentNode.next; // Move to the next node
    }
    return result; // Return the array of values
}
LinkedList.prototype.size = function() {
    return this.length; // Return the length of the list
}
LinkedList.prototype.isEmpty = function() {
    return this.length === 0; // Return true if the list is empty
}
LinkedList.prototype.clear = function() {
    this.head = null; // Set head to null
    this.tail = null; // Set tail to null
    this.length = 0; // Set length to 0
}
LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) { // Check for valid index
        return null; // Invalid index
    }
    let currentNode = this.head; // Start from the head
    for (let i = 0; i < index; i++) { // Traverse to the index
        currentNode = currentNode.next; // Move to the next node
    }
    return currentNode.value; // Return the value at the index
}
LinkedList.prototype.set = function(index, value) {
    if (index < 0 || index >= this.length) { // Check for valid index
        return false; // Invalid index
    }
    let currentNode = this.head; // Start from the head
    for (let i = 0; i < index; i++) { // Traverse to the index
        currentNode = currentNode.next; // Move to the next node
    }
    currentNode.value = value; // Set the value at the index
    return true; // Value set successfully
}
const list = new LinkedList(); // Create a new linked list
list.add(1); // Add 1 to the list
list.add(2); // Add 2 to the list
list.add(3); // Add 3 to the list
console.log(list.display()); // [1, 2, 3]
list.reverse(); // Reverse the list
console.log(list.display()); // [3, 2, 1]


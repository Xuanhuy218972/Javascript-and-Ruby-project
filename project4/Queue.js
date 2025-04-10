function queue() {
  const items = [];
  return {
    enqueue: function (element) {
      items.push(element); // adds to back
    },
    dequeue: function () {
      if (items.length === 0) {
        return undefined; // returns undefined if empty
      }
      return items.shift(); // removes front
    },
    peek: function () {
      if (items.length === 0) {
        return undefined; // returns undefined if empty
      }
      return items[0]; // returns front without removing it
    },
    size: function () {
      return items.length; // returns number of elements
    },
    clear: function () {
      items.length = 0; // clears the queue
    },
    isEmpty: function () {
      return items.length === 0; // checks if empty
    },
    getItems: function () {
      return [...items]; // returns a copy of items
    },
  };

}
console.log("start queue data structure demo");
const q = queue(); // Creates new queue
console.log("q data type: " + typeof(q)); // Outputs: object
console.log("q items: " + q.getItems()); // Initially: []
console.log("enqueue 5 to q");  // Add 5
q.enqueue(5);           
console.log("q items: " + q.getItems()); // Outputs: [5]
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);   
q.enqueue(2);
q.enqueue(1);
console.log("q items: " + q.getItems()); // Outputs: [5, 5, 4, 3, 2, 1]
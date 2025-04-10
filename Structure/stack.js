function createStack() {
    const items = [];

    return {
        push: function(element) {
            items.push(element); // adds to top
        },
        pop: function() {
            if (items.length === 0) {
                return undefined; // returns undefined if empty
            }
            return items.pop(); // removes top
        },
        peek: function() {
            if (items.length === 0) {
                return undefined; // returns undefined if empty
            }
            return items[items.length - 1]; // returns top without removing it
        },
        size:  function() {
            return items.length; // returns number of elements
        },
        clear: function() {
            items.length = 0; // clears the stack
        },
        isEmpty: function() {
            return items.length === 0; // checks if empty
        },
        getItems: function() {
            return [...items]; // returns a copy of items
        }
    };
}
console.log("start stack data structure demo");

const stk = createStack();  // Creates new stack
console.log("stk data type: " + typeof(stk)); // Outputs: object

console.log("stk items: " + stk.getItems()); // Initially: []

console.log("push 5 to stk");
stk.push(5); // Add 5

console.log("stk items: " + stk.getItems()); // Outputs: [5]
stk.push(5);
stk.push(4);
stk.push(3);
stk.push(2);
stk.push(1);
console.log("stk items: " + stk.getItems()); // Outputs: [5, 5, 4, 3, 2, 1]
const fs = require('fs');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
}

const inputFile = process.argv[2];
if (!inputFile) {
    console.error('Vui lòng cung cấp đường dẫn file đầu vào.');
    process.exit(1);
}

const numbers = parseNumbersFromFile(inputFile);
if (numbers.size === 0) {
    console.error('File không chứa số hợp lệ. Vui lòng kiểm tra lại!');
    process.exit(1);
}

const sortedAscending = new LinkedList();
const sortedDescending = new LinkedList();

let current = numbers.head;
while (current) {
    sortedAscending.push(current.value);
    sortedDescending.push(current.value);
    current = current.next;
}

sortedAscending.selectionSort();
sortedDescending.selectionSort();
sortedDescending.reverse();

console.log(sortedAscending.toString());
console.log(sortedDescending.toString());

function parseNumbersFromFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error("File \"" + filePath + "\" không tồn tại");
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    content.split('\n')
        .map(line => line.trim())
        .filter(line => line !== '' && !isNaN(line))
        .map(Number)
        .forEach(num => linkedList.push(num));
    
    return linkedList;
}
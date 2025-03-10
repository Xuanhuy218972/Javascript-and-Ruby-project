const fs = require('fs');

const inputFile = process.argv[2];
if (!inputFile) {
    console.error('Vui lòng cung cấp đường dẫn file đầu vào.');
    process.exit(1);
}

const numbers = parseNumbersFromFile(inputFile);
if (numbers.length === 0) {
    console.error('File không chứa số hợp lệ. Vui lòng kiểm tra lại!');
    process.exit(1);
}

const sortedAscending = insertionSort([...numbers]);
const sortedDescending = insertionSort([...numbers],).reverse();

function parseNumbersFromFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error("File \"" + filePath + "\" không tồn tại");
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n')
        .map(line => line.trim())
        .filter(line => line !== '' && !isNaN(line))
        .map(Number);
}

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {   //i = 1   2
        let key = arr[i];   // key = 2    1
        let j = i - 1;     // j = 0      1

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];     // 3 3 1   2 3 3  2 2 3
            j--;
        }
        arr[j + 1] = key; // 2 3 1  1 2 3
    }
    return arr;
}

console.log(sortedAscending.join(", "));
console.log(sortedDescending.join(", "));

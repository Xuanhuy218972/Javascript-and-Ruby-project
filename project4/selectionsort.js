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

const sortedAscending = selectionSort([...numbers]);
const sortedDescending = selectionSort([...numbers],).reverse();

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

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {          
        let minIndex = i;                  //0
        for (let j = i + 1; j < n; j++) { // j = 1 // j = 2
            if (arr[j] < arr[minIndex]) {  // 2 < 3 // 1 < 2
                minIndex = j;               // 1 // 2
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(sortedAscending.join(", "));
console.log(sortedDescending.join(", "));


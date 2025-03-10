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

const sortedAscending = bubbleSort([...numbers]);
const sortedDescending = bubbleSort([...numbers],).reverse();

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

function bubbleSort(arr) {
    let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j  < n - 1 - i; j++) {
                if (arr[j]  > arr[j + 1]) {
                    // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    let x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
            }
        }
        return arr;
    }
            //         if (arr[i] > arr[i + 1]) {
            //             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            //         }
            //     }
            //     n--;
            // } while (n != 0);
            // return arr;

console.log(sortedAscending.join(", "));
console.log(sortedDescending.join(", "));

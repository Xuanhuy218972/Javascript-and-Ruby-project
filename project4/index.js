document.getElementById('fileInput').addEventListener('change', handleFileSelection);

function handleFileSelection(event) {
    const file = event.target.files[0];

    const reader = new FileReader(); 

    reader.onload = function (event) {
        const fileContent = event.target.result; 
       
        const numbers = parseNumbersFromFile(fileContent);

        if (numbers.length === 0) {
            alert("File chứa số không hợp lệ.Vui lòng chọn lại!");
            return;
        }

        const sortedAscending = sortNumbersAscending(numbers);
        displayNumbers(sortedAscending, 'ascending');
        
        const sortedDescending = sortNumbersDescending(numbers);
        displayNumbers(sortedDescending, 'descending');
    };

    reader.readAsText(file); 
}


function parseNumbersFromFile(content) {
    const arr = content.split('\n'); 
    return arr.map(function(item){return item.trim()})
        .filter(item => item !== '' && !isNaN(item))
        .map(Number); 
}

function sortNumbersAscending(numbers) {
    return [...numbers].sort((a, b) => a - b);
   
}

function sortNumbersDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
    
}

function displayNumbers(numbers, elementId) {
    const outputElement = document.getElementById(elementId);
    if (outputElement) {
        outputElement.textContent = numbers.join('\n'); 
    }
}

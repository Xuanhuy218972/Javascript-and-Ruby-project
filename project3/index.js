let display = document.getElementById('display');
let NewCalculation = false;

function addNumber(number) {
  if (NewCalculation || display.value === 'Error') {
    display.value = number;
    NewCalculation = false;
  } else {
    display.value += number;
  }
}

function addOperator(operator) {
  if (display.value === 'Error') {
    display.value = '';
  }
  display.value += operator;
  NewCalculation = false;
}

function clearDisplay() {
  display.value = '';
  NewCalculation = false;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    NewCalculation = true; 
  } catch (error) {
    display.value = 'Error';
    NewCalculation = true;
  }
}
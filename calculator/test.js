const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function operate(operator) {
  const currentValue = display.value;
  const lastChar = currentValue.charAt(currentValue.length - 1);

  // Check if the last character is an operator, and replace it with the new operator
  if ('+-*/'.includes(lastChar)) {
    display.value = currentValue.slice(0, -1) + operator;
  } else {
    appendToDisplay(operator);
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
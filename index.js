// Simple calculator application for testing CodeRabbit

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // Potential issue: no check for division by zero
  return a / b;
}

function calculateArea(length, width) {
  // This function could use better input validation
  return length * width;
}

// Example usage
console.log('Addition: 5 + 3 =', add(5, 3));
console.log('Subtraction: 10 - 4 =', subtract(10, 4));
console.log('Multiplication: 6 * 7 =', multiply(6, 7));
console.log('Division: 20 / 4 =', divide(20, 4));
console.log('Area: 5 x 10 =', calculateArea(5, 10));

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculateArea
};

// Simple test file for the calculator functions

const calculator = require('./index.js');

function runTests() {
  let passed = 0;
  let failed = 0;

  // Helper function to run individual tests
  function runTest(name, actual, expected) {
    if (actual === expected) {
      console.log(`✓ ${name} test passed`);
      passed++;
    } else {
      console.log(`✗ ${name} test failed: expected ${expected}, got ${actual}`);
      failed++;
    }
  }

  // Test addition
  runTest('Addition', calculator.add(2, 3), 5);

  // Test subtraction
  runTest('Subtraction', calculator.subtract(10, 4), 6);

  // Test multiplication
  runTest('Multiplication', calculator.multiply(3, 4), 12);

  // Test division
  runTest('Division', calculator.divide(20, 4), 5);

  // Test area calculation
  runTest('Area calculation', calculator.calculateArea(5, 10), 50);

  // Test division by zero error handling
  try {
    calculator.divide(10, 0);
    console.log('✗ Division by zero test failed: expected error to be thrown');
    failed++;
  } catch (error) {
    if (error.message === 'Cannot divide by zero') {
      console.log('✓ Division by zero test passed');
      passed++;
    } else {
      console.log('✗ Division by zero test failed: unexpected error message');
      failed++;
    }
  }

  // Test negative area input validation
  try {
    calculator.calculateArea(-5, 10);
    console.log('✗ Negative area input test failed: expected error to be thrown');
    failed++;
  } catch (error) {
    if (error.message === 'Length and width must be positive numbers') {
      console.log('✓ Negative area input test passed');
      passed++;
    } else {
      console.log('✗ Negative area input test failed: unexpected error message');
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();

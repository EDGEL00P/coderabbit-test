// Simple test file for the calculator functions

const calculator = require('./index.js');

function runTests() {
  let passed = 0;
  let failed = 0;

  // Test addition
  if (calculator.add(2, 3) === 5) {
    console.log('✓ Addition test passed');
    passed++;
  } else {
    console.log('✗ Addition test failed');
    failed++;
  }

  // Test subtraction
  if (calculator.subtract(10, 4) === 6) {
    console.log('✓ Subtraction test passed');
    passed++;
  } else {
    console.log('✗ Subtraction test failed');
    failed++;
  }

  // Test multiplication
  if (calculator.multiply(3, 4) === 12) {
    console.log('✓ Multiplication test passed');
    passed++;
  } else {
    console.log('✗ Multiplication test failed');
    failed++;
  }

  // Test division
  if (calculator.divide(20, 4) === 5) {
    console.log('✓ Division test passed');
    passed++;
  } else {
    console.log('✗ Division test failed');
    failed++;
  }

  // Test area calculation
  if (calculator.calculateArea(5, 10) === 50) {
    console.log('✓ Area calculation test passed');
    passed++;
  } else {
    console.log('✗ Area calculation test failed');
    failed++;
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();

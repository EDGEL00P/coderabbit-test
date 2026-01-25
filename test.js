/**
 * Simple test suite for coderabbit-test
 */

const { greet, add, multiply } = require('./index.js');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${description}`);
    console.log(`  ${error.message}`);
    failed++;
  }
}

/**
 * Assert that two values are equal (strict equality for primitives)
 * Note: This uses strict equality (===) and is suitable for primitive values only
 */
function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

// Test cases
test('greet should return greeting message', () => {
  const result = greet('World');
  assertEquals(result, 'Hello, World!');
});

test('greet should handle empty string', () => {
  const result = greet('');
  assertEquals(result, 'Hello, !');
});

test('add should return sum of two numbers', () => {
  assertEquals(add(2, 3), 5);
  assertEquals(add(-1, 1), 0);
  assertEquals(add(0, 0), 0);
});

test('multiply should return product of two numbers', () => {
  assertEquals(multiply(2, 3), 6);
  assertEquals(multiply(-2, 3), -6);
  assertEquals(multiply(0, 5), 0);
});

// Print summary
console.log('\n' + '='.repeat(40));
console.log(`Tests: ${passed} passed, ${failed} failed`);
console.log('='.repeat(40));

if (failed > 0) {
  process.exit(1);
}

//Basic Assertion Example
const assert = require('assert').strict;

// Function to test
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  return a + b;
}
// Test cases
assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
// Test error case
assert.throws(
  () => add('2', 3),
  TypeError,
  'Should throw TypeError for non-number input'
);
console.log('All tests passed!');

//assert(value[, message])
const assert = require('assert');

// This will pass
assert(true);
assert(1);
assert('string');
assert({});

try {
  // This will throw an AssertionError
  assert(false, 'This value is not truthy');
} catch (err) {
  console.error(`Error: ${err.message}`);
}

try {
  // These will also throw errors
  assert(0);
  assert('');
  assert(null);
  assert(undefined);
} catch (err) {
  console.error(`Error: ${err.message}`);
}
//assert.ok(value[, message])
const assert = require('assert');

// These assertions are equivalent
assert.ok(true, 'This value is truthy');
assert(true, 'This value is truthy');
//Value comparison
const assert = require('assert');

// These will pass (coercive equality)
assert.equal(1, 1);
assert.equal('1', 1); // String is coerced to number
assert.equal(true, 1); // Boolean is coerced to number

try {
  // This will throw an error
  assert.equal(1, 2, '1 is not equal to 2');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
//assert.strictEqual(actual, expected[, message])
const assert = require('assert');

// This will pass
assert.strictEqual(1, 1);

try {
  // These will throw errors (strict equality)
  assert.strictEqual('1', 1, 'String "1" is not strictly equal to number 1');
  assert.strictEqual(true, 1, 'true is not strictly equal to 1');
} catch (err) {
  console.error(`Error: ${err.message}`);
}

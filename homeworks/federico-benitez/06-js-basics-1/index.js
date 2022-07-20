/**
 * Exercise 1 - Opposite number
 * http://www.codewars.com/kata/opposite-number
 */

function opposite(number) {
  return number * -1;
}

/**
 * Exercise 2 - Basic Mathematical Operations
 * http://www.codewars.com/kata/basic-mathematical-operations
 */

function basicOp(operation, a, b) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      throw new Error(`Operator ${operation} not implemented `);
  }
}

/**
 * Exercise 3 - Printing Array elements with Comma delimiters
 * https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 */

function printArray(array) {
  return array.join(',');
}

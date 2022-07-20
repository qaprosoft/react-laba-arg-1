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

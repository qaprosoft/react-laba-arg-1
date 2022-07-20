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

/**
 * Exercise 4 - Transportation on vacation
 * https://www.codewars.com/kata/transportation-on-vacation
 */

function rentalCarCost(days) {
  const COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  let price = days * COST_PER_DAY;

  if (days >= 3 && days < 7) price -= SMALL_DISCOUNT;

  if (days >= 7) price -= BIG_DISCOUNT;

  return price;
}

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

/**
 * Exercise 5 - Calculating with functions
 * http://www.codewars.com/kata/calculating-with-functions
 */

function zero(operation) {
  return getResult(operation, 0);
}
function one(operation) {
  return getResult(operation, 1);
}
function two(operation) {
  return getResult(operation, 2);
}
function three(operation) {
  return getResult(operation, 3);
}
function four(operation) {
  return getResult(operation, 4);
}

function five(operation) {
  return getResult(operation, 5);
}

function six(operation) {
  return getResult(operation, 6);
}

function seven(operation) {
  return getResult(operation, 7);
}

function eight(operation) {
  return getResult(operation, 8);
}
function nine(operation) {
  return getResult(operation, 9);
}

function plus(value) {
  return value;
}
function minus(value) {
  return value * -1;
}
function times(value) {
  return [...Array(value)].map(() => value);
}
function dividedBy(value) {
  return times(value).map((n) => n * -1);
}

function getResult(operation, VALUE) {
  if (!operation) return VALUE;

  if (Array.isArray(operation)) {
    if (operation[0] < 0) {
      return divide(operation, VALUE);
    }
    return multiply(operation, VALUE);
  } else {
    return VALUE + operation;
  }
}

function divide(array, initial) {
  let result = 0;
  let operator = initial;

  while (operator > array[0]) {
    if (operator < array[0] * -1) break;
    operator = operator + array[0];
    result++;
  }
  return result;
}

function multiply(array, value) {
  return value * array.length;
}

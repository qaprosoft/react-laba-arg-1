// katas 1 https://www.codewars.com/kata/opposite-number
function oppositeNumber(number) {
  return number * -1;
}

// katas 2 https://www.codewars.com/kata/opposite-number
function mathematicOperation(sign, number1, number2) {
  return eval(number1 + sign + number2);
}

// katas 3 https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function joinElements(array) {
  return array.join();
}

// katas 4 https://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(days) {
  const RENT_PER_DAY = 40;
  const MAX_DISCOUNT = 50;
  const MIN_DISCOUNT = 20;
  const MIN_DAYS = 3;
  const MAX_DAYS = 7;
  let cost = days * RENT_PER_DAY;

  if (days >= MIN_DAYS && days < MAX_DAYS) {
    cost -= MIN_DISCOUNT;
  } else if (days >= MAX_DAYS) {
    cost -= MAX_DISCOUNT;
  }

  return cost;
}

// katas 5 https://www.codewars.com/kata/calculating-with-functions
function zero(params) {
  const NUMBER = 0;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function one(params) {
  const NUMBER = 1;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function two(params) {
  const NUMBER = 2;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function three(params) {
  const NUMBER = "3";
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function four(params) {
  const NUMBER = 4;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function five(params) {
  const NUMBER = 5;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function six(params) {
  const NUMBER = 6;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function seven(params) {
  const NUMBER = 7;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function eight(params) {
  const NUMBER = 8;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}
function nine(params) {
  const NUMBER = 9;
  let numberData;

  typeof params === "string"
    ? (numberData = Math.floor(eval(NUMBER + params)))
    : (numberData = NUMBER);

  return numberData;
}

function plus(number) {
  return `+ ${number}`;
}
function minus(number) {
  return `- ${number}`;
}
function times(number) {
  return `* ${number}`;
}
function dividedBy(number) {
  return `/ ${number}`;
}

// katas 6 https://www.codewars.com/kata/partition-on
function getMiddle(word) {
  let wordLength = word.length;
  let itsEven = wordLength % 2 === 0;
  let startingPointIndex = Math.floor((wordLength - 1) / 2);
  let returnChunk;

  if (itsEven) {
    returnChunk = word.slice(startingPointIndex, startingPointIndex + 2);
  } else {
    returnChunk = word.charAt(startingPointIndex);
  }

  return returnChunk;
}

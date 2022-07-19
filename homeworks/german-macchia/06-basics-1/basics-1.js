// katas 1 https://www.codewars.com/kata/opposite-number
function oppositeNumber(number) {
  return number * -1;
}

// katas 2 https://www.codewars.com/kata/basic-mathematical-operations
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

// katas 6 https://www.codewars.com/kata/get-the-middle-character
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

// katas 7  https://www.codewars.com/kata/partition-on
function partitionOn(predicate, arr) {
  let indexOfFalse = 0;

  for (let i = 0; i < arr.length; i++) {
    let evaluation = predicate(arr[i]);
    if (!evaluation) {
      let numberEvaluated = arr.splice(i, 1)[0];
      arr.splice(indexOfFalse, 0, numberEvaluated);
      indexOfFalse++;
    }
  }

  return indexOfFalse;
}

// katas 8 http://www.codewars.com/kata/word-count

/*************** Status Code 404!! ***************/

// katas 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(arr) {
  let oddNumber;
  let i = 0;

  while (i < arr.length) {
    let auxArr = [];
    auxArr = arr.filter((element) => arr[i] === element);
    if (auxArr.length % 2 !== 0) {
      oddNumber = arr[i];
      break;
    }
    i++;
  }

  return oddNumber;
}

// katas 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  const isEven = (number) => number % 2 === 0;
  const isOdd = (number) => number % 2 !== 0;
  const MIN_VALUE = 3;
  let count = 0;
  let i = 0;
  let outlier = null;

  for (let i = 0; i < MIN_VALUE; i++) {
    if (isEven(integers[i])) {
      count++;
    }
  }

  if (count <= 1) {
    while (outlier === null && i < integers.length) {
      if (isEven(integers[i])) {
        outlier = integers[i];
      }
      i++;
    }
  } else {
    while (outlier === null && i < integers.length) {
      if (isOdd(integers[i])) {
        outlier = integers[i];
      }
      i++;
    }
  }

  return outlier;
}

// katas 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  const MIN_LENGTH_INDEX = 0;
  let lengths = [a0.length, a1.length].sort((a, b) => a - b);
  let loops = lengths[MIN_LENGTH_INDEX];
  let arr = [];

  for (let i = 0; i < loops; i++) {
    arr[i] = fn(a0[i], a1[i]);
  }

  return arr;
}

// katas 12 https://www.codewars.com/kata/filter-the-number
// katas 13 https://www.codewars.com/kata/n-th-fibonacci
// katas 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
// katas 15 https://www.codewars.com/kata/duplicate-encoder
// katas 16 https://www.codewars.com/kata/5693239fb761dc8670000001
// katas 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// katas 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// katas 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
// katas 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

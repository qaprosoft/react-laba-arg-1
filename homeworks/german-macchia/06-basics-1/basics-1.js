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
let FilterString = function (value) {
  let number = "";
  let regex = /[0-9]/;

  for (element of value) {
    if (regex.test(element)) {
      number += element;
    }
  }
  return +number;
};

// katas 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  const FIRST_NUM = 0;
  const SECOND_NUM = 1;
  const LAST_INDEX = n - 1;
  let numbers = [FIRST_NUM, SECOND_NUM];

  if (n > 2) {
    for (let i = 1; i < LAST_INDEX; i++) {
      numbers.push(numbers[i - 1] + numbers[i]);
    }
  }

  return numbers[LAST_INDEX];
}

// katas 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  const CAT = "C";
  const MOUSE = "m";
  const COUGHT = "Caught!";
  const ESCAPED = "Escaped!";
  const NO_ANIMALS = "boring without two animals";
  const NOT_FOUND = -1;
  let matrix = map.split("\n");
  let places = [];
  let levels = [];
  let sideMoves, verticalMoves, response;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(CAT) !== NOT_FOUND) {
      places.push(matrix[i].indexOf(CAT));
      levels.push(i);
    }
    if (matrix[i].indexOf(MOUSE) !== NOT_FOUND) {
      places.push(matrix[i].indexOf(MOUSE));
      levels.push(i);
    }
  }

  if (places.length !== 2) {
    response = NO_ANIMALS;
  } else {
    sideMoves = Math.abs(places.reduce((prev, curr) => prev - curr));
    verticalMoves = Math.abs(levels.reduce((prev, curr) => prev - curr));
    sideMoves + verticalMoves <= moves
      ? (response = COUGHT)
      : (response = ESCAPED);
  }

  return response;
}

// katas 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  const ONCE = "(";
  const MORE_THAN_ONCE = ")";
  let newWord = "";
  word = word.toLowerCase();

  for (letter of word) {
    if (word.indexOf(letter) === word.lastIndexOf(letter)) {
      newWord += ONCE;
    } else {
      newWord += MORE_THAN_ONCE;
    }
  }

  return newWord;
}

// katas 16 https://www.codewars.com/kata/5693239fb761dc8670000001

//TO DO

// katas 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  const ASTERIC = "*";
  let spaces = nFloors - 1;
  let arr = [];
  let cantAsteric = 1;

  for (let i = 0; i < nFloors; i++) {
    let base =
      " ".repeat(spaces) + ASTERIC.repeat(cantAsteric + i) + " ".repeat(spaces);
    arr.push(base);
    cantAsteric++;
    spaces--;
  }
  return arr;
}

// katas 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let firstPart = str.substring(i, 0);
    let letter = str[i];
    let lastPart = str.slice(i + 1);

    if (!letter.includes(" ")) {
      let newWord = firstPart + letter.toUpperCase() + lastPart;
      arr.push(newWord);
    }
  }

  return arr;
}

// katas 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  let stringToReturn = "";
  string = string.replace(/\W/g, "");

  for (let i = 0; i < string.length; i++) {
    let wordRange = i + n;

    stringToReturn += string.substring(i, wordRange);
    i = wordRange - 1;

    if (wordRange < string.length) {
      stringToReturn += "\n";
    }
  }
  return stringToReturn;
}

// katas 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  let domain = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
  return domain;
}

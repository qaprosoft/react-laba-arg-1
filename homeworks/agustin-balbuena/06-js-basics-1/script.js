/*
to do -> 11, 13, 14, 15, 16
*/

//1 -> http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return -number;
}

//2 -> http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  else if (operation === '-') return value1 - value2;
  else if (operation === '*') return value1 * value2;
  else if (operation === '/') return value1 / value2;
  else return console.error('operator error');
}

//3 -> http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.toString();
}

//4 -> http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  }
  if (d >= 3) {
    return d * 40 - 20;
  }
  return d * 40;
}

//5 ->  http://www.codewars.com/kata/calculating-with-functions
function zero(func) {
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return Math.floor(a / b);
  };
}

//6 -> http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  const middle = Math.floor(s.length / 2);

  if (s.length % 2 === 0) return s[middle - 1] + s[middle];
  else return s[middle];
}

//7 -> http://www.codewars.com/kata/partition-on
function partitionOn(predicate, arr) {
  let b = -1;
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) continue;

    b++;

    if (b === i) continue;

    let val = arr[i];
    arr.splice(i, 1);
    arr.splice(b, 0, val);
  }
  return b + 1;
}

//8 ->   https://www.codewars.com/kata/570cc83df616a85944001315
function countWords(str) {
  str.trim();
  let wordCounter = 0;
  let lastChar;
  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (i === 0) {
      lastChar = current;
    }

    if (current === ' ' && lastChar !== ' ') {
      wordCounter++;
    }
    if (i === str.length - 1) {
      if (str[str.length - 1] !== ' ') {
        wordCounter++;
      }
    }

    lastChar = current;
  }
  return wordCounter;
}

//9 -> https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    let current = A[i];
    for (let j = 0; j < A.length; j++) {
      if (A[j] == current) counter++;
    }
    if (counter % 2 !== 0) return current;
  }
  return 0;
}

//10 -> https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  let odd = 0;
  let even = 0;
  let outlierEven;
  let outlierOdd;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      outlierEven = integers[i];
      even++;
    } else {
      outlierOdd = integers[i];
      odd++;
    }
  }
  if (even === 1) return outlierEven;
  else return outlierOdd;
}

//11 -> https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  return [];
}

//12 -> https://www.codewars.com/kata/filter-the-number
var FilterString = function (value) {
  let numbers = '';
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value[i])) numbers += value[i];
  }
  return +numbers;
};

//13 -> https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {}

//14 -> https://www.codewars.com/kata/cat-and-mouse-2d-version/

//15 -> https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    debugger;
    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        if (char == word[j]) {
          result += ')';
          break;
        }
      }
    }

    result += '(';
  }
  return result;
}

//16 -> https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {}

//17 -> https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(floors) {
  let space,
    star,
    tower = [];
  for (i = 1; i <= floors; i++) {
    space = ' '.repeat(floors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

//18 -> https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    } else {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return result;
}

//19 -> https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  let newString = string.replace(/\s+/g, '');
  let result = '';
  let counter = 0;
  for (let i = 0; i < newString.length; i++) {
    result += newString[i];

    counter++;

    if (counter === n) {
      if (newString.length - 1 != i) {
        result += '\n';
      }
      counter = 0;
    }
  }
  return result;
}

//20 -> https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  url = url.replace(/(https?:\/\/)?(www.)?/i, '');

  url = url.split('.');

  if (url.indexOf('/') !== -1) {
    return url.split('.')[0];
  }

  return url[0];
}

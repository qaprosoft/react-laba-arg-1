// 1. http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number * -1;
}

// 2. http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}

// 3. http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.map((el) => `${el}`);
}

// 4. http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(days) {
  if (days >= 7) return days * 40 - 50;
  if (days >= 3) return days * 40 - 20;
  return days * 40;
}

// 5. http://www.codewars.com/kata/calculating-with-functions

function expression(number, operation) {
  if (!operation) return number;
  return operation(number);
}

function zero(operation) {
  return expression(0, operation);
}
function one(operation) {
  return expression(1, operation);
}
function two(operation) {
  return expression(2, operation);
}
function three(operation) {
  return expression(3, operation);
}
function four(operation) {
  return expression(4, operation);
}
function five(operation) {
  return expression(5, operation);
}
function six(operation) {
  return expression(6, operation);
}
function seven(operation) {
  return expression(7, operation);
}
function eight(operation) {
  return expression(8, operation);
}
function nine(operation) {
  return expression(9, operation);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return y * x;
  };
}
function dividedBy(x) {
  return function (y) {
    return y / x;
  };
}

// 6. http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  }
  return s[Math.floor(s.length / 2)];
}

// 7. http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  // Array of false statements
  let f = items.filter(function (e) {
    return !pred(e);
  });

  // Array of true statements
  let t = items.filter(pred);

  // Cleans the array ( items = [] )
  items.length = 0;

  // Pushes the false and true statements as different arrays in items[]
  for (let i = 0; i < f.length; i++) {
    items.push(f[i]);
  }

  for (let i = 0; i < t.length; i++) {
    items.push(t[i]);
  }

  // The result is items = [[...false statements], [...true statements]]]

  return f.length;
}

// 8. Link doesn't work

// 9. https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(arr) {
  // Object to store counts
  const counts = {};

  // If the nummber is new, it is added to counts as key. If it is not new, it adds one count to it's key in counts
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }

  // Iterates over counts, if the counter of a given key is odd, it returns that key.
  for (key in counts) {
    if (counts[key] % 2 !== 0) {
      const result = key;
      return parseInt(result);
    }
  }
}

// 10. https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  // Returns true if number is even
  const isEven = (num) => {
    return num % 2 === 0;
  };

  // Array to store even and odd numbers
  const evenArr = [];
  const oddArr = [];

  // Iterates over integers, if the number is even, it is stored in evenArr, if not in oddArr
  integers.forEach((num) => {
    if (isEven(num)) {
      evenArr.push(num);
    } else {
      oddArr.push(num);
    }
  });

  // Depending on the length of the array, it only returns the value of the unique type
  if (evenArr.length === 1) return evenArr[0];
  return oddArr[0];
}

// 11. https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  const newArr = [];

  // Iterates over first array and pushes the result of the function to newArr. With index we apply the function to the same position in the second array. If the array is shorter,
  a0.map((el, index) => {
    if (index > a1.length - 1) return;
    newArr.push(fn(el, a1[index]));
  });

  return newArr;
}

// 12. https://www.codewars.com/kata/filter-the-number

const FilterString = function (value) {
  // Filter to only match numbers
  const regex = /[0-9]/g;
  return parseInt(value.match(regex).join(''));
};

// 13. https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(number) {
  const fiboArray = [0, 1];

  if (number === 1) return 0;

  for (let i = 2; i < number; i++) {
    fiboArray[i] = fiboArray[i - 2] + fiboArray[i - 1];
  }

  return fiboArray[fiboArray.length - 1];
}

// 14. https://www.codewars.com/kata/cat-and-mouse-2d-version/

function catMouse(map, moves) {
  map = map.split('\n');

  if (!map.some((v) => v.includes('C')) || !map.some((v) => v.includes('m'))) return 'boring without two animals';

  let catX = map.map((v) => v.indexOf('C')).filter((v) => v > -1) * 1;
  let catY = map.map((v) => v.includes('C')).indexOf(true) + 1;
  let mX = map.map((v) => v.indexOf('m')).filter((v) => v > -1) * 1;
  let mY = map.map((v) => v.includes('m')).indexOf(true) + 1;

  return Math.abs(catX - mX) + Math.abs(catY - mY) <= moves ? 'Caught!' : 'Escaped!';
}

// 15. https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(string) {
  return string
    .toLowerCase()
    .split('')
    .map(function (elem, _, array) {
      if (array.indexOf(elem) === array.lastIndexOf(elem)) {
        return '(';
      } else {
        return ')';
      }
    })
    .join('');
}

// 16. Couldn't do it

// 17. https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(floors) {
  let space = null;
  let star = null;
  let tower = [];
  for (i = 1; i <= floors; i++) {
    space = ' '.repeat(floors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

// 18. https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(string) {
  let waveArray = [];
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter === ' ') {
      continue;
    } else {
      waveArray.push(string.slice(0, i) + letter.toUpperCase() + string.slice(i + 1));
    }
  }
  return waveArray;
}

// 19. https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  return string
    .replace(/\s/g, '')
    .replace(new RegExp('.{' + n + '}', 'g'), '$&\n')
    .trim();
}

// 20. https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}

// katas 1 https://www.codewars.com/kata/opposite-number
function oppositeNumber(num) {
  return num * -1;
}

// katas 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  else if (operation === '-') return value1 - value2;
  else if (operation === '*') return value1 * value2;
  else if (operation === '/') return value1 / value2;
}

// katas 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.toString();
}

// katas 4 http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let payment = 40;
  if (d > 0 && d <= 2) {
    return payment * d;
  } else if (d >= 3 && d < 7) {
    return payment * d - 20;
  } else if (d >= 7) {
    return payment * d - 50;
  }
}

//katas 5 http://www.codewars.com/kata/calculating-with-functions

// katas 6 http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    return s[s.length / 2 - 0.5];
  }
}

// katas 7 http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  let falses = items.filter((v) => !pred(v));
  let trues = items.filter((v) => pred(v));
  items.splice(0);
  items.push(...falses);
  items.push(...trues);
  return falses.length;
}

// katas 8 http://www.codewars.com/kata/word-count   //BROKEN LINK ! REPLACE BY NEXT ONE
//  https://www.codewars.com/kata/56b3b27cadd4ad275500000c

const dangerWords = ['a', 'the', 'on', 'at', 'of', 'upon', 'in', 'as'];

function wordCount(s) {
  let onlyLetters = s.toLowerCase().match(/[a-z]+/g);
  return onlyLetters.filter((x) => !dangerWords.includes(x)).length;
}

// katas 9 https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  for (let i = 0; i <= A.length - 1; i += 1) {
    let arrLength = A.filter((elm) => elm === A[i]).length;

    if (arrLength % 2 !== 0) {
      return A[i];
    }
  }
}

// katas 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(arr) {
  let oddRare = arr.filter((x) => x % 2 !== 0);
  console.log(oddRare);
  let evenRare = arr.filter((x) => x % 2 === 0);
  console.log(evenRare);

  if (oddRare.length > evenRare.length) {
    return evenRare[0];
  } else {
    return oddRare[0];
  }
}

// katas 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  let newArr = [];
  for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
    newArr.push(fn(a0[i], a1[i]));
  }
  return newArr;
}

// katas 12 https://www.codewars.com/kata/filter-the-number

function FilterString(value) {
  let parsed = value.match(/[0-9]/g);
  return parseInt(parsed.join(''));
}

// katas 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  let fibo = [0, 1];
  if (n > 2) {
    for (let i = 1; i < n - 1; i++) {
      fibo.push(fibo[i - 1] + fibo[i]);
    }
  }

  return fibo[n - 1];
}

// katas 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

const msgEscaped = 'Escaped!';
const msgCaugth = 'Caught!';
const msgBoring = 'boring without two animals';

function catMouse(map, moves) {
  const mapped = map.split('\n');
  if (!map.match(/c/im) || !map.match(/m/im)) return msgBoring;

  function catCol() {
    for (i = 0; i <= mapped.length; i++) {
      if (mapped[i].lastIndexOf('C') != -1) {
        return i;
      }
    }
  }
  function mCol() {
    for (i = 0; i <= mapped.length; i++) {
      if (mapped[i].indexOf('m') != -1) {
        return i;
      }
    }
  }

  let catRow = mapped[catCol()].indexOf('C');
  let mRow = mapped[mCol()].indexOf('m');

  if (Math.abs(catCol() - mCol()) + Math.abs(catRow - mRow) > moves) {
    return msgEscaped;
  } else if (Math.abs(catCol() - mCol()) + Math.abs(catRow - mRow) < moves) {
    return msgCaugth;
  }
}

// katas 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  newWord = '';
  const wordLower = word.toLowerCase();

  for (letter of wordLower) {
    if (wordLower.indexOf(letter) === wordLower.lastIndexOf(letter)) {
      newWord += '(';
    } else {
      newWord += ')';
    }
  }
  return newWord;
}

// katas 16 https://www.codewars.com/kata/5693239fb761dc8670000001

/* can't do it */

// katas 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let tower = [];
  let bricks = 1;
  for (i = 1; i <= nFloors; i++) {
    tower[i - 1] = ' '.repeat(nFloors - i) + '*'.repeat(bricks) + ' '.repeat(nFloors - i);
    bricks += 2;
  }
  return tower;
}

// katas 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  let waveArr = [];
  for (let i = 0; i < str.length; i++) {
    waveArr.push(str.substring(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return waveArr.filter((x) => x != str);
  // kick the str unmodifyed by the spaces
}

// katas 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  let arr = [];
  string = string.replace(/\s/g, '');

  for (let i = 0; i < string.length; i += n) {
    arr.push(string.substr(i, n));
  }

  return arr.join('\n');
}

// katas 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

// katas 1 - https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  arr.push(0);
  return arr.filter((a) => a >= 0).reduce((a, b) => a + b);
}

// katas 2 - https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  const consecutive = (a, b) => a + 1 === b || a - 1 === b;
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    if (consecutive(ar[i], ar[i + 1])) {
      count++;
    }
    i++;
  }

  return count;
}

// katas 3 - https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  let flag = false;
  let result = bound;

  while (result > 0 && !flag) {
    result % divisor === 0 ? (flag = true) : result--;
  }

  return result;
}

// katas 4 - https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((a) => a % 2 === 0);
}

// katas 5 - https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let auxArr = [];
  let flag = false;

  while (!flag) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    auxArr.push(max, min);
    arr = arr.filter((a) => a !== min && a !== max);

    if (arr.length < 2) {
      flag = true;
    }
  }

  return auxArr.concat(arr);
}

// katas 6 - https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  const NO_STRING = "invalid string";
  let res;
  let arr = [];
  let i = 1;

  if (string.length < 2 || string.length > 100) {
    res = NO_STRING;
  } else {
    while (i < string.length) {
      arr.push(string.charAt(i));
      i += 2;
      res = arr;
    }
  }

  return res;
}

// katas 7 - https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  let indexes = [0, 1, 2];
  let max = triplet.indexOf(Math.max(...triplet));
  let min = triplet.indexOf(Math.min(...triplet));
  indexes = indexes.filter((a) => a !== min && a !== max);

  return indexes[0];
}

// katas 8 - https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  const baseNumeric = 2;
  let sum = 0;
  arr.reverse();

  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i] * Math.pow(baseNumeric, i);
  }

  return sum;
};

// katas 9 - https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// katas 10 - https://www.codewars.com/kata/581e014b55f2c52bb00000f8
// katas 11 - https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Optional (advanced)
// katas 12 - https://www.codewars.com/kata/515bb423de843ea99400000a
// katas 13 - https://www.codewars.com/kata/52597aa56021e91c93000cb0
// katas 14 - https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
// katas 15 - https://www.codewars.com/kata/5296bc77afba8baa690002d7

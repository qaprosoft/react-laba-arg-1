// 1. https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((acc, el) => {
    if (el > 0) {
      acc += el;
    }

    return acc;
  }, 0);
}

//  2. https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(arr) {
  return arr.reduce((acc, el, index) => {
    if (index % 2 !== 0) return acc;

    if (el === arr[index + 1] - 1) {
      acc += 1;
    }

    if (el - 1 === arr[index + 1]) {
      acc += 1;
    }
    return acc;
  }, 0);
}

// 3. https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let count = bound;
  while (count > divisor) {
    if (count % divisor === 0) {
      return count;
    }
    count--;
  }
}

// 4. https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((el) => el % 2 === 0);
}

// 5. https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      let max = Math.max(...arr);
      arr.splice(arr.indexOf(max), 1);
      res.push(max);
    } else {
      let min = Math.min(...arr);
      arr.splice(arr.indexOf(min), 1);
      res.push(min);
    }
  }
  return res;
}

// 6. https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  if (!string) return 'invalid string';
  if (string.length === 1 || string.length > 100) return 'invalid string';

  const splitted = string.split('');
  const res = [];

  for (let i = 0; i < splitted.length; i++) {
    if (i % 2 === 1) {
      res.push(splitted[i]);
    }
  }

  return res;
}

// 7. https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const middle = array.filter((el) => el !== max && el !== min);
  return array.indexOf(middle[0]);
}

// 8. https://www.codewars.com/kata/578553c3a1b8d5c40300037c

function binaryArrayToNumber(arr) {
  return parseInt(arr.join(''), 2);
}

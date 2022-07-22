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

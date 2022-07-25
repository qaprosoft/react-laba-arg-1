// Task 1 - https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let positiveArr = [];
  let sum = 0;

  // Push only positive numbers
  arr.map((el) => {
    if (el >= 0) {
      positiveArr.push(el);
    }
  });

  for (let i = 0; i < positiveArr.length; i++) {
    if (positiveArr[i] == 0) {
      continue;
    } else {
      sum += positiveArr[i];
    }
  }

  return sum;
}

// Task 2 - https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let pairs = Math.floor(ar.length / 2);
  let arr2 = [];
  let countPairs = 0;

  for (i = 0; i < pairs; i++) {
    let splice = ar.splice(0, 2);
    arr2.push(splice);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i][0] - arr2[i][1] == -1 || arr2[i][0] - arr2[i][1] == 1) {
      countPairs++;
    }
  }
  return countPairs;
}

// Task 3 - https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

// Task 4 - https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  let evenArr = [];

  numbersArray.filter((el) => {
    if (el % 2 === 0) {
      evenArr.push(el);
    }
  });
  return evenArr;
}

// Task 5 - https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let maxArr = [];
  let minArr = [];

  for (i = 0; i < arr.length; i++) {
    maxArr.push(arr[i]);
    minArr.push(arr[i]);
  }

  maxArr.sort((a, b) => {
    return b - a;
  });

  minArr.sort((a, b) => {
    return a - b;
  });

  let arrOrder = [];

  for (i = 0; i < arr.length; i++) {
    arrOrder.push(maxArr[i], minArr[i]);
    arrOrder.push();
  }

  let length = arr.length;
  return arrOrder.slice(0, length);
}

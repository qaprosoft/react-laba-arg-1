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

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

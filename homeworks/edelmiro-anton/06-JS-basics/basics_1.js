// Task 1 - http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number * -1;
}

// Task 2 - http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      break;
    case '-':
      return value1 - value2;
      break;
    case '*':
      return value1 * value2;
      break;
    case '/':
      return value1 / value2;
      break;
  }
}

// Task 3 - http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  let toString = array.toString();
  return toString;
}

// Task 4 - http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let costDayRental = 40;
  if (d >= 7) {
    return costDayRental * d - 50;
  } else if (d >= 3) {
    return costDayRental * d - 20;
  } else if (d > 0 && d <= 2) {
    return costDayRental * d;
  }
}

// Task 5 - http://www.codewars.com/kata/calculating-with-functions

// Task 6 - http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 === 0) {
    const evenLength = s.length;
    const evenHalfLength = evenLength / 2;
    const evenIndex = s.substr(evenHalfLength - 1, 2);
    return console.log(evenIndex);
  } else {
    const oddLength = s.length;
    const oddHalfLength = Math.trunc(oddLength / 2);
    const oddIndex = s.charAt(oddHalfLength);
    return console.log(oddIndex);
  }
}

// Task 7 - http://www.codewars.com/kata/partition-on

// Task 9 - https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  A.sort();
  let elements = [];
  let elementsRepeat = [];
  let counter = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] === A[i]) {
      counter++;
    } else {
      elements.push(A[i]);
      elementsRepeat.push(counter);
      counter = 1;
    }
  }
  elements;
  elementsRepeat;

  for (let j = 0; j < elementsRepeat.length; j++) {
    if (elementsRepeat[j] % 2 === 1) {
      //     console.log(elements[j])
      return elements[j];
    }
  }
}

// Task 10 - https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  let evenArr = [];
  let oddArr = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
  }
  if (evenArr.length > oddArr.length) {
    return oddArr[0];
  } else if (evenArr.length < oddArr.length) {
    return evenArr[0];
  }
}
// Task 11 - https://www.codewars.com/kata/zipwith

// Task 12 - https://www.codewars.com/kata/filter-the-number

var FilterString = function (value) {
  let split = value.split('');
  // console.log(split)

  let map = split.map((el) => {
    if (!isNaN(parseInt(el))) {
      // console.log(el)
      return el;
    }
  });

  let numbers = map.filter((el) => {
    return el != undefined;
  });

  // console.log(numbers)
  return parseInt(numbers.join(''));
};

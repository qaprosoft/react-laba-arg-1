// 1 katas http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number * -1;
}

//console.log (opposite(15))
//console.log (opposite(-15))

// 2 katas http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  } else {
    return 'Operation error.';
  }
}

//console.log (basicOp("+", 3, 2))

// 3 katas http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.join(',');
}

// 4 katas http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let dayPrice = 40;
  if (d >= 7) {
    return d * dayPrice - 50;
  } else if (d >= 3) {
    return d * dayPrice - 20;
  } else {
    return d * dayPrice;
  }
}

//console.log(rentalCarCost(8));

// 5 katas https://www.codewars.com/kata/calculating-with-functions

let zero = function () {
  return 0;
};

let one = function () {
  return 1;
};

let two = function () {
  return 2;
};

let three = function () {
  return 3;
};

let four = function () {
  return 4;
};

let five = function () {
  return 5;
};

let six = function () {
  return 6;
};

let seven = function () {
  return 7;
};

let eight = function () {
  return 8;
};

let nine = function () {
  return 9;
};

let plus = function () {
  return '+';
};

let minus = function () {
  return '-';
};

let times = function () {
  return '*';
};

let dividedBy = function () {
  return '/';
};

let result = function (leftOperand, operation, rigthOperand) {
  if (operation === '+') {
    return leftOperand + rigthOperand;
  } else if (operation === '-') {
    return leftOperand - rigthOperand;
  } else if (operation === '*') {
    return leftOperand * rigthOperand;
  } else if (operation === '/') {
    return Math.round(leftOperand / rigthOperand);
  }
};

//console.log(result(nine(),plus(),two()))

// 6 kata https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  let middleIndex = s.length / 2;
  if (s.length % 2 == 0) {
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  }
}

//console.log(getMiddle('test'));

// 7 kata https://www.codewars.com/kata/partition-on

let partitionOn = (pair, items) => {
  let iterations = items.length;
  for (let index = 0; index < iterations; ) {
    if (!pair(items[index])) {
      index++;
    } else if (pair(items[index])) {
      let indexOfCurrentIteration = items[index];
      items.splice(index, 1);
      items.push(indexOfCurrentIteration);
      iterations--;
    }
  }
  return iterations;
};

// 9 kata https://www.codewars.com/kata/find-the-odd-int/

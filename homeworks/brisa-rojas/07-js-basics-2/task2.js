'use strict';

//Codewars tasks
// 1 - https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let sum;
  sum = arr.reduce((sum, current) => sum + current * (current > 0), 0);
  return sum;
}

// 2 - https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
  let consecutivePairs = 0;
  let n1;
  let n2;

  if (arr.length % 2) {
    // odd length, number with no pair at the end
    arr.pop();
  }

  for (let i = 0; i < arr.length; i += 2) {
    n1 = arr[i];
    n2 = arr[i + 1];

    if (n1 == n2 + 1 || n2 == n1 + 1) {
      consecutivePairs++;
    }
  }

  return consecutivePairs;
}
// 3 - https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return divisor * Math.floor(bound / divisor);
}

// 4 - https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((number) => !(number % 2));
}

// 5 - https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let solved = [];
  let maximum;
  let minimum;

  arr.sort(compare); //ordered from min to max

  while (arr.length) {
    maximum = arr[arr.length - 1];
    solved.push(maximum);
    arr.pop();
    if (arr.length) {
      minimum = arr[0];
      solved.push(minimum);
      arr.shift();
    }
  }

  return solved;
}

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

// 6 - https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  let even = [];

  //checks length
  if (string.length > 100 || string.length < 2) {
    return 'invalid string';
  }

  string.split('');
  for (let i = 1; i < string.length; i += 2) {
    even.push(string[i]);
  }

  return even;
}

// 7 - https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  let bound;
  let indexes = [0, 1, 2];
  let minIndex;
  let maxIndex;

  // delete min index from indexes
  bound = Math.min.apply(null, triplet); // checks which element is the minimum
  minIndex = triplet.indexOf(bound); // gets the index of the minimum
  indexes.splice(indexes.indexOf(minIndex), 1); // deletes the element corresponding to the index of minimum in triplet

  //delete max index from indexes
  bound = Math.max.apply(null, triplet); // checks which element is the maximum
  maxIndex = triplet.indexOf(bound); // gets the index of the maximum
  indexes.splice(indexes.indexOf(maxIndex), 1); // deletes the element corresponding to the index of maximum in triplet

  return indexes[0]; // return "middle number" index
}

// 8 - https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

// 9 - https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  let unique;

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      unique = arr[i];
    }
  }

  return unique;
}

// 10 - https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// 11 - https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  let odds = [];

  // make an array with all odd numbers
  array.forEach(function (num) {
    if (num % 2) {
      odds.push(num);
    }
    return;
  });

  // order the odd numbers
  odds.sort(compare);

  //replace from max to min odd number
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] % 2) {
      array[i] = odds[odds.length - 1];
      odds.pop();
    }
  }

  return array;
}

/*function compare(a, b){ I already have a function to compare numbers in another kata, I'll leave this one commented
    if (a<b) { return -1; }
    else if (a>b) { return 1; }
    else {return 0;}
}*/

// OPTIONALS
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
function moveZeros(arr) {
  let zeros = 0;

  //delete zeros in the middle
  while (arr.includes(0)) {
    arr.splice(arr.indexOf(0), 1);
    zeros += 1;
  }

  console.log('out');
  //add zeros at the end
  while (zeros) {
    arr.push(0);
    zeros -= 1;
  }

  return arr;
}

// https://www.codewars.com/kata/515bb423de843ea99400000a
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.items = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.items.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.items.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex > this.pageCount || pageIndex < 0) {
    return -1;
  } else {
    return this.items.slice(pageIndex * this.itemsPerPage, this.itemCount()).splice(0, this.itemsPerPage).length;
    // slice to "ignore" everything in previous pages, SPLICE to get AT MOST itemCounts elements, then get length
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || itemIndex > this.items.length || this.items.length == 0) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
};

//this kata passes all test but one in "attempt" but  because it does not show tests, I can't figure out why it fails and fix it
// pageItemCount is returning incorrect value

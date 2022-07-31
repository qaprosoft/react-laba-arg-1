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
  let anyString = s;

  if (anyString.length % 2 === 0) {
    const evenLength = anyString.length;
    const evenHalfLength = evenLength / 2;
    const evenIndex = anyString.substr(evenHalfLength - 1, 2);
    return evenIndex;
  } else {
    //The same above but for odd
    const oddLength = anyString.length;
    const oddHalfLength = Math.trunc(oddLength / 2);
    const oddIndex = anyString.charAt(oddHalfLength);
    return oddIndex;
  }
}

// Task 7 - http://www.codewars.com/kata/partition-on

// Task 8 - https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
let string = 'HolaMundo';
function countWords(str) {
  let toRemove = '';
  let counter = 0;
  let counterSepareteWords = 0;
  //Numbers counting as lowercase characters
  let regex2 = /([a-z])([A-Z])/g;
  //Check if the string has whitespaces, "-" or "_"
  let isPascalCase = /[\s_-]/g;

  // Function for non-whitespace
  function nonWhitespace(str) {
    //Apply regex to separate words with spaces between them
    let separateWords = str.replace(regex2, '$1 $2');

    //Uppercase the first character and with slice, return the rest of the string
    let finalResult = separateWords.charAt(0).toUpperCase() + separateWords.slice(1);
    let arrSeparetaWords = finalResult.split(' ');

    // Remove white spaces
    arrSeparetaWords = arrSeparetaWords.filter((el) => {
      return el != toRemove;
    });

    //   Strings counter
    for (let i = 0; i < arrSeparetaWords.length; i++) {
      counterSepareteWords++;
    }
  }

  if (!str.match(isPascalCase)) {
    //If the param has no "-", "_" or whitespaces, execute the function and return counterSepareteWords
    nonWhitespace(str);
    return counterSepareteWords;
  } else {
    //if above is false:

    //   Convert the string into an array
    let arrString = str.split(' ');
    arrString = arrString.filter((el) => {
      //Filter method to delete white spaces
      return el != toRemove;
    });

    //   String counter
    for (let i = 0; i < arrString.length; i++) {
      counter++;
    }
  }
  return counter;
}

// console.log(countWords(string));

// Task 9 - https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let mainArr = A.sort();
  let elements = [];
  let elementsRepeat = [];
  let counter = 1;

  for (let i = 0; i < mainArr.length; i++) {
    if (mainArr[i + 1] === A[i]) {
      counter++;
    } else {
      elements.push(mainArr[i]);
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
  let integersArray = integers;
  for (let i = 0; i < integersArray.length; i++) {
    if (integersArray[i] % 2 === 0) {
      evenArr.push(integersArray[i]);
    } else {
      oddArr.push(integersArray[i]);
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
  //Array of each character of the string
  let split = value.split('');

  let numbers = split.filter((el) => {
    // Removes undefined from array
    return !isNaN(parseInt(el));
  });

  return parseInt(numbers.join(''));
};

// Task 13 - https://www.codewars.com/kata/n-th-fibonacci

// the n number should return the n-th number of the sequence
function nthFibo(n) {
  let fibo = [0, 1];
  let length = n;
  fibo.length = length;

  for (let i = 2; i < fibo.length; i++) {
    if (fibo[i] == undefined) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
  }

  return fibo[n - 1];
}

// Task 15 - https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  // repeted char = ")"
  // new char = "("

  let arr = [];
  let newWord = '';
  //Character counter
  for (i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (arr[char] == undefined) {
      arr[char] = 1;
      console.log(arr[1]);
    } else {
      arr[char] += 1;
      console.log(arr[char]);
    }
  }

  // check if the char is more than one time. If yes, add ")" to "newWord". If not, add "("
  for (i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (arr[char] > 1) {
      newWord += ')';
    } else {
      newWord += '(';
    }
  }
  return newWord;
}

// Task 18 - https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// Mexican Wave

function wave(str) {
  let strLower = str.toLowerCase();
  strLower.trim();
  let arr = [];

  for (let i = 0; i < strLower.length; i++) {
    let substring = strLower.substring(i, 0); // empty string when substring(0,0)
    let char = strLower[i];
    let slice = strLower.slice(i + 1);

    if (!char.includes(' ')) {
      let newStr = substring + char.toUpperCase() + slice;
      arr.push(newStr);
    }
  }
  return arr;
}

// Task 20 - https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

const protocol1 = 'http://';
const protocol2 = 'https://';
const www = 'www.';

function domainName(url) {
  url = url.replace(protocol1, '');
  url = url.replace(protocol2, '');
  url = url.replace(www, '');

  return url.split('.')[0];
}

// 1 katas http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number * -1;
}

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
  }
}

// 3 katas http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  //joins the array together adding a comma between characters
  return array.join(',');
}

// 4 katas http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  //variable with a dayly price
  let dayPrice = 40;
  //if the amount of days is equal or higer than 7
  if (d >= 7) {
    //returns the days amount multiplied by 40 minus 50 (the discount)
    return d * dayPrice - 50;
    //if the amount of days is equal or higer than 3
  } else if (d >= 3) {
    //returns the days amount multiplied by 40 minus 20 (the discount)
    return d * dayPrice - 20;
  } else {
    //if the amount of days is less than 3, returns the amount of days multiplied by 40
    return d * dayPrice;
  }
}

// 5 katas https://www.codewars.com/kata/calculating-with-functions

// 6 kata https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  //get the middle character dividing the string length by 2
  let middleIndex = s.length / 2;
  //if the string length is not a pair/even number
  if (s.length % 2 == 0) {
    //slices or "takes" the two middle characters (middle index -1 and +1)
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    //if not, returns the middle character (string length divided by 2)
    return s.charAt(middleIndex);
  }
}

// 7 kata https://www.codewars.com/kata/partition-on

let partitionOn = (pair, items) => {
  //we need to work the amount of times as characters in "items"
  let iterations = items.length;
  //As long as index (amount) is smaller than iterations (amount)
  for (let index = 0; index < iterations; ) {
    //if the item index is not a pair number
    if (!pair(items[index])) {
      //we go to the next index
      index++;
      //if it's pair
    } else if (pair(items[index])) {
      //the current iterarion will be the actual pair index
      let indexOfCurrentIteration = items[index];
      //splice will delete the current item's index
      items.splice(index, 1);
      //and push/add the index of the current iteration at the end of items
      items.push(indexOfCurrentIteration);
      //iterations will be minus one, because we need to get to get to the value->
      //of the first pair-number index
      iterations--;
    }
  }
  return iterations;
};

// 8 kata https://www.codewars.com/kata/570cc83df616a85944001315

function countWords(string) {
  //Creates a new array that matches the original string without spaces,
  //and filters all the string elemens into the array
  let stringToArray = string.split(/\s/).filter((countElement) => countElement);
  //returns the array length to know how many words the array has
  return stringToArray.length;
}

// 9 kata https://www.codewars.com/kata/find-the-odd-int/

function findOdd(arrayOfNumbers) {
  //Counter variable.
  let oddNumber = 0;
  //For each element in arrayOfNumbers
  arrayOfNumbers.forEach((currentNumber) => {
    //filters the actual number in the iteration and checks if it already exists in the arrayOfNumbers
    //If it exists, it will be saved in sameNumbers
    const sameNumbers = arrayOfNumbers.filter((numberToFilter) => numberToFilter === currentNumber);
    //The odd number appears only once or three times
    //It means that if the amount of numbers that are repeated is pair=>
    if (sameNumbers.length % 2) {
      //it WONT be an odd number
      //So the currentNumber is saved in oddNumber
      oddNumber = currentNumber;
    }
  });
  //and returned
  return oddNumber;
}

// 10 kata https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(arrayOfNumbers) {
  //Filters the non-even number in arrayOfNumbers
  let oddArray = arrayOfNumbers.filter((currentNumber) => currentNumber % 2 !== 0);
  //Filters the even number in arrayOfNumbers
  let evenArray = arrayOfNumbers.filter((currentNumber) => currentNumber % 2 == 0);
  //The odd number is the one that is even and appears once in the array or
  //is non-even and appears once in the array.
  //So this will return the array with even or non-even that appears once in the array,
  //because it will be the odd number
  if (oddArray.length == 1) {
    //Returns the non-even array with length 1
    return oddArray[0];
  } else if (evenArray.length == 1) {
    //Returns the even array with length 1
    return evenArray[0];
  }
}

// kata 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  //Creates a new empty array to push the elements selected by "fn"
  let shortNewArray = [];
  //We crate two variables which value is the length of their current arrays=>
  let a0Length = a0.length;
  //because the function will run the amount of times of the shorter array llength
  let a1Length = a1.length;
  //As long as index value is shorter than both array's length values
  for (let index = 0; index < a0Length && index < a1Length; index++) {
    //the short array will push the final value decided by the function (fn) =>
    //comparing the current index of both arrays
    shortNewArray.push(fn(a0[index], a1[index]));
  }
  //And returns the new array with the new values.
  return shortNewArray;
}

// kata 12 https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var FilterString = function (value) {
  //We filter the letters (/[^0-9]/g) and replace them with an empty space
  let filterNumber = value.replace(/[^0-9]/g, '');
  //Returns the variable with the string converted to int (parseInt)
  return parseInt(filterNumber);
};

// kata 13 https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

// kata 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

// kata 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  //We create an empty string to add the values in the future
  let finalString = '';
  //and convert the given string to loverCase because uppercase letters are not equal to lowercase.
  finalWord = word.toLowerCase();
  //as long as index value is smaller than the length of the given string
  for (let index = 0; index < finalWord.length; index++) {
    //If the first character encontered appears again as a last index (finalWord,index-position)
    if (finalWord.indexOf(finalWord[index]) !== finalWord.lastIndexOf(finalWord[index])) {
      //It means that the character is repeated so we add ")"
      finalString += ')';
    } else {
      //if the first index position is equal to the last index position (it's the same)
      //we add "(" to the final string.
      finalString += '(';
    }
  }
  return finalString;
}

// kata 16 https://www.codewars.com/kata/5693239fb761dc8670000001

// kata 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// kata 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  //We create a new empty array to push future words
  mexicanWave = [];
  //For every letter in str we will make an entire push of the word with modifications
  for (let index = 0; index < str.length; index++) {
    //If the string actual index is not an empty space
    if (str[index] !== ' ') {
      //We push in the empty array (all the subsecuent) from the value index-0 until the actual index value (slice),
      //and convert the actual string index to uppercase,
      //and then it continues to copy (slice) the letters from past-index until the last character.
      mexicanWave.push(str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1));
    } else {
      //If the actual index is not a empty space it continues, so it wont try to uppercase the space.
      continue;
    }
  }
  //Returns the modified array.
  return mexicanWave;
}

// kata 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  //replicates the string with no withe spaces
  let noWhiteSpaces = string.replace(/\s+/g, '');
  //creates an empty strig to add the letters
  let finalString = '';
  //Variable that is meant to sum +1 until the given "n" number
  let upToN = 0;
  //As long as index is smaller than the string with no white spaces length
  for (let index = 0; index < noWhiteSpaces.length; index++) {
    //We add to finalString the actual letter in the index-value-position
    finalString += noWhiteSpaces[index];
    //Add +1 to upToN
    upToN++;
    //Once upToN is equals to "n" and we are not in the last letter (index) of "nWitheSpaces"
    if (upToN === n && noWhiteSpaces.length - 1 != index) {
      //We add a line break to the finalString "\n"
      finalString += '\n';
      //And upToN returns to zero again until its value is "n" again and so on
      upToN = 0;
    }
  }
  //Returns the final string
  return finalString;
}

// kata 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  //We create a new URL string, replacing for empty spaces the htpp/s protocol and "www."
  //And copi on it (spli) the characters from the first dot in the string until the index 0.
  let domainName = url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
  //Returns the domain name.
  return domainName;
}

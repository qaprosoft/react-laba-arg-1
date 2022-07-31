//Codewars tasks
// kata 01 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(array) {
  //We define a variable with an initial value of 0
  let sumArray = 0;
  //With forEach, we will iterate each element of the given array.
  array.forEach((element) => {
    //If the current element of the array is positive (>0)
    if (element > 0) {
      //Adds up the current element value to sumArray
      sumArray += element;
      //If this condition (element > 0) is false, it won't do anything
      //And it will continue with the loop until it finishes and returns sumArray
    }
  });
  //If the length of the array is 0 or 1 and the value is 0
  //It will automatically return sumArray equals to 0
  return sumArray;
}

// kata 02 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(array) {
  //We create a pair count
  let pairCount = 0;
  //For each iteration we sum +2 to index (because iterations must be in pairs)
  for (let index = 0; index < array.length; index = index++) {
    //We create a new array which contains the first two elements of the original array (splice)
    let newArray = array.splice(0, 2);
    //The conditions: if the new array is length 2 (so if the last element remaining is one, it wont apply)
    //AND one of the elements +1 is equal to the other element or vice versa (it means they're consecutives)
    if ((newArray.length === 2 && newArray[1] + 1 === newArray[0]) || newArray[1] - 1 === newArray[0]) {
      //We add +1 to out pair count.
      pairCount++;
    }
  } //And return pairCount once the iterations of the original array are finished
  return pairCount;
}

// kata 03 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  //We create a variable result
  let result = 0;
  //This for will continue while result is smaller than bound
  //This time index starts in 1 to save a useless iteration
  for (let index = 1; result < bound; index++) {
    //Result equals divisor value multiplied by index value
    result = divisor * index;
  }
  //If the result's value is higher than bound value
  if (result > bound) {
    //Returns result minus divisor
    return result - divisor;
  } else {
    //If result is still a lower value, returns result
    return result;
  }
}

// kata 04 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  //We filter the numbersArray with the pair/even values
  let result = numbersArray.filter((number) => number % 2 == 0);
  //And return
  return result;
}

// kata 05 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(array) {
  //Empty array where all elements will be pushed
  let newArray = [];
  let sortArray = array;
  //Sorts the array from higher to lowest numbers
  sortArray.sort(function (a, b) {
    return b - a;
  });
  //This loop will work until array length becomes 0
  while (sortArray.length > 0) {
    //We push the shifted value (index = 0) which is the biggest number
    newArray.push(sortArray.shift());
    //Here we push the "popped" value (index -1) which is the lowest number
    newArray.push(sortArray.pop());
  }
  //This push(shift) and push(pop) will work on each iteration,
  //This means that the last value could end up being undefined if the array length was uneven
  //So, if the array includes undefined (it will be at the end of the array)
  if (newArray.includes(undefined)) {
    //It gets erased
    let popped = newArray.pop();
    //And finally, return the final array
    return newArray;
  } else {
    return newArray;
  }
}

// kata 06 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  //New empty array to push the desired elements
  let evenNumbers = [];
  //First condition, the array length has to be longer than 1 and smaller than 101
  if (string.length < 2 || string.length > 100) {
    //Otherwise it will return "invalid string"
    return 'invalid string';
  } //We create an index for the loop control over the array length
  for (let index = 1; index < string.length; index++) {
    //If the actual index is even
    if (index % 2 !== 0) {
      //We push the actual string index(even) to the empty array
      evenNumbers.push(string[index]);
    }
  }
  //Once the loop is over, returns the new array
  return evenNumbers;
}

// kata 07 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

/* function gimme(triplet) {
  let newArray = triplet;
  let sortArray = newArray.sort(function (a, b) {
    return b - a;
  });
  let middleNumber = sortArray.slice(1, 2).toString();
  let toInt = Math.floor(middleNumber);
  let tripletNumber = newArray.indexOf(toInt);
  return tripletNumber;
}
*/

// kata 08 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arrayNumbers) => {
  //We join the array into a string with no commas
  let binaryString = arrayNumbers.join('');
  //Then transform it into integer with parseInt
  //Passing two arguments, the string and 2 (the base of binary numbers)
  let binaryInt = parseInt(binaryString, 2);
  return binaryInt;
};

// kata 09 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(array) {
  //We define number
  let number;
  //Create a loop for array length
  for (let index = 0; index < array.length; index++) {
    //And compare the first time the actual index appear (indexOf), with the last time
    //the index appear (lastIndexOf).
    if (array.indexOf(array[index]) === array.lastIndexOf(array[index])) {
      //If they are the same index, return number with the array (index position)
      return (number = array[index]);
    }
  }
}

// kata 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
// kata 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  //Array for odd numbers
  let odd = [];
  //Counter for future use
  let oddIndex = 0;
  //array of even numbers
  let even = [];
  //Counter for future use
  let evenIndex = 0;
  //Final array to push the sorted elements
  let newArray = [];
  //We create a condition to push the elements in the new odd/even arrays
  //depending if the elemet value is even or not
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      even.push(array[index]);
    } else if (array[index] % 2 !== 0) {
      odd.push(array[index]);
    }
  }
  //Create a function to sort the elements in the "odd" array
  odd.sort(function (a, b) {
    return a - b;
  });
  //In a new loop, we push the elements depending if the current index of the
  //original array is even or not. The only difference is that the odd elements
  //are sorted in ascending order.
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      newArray.push(even[evenIndex]);
      //every time an element is pushed, the even index is +1
      evenIndex++;
    } else if (array[index] % 2 !== 0) {
      newArray.push(odd[oddIndex]);
      //every time an element is pushed, the odd index is +1
      oddIndex++;
    }
  } //Returns the final array
  return newArray;
}

//Optional (advanced)
// kata 01 https://www.codewars.com/kata/515bb423de843ea99400000a
// kata 02 https://www.codewars.com/kata/52597aa56021e91c93000cb0
// kata 03 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
// kata 04 https://www.codewars.com/kata/5296bc77afba8baa690002d7

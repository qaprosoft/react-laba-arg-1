//task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] >= 0 ? (sum += arr[i]) : sum;
  }
  return sum;
}

//task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

//task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let max;

  for (let n = bound; n >= divisor; n--) {
    if (n % divisor === 0) return (max = n);
  }
  return max;
}

//task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}

//task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

//task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

//sort method overwrites the original array.
//creating a copy of the original array (and then finding the right element) is simpler than sorting the array without the sort() method.

function gimme(triplet) {
  let copy = [...triplet];

  triplet.sort((a, b) => a - b);

  return copy.indexOf(triplet[1]);
}

//task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

//task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  return Number(arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)));
}

//task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

//task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

//Optional
//task 1 https://www.codewars.com/kata/515bb423de843ea99400000a

//task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0

//task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

//task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7

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

// Task 6  - https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

function evenChars(string) {
  let index = [];
  let even = [];

  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    index.push(string.indexOf(char, i));
  }

  for (i = 0; i < string.length; i++) {
    if (index[i] % 2 === 1) {
      even.push(string[i]);
    }
  }

  return even;
}

// Task 7 - https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme(triplet) {
  let max = Math.max(...triplet);
  let min = Math.min(...triplet);
  let middleNumber = [];

  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] != max && triplet[i] != min) {
      middleNumber.push(triplet[i]);
    }
  }

  return triplet.indexOf(middleNumber[0]);
}

// Task 8 - https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  arr = arr.reverse();
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      continue;
    } else {
      count += arr[i] = 2 ** [i];
    }
  }
  return count;
};

//  Task 9 - https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  let unique = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      unique += arr[i];
    }
  }

  return unique;
}

// Task 10 - https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// Task 11 - https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// ordenar ascendentemente los impares (odd) y a los pares dejarlos en el mismo lugar
// 1.obtener los impares de mi array en un nuevo array
// 2. los ordeno de menor a mayor
// 3. ya tengo un array ordenado de mis impares
// 4. comparo este array de impares con cada elemento de mi array original. Si cuando los comparo, son impares
// ver si son iguales

let arr = [-11, -30, 6, 3, 4, 1];

let indexOf = [];
let oddArr = [];

// indexOf de cada elemento impar y negativo encontrado
arr.forEach((el) => {
  if (el % 2 !== 0) {
    indexOf.push(arr.indexOf(el));
  }
});

indexOf; // OK

arr.forEach((el) => {
  if (el % 2 !== 0) {
    oddArr.push(el);
  }
});

oddArr;

oddArr = oddArr.sort((a, b) => a - b);

oddArr;

// si el indice de ODDARR  es = al indice de INDEXOF, pusheo el ODDARR[EL] del index a arr

let index = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    continue;
  } else if (oddArr.indexOf(oddArr[i]) === indexOf.indexOf(indexOf[i])) {
    arr.splice(i, 1, oddArr[index]);
    index = index + 1;
  }
}
arr;

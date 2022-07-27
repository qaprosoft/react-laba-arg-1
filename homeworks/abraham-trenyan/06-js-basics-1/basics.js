//Katas 1: http://www.codewars.com/kata/opposite-number                  DONE
function opposite(number) {
  return number - number * 2;
}
// Katas 2: http://www.codewars.com/kata/basic-mathematical-operations    DONE
function basicOp(operation, number1, number2) {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
  }
}
// Katas 3: http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters    DONE
function printArray(array) {
  let output = "";
  array.forEach((element) => (output += element + ","));
  output = output.slice(0, -1);
  return output;
}
// Katas 4: http://www.codewars.com/kata/transportation-on-vacation   DONE
function rentalCarCost(d) {
  if (d < 3) return d * 40;
  else if (d < 7) return d * 40 - 20;
  else return d * 40 - 50;
}
// Katas 5: http://www.codewars.com/kata/calculating-with-functions

// Katas 6: http://www.codewars.com/kata/get-the-middle-character   DONE
function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[(s.length - 1) / 2];
  }
}
// Katas 7: http://www.codewars.com/kata/partition-on   DONE
function partitionOn(pred, items) {
  let trueArr=[]
  for(let i=0; i<items.length;i++){
    if(pred(items[i]) === true){
      trueArr.push(items[i])
      items.splice(i, 1)
    }
  }
  items.push(...trueArr);
  return items.findIndex(pred)
}
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, [1,2,3,4,5])

// Katas 8: http://www.codewars.com/kata/word-count       URL is broken :(

// Katas 9: https://www.codewars.com/kata/find-the-odd-int/               DONE
function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let currentValue = A[i];
    for (let j = 0; j < A.length; j++) {
      if (A[j] == currentValue) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return currentValue;
    }
  }
}
// Katas 10: https://www.codewars.com/kata/find-the-parity-outlier          DONE
function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  if (evenCount >= 2) {
    const outlier = integers.find((number) => number % 2 != 0);
    return outlier;
  } else {
    const outlier = integers.find((number) => number % 2 === 0);
    return outlier;
  }
}
// Katas 11: https://www.codewars.com/kata/zipwith                            DONE
function zipWith(fn, a0, a1) {
  let newArray = [];
  for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
    newArray.push(fn(a0[i], a1[i]));
  }
  return newArray;
}
// Katas 12: https://www.codewars.com/kata/filter-the-number                  DONE
var FilterString = function (value) {
  let numbers = "";
  for (let i = 0; i < value.length; i++) {
    if (isNaN(value[i]) == false) {
      numbers += value[i];
    }
  }
  return Number(numbers);
};
// Katas 13: https://www.codewars.com/kata/n-th-fibonacci                       DONE
function nthFibo(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci[i]=(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci[n-1];
}

// Katas 14: https://www.codewars.com/kata/cat-and-mouse-2d-version/

// Katas 15: https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word){
    lowered=word.toLowerCase();
    let newString = "";
    for(let i=0;i<lowered.length;i++){
      if(lowered.indexOf(lowered[i])===lowered.lastIndexOf(lowered[i])){
        newString+='('
      }
      else newString+=')'
    }
    return newString
}
console.log(duplicateEncode('abraham'))

// Katas 16: https://www.codewars.com/kata/5693239fb761dc8670000001

// Katas 17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Katas 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// Katas 19: https://www.codewars.com/kata/59d398bb86a6fdf100000031

// Katas 20: https://www.codewars.com/kata/514a024011ea4fb54200004b

//Task 1) => https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(array) {
    return array.reduce(
      (accumulator, current) => accumulator + (current > 0 ? current : 0),
      0
    );
  }
  console.log(positiveSum([1, -4, 7, 12]));
  
  
  //Tak 2) => https://www.codewars.com/kata/5a3e1319b6486ac96f000049
  
  function pairs(arr) {
    let counter = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0 && Math.abs(arr[i] - arr[i - 1]) === 1) {
        counter++;
      }
    }
  
    return counter;
  }
  console.log(pairs([1, 2, 4, 3]));
  
  
  //Task 3) =>https://www.codewars.com/kata/5aba780a6a176b029800041c
  
  const maxMultiple = (divisor, bound) => {
    return Math.floor(bound / divisor) * divisor;
  };
  console.log(maxMultiple(37, 200));
  
  
  // Task 4) => https://www.codewars.com/kata/514a6336889283a3d2000001
  
  const getEvenNumbers = (array) => array.filter((word) => (word % 2 === 0) ? word : "");
  console.log(getEvenNumbers([2,4,5,6]));
  
  
  // Task 5) => https://www.codewars.com/kata/5a090c4e697598d0b9000004
  
  function solve(arr){
    let sorted = arr.sort((a,b) => a - b);
    let res = [];  
    
    while(sorted.length > 1) {
      res.push(sorted.pop(),sorted.shift())
    }
    return res.concat(sorted);
  };
  console.log(solve([15,11,10,7,12]))
  
  
  //Task 6) => https://www.codewars.com/kata/566044325f8fddc1c000002c
  
  let evenChars = (string) => {
    if (string.length < 2 || string.length > 100) return "invalid string";
    const result = [];
    string.split("").forEach((char, i) => (i + 1) % 2 === 0 && result.push(char));
    return result;
  };
  console.log(evenChars("a"));
  
  
  // Task 7) => https://www.codewars.com/kata/545a4c5a61aa4c6916000755
  
  function gimme(array) {
    let dorted = array.sort((a, b) => a - b);
    return array.indexOf(dorted[1]);
  }
  console.log(gimme([2, 3, 1]));
  
  
  //Task 8) => https://www.codewars.com/kata/578553c3a1b8d5c40300037c
  
  function binaryEquivalent(array) {
    let join = parseInt(array.join(""), 2);
    return join;
  }
  console.log(binaryEquivalent([0, 1, 0, 0]));
  
  
  //Task 9) => https://www.codewars.com/kata/585d7d5adb20cf33cb000235
  
  function findUnip(array) {
    return array.find((item) => {
      return array.indexOf(item);
    });
  }
  console.log(findUnip([1, 1, 1, 1, 3, 1, 1, 1]));
  
  
  //Task 10 => https://www.codewars.com/kata/581e014b55f2c52bb00000f8
  
  
  //Task 11) => https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
  
  function sort(array) {
    let mapped = array.map((item) => {
      let pair = item % 2 === 0 ? item : "";
      let odd = item % 2 === 1 ? item : "";
      return pair, odd;
    });
    return mapped;
  }
  console.log(sort([5, 7, 6, 3, 4]));
  
  
  //Optional Advanced
  
  
  //Task 2) => https://www.codewars.com/kata/52597aa56021e91c93000cb0
  
  function moveZeros (array) {
    let result = array.filter(function (num){return num !== 0;});
    let zeros = array.filter(function (num){return  num === 0});
  
    return result.concat(zeros);
  }
  console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
  
  
  
  
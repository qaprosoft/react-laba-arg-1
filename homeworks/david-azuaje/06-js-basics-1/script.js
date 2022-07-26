// Task 1) => http://www.codewars.com/kata/opposite-number

function oppositeNumber(number) {
    return number * -1;
  }
  console.log(oppositeNumber(-1));
  
  
  // Task 2) => https://www.codewars.com/kata/basic-mathematical-operations
  
  function basicMathematicalOperations(sign, value1 = 0, value2 = 0) {
    if (sign === "+") {
      return value1 + value2;
    }
    if (sign === "-") {
      return value1 - value2;
    }
    if (sign === "*") {
      return value1 * value2;
    }
    if (sign === "/") {
      return value1 / value2;
    }
  
    if (sign !== "+" && "-" && "*" && "/") {
      return "Invalid operator";
    }
  }
  console.log(basicMathematicalOperations("+", 2, 8));
  
  
  // Task 3) => http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
  
  const printArrayWithCommaDelimiters = (array) => array.join(",");
  console.log(printArrayWithCommaDelimiters(["h", "o", "l", "a"]));
  
  
  // Task 4) => http://www.codewars.com/kata/transportation-on-vacation
  
  function calculatorRentCar(days = 0) {
    let discount = 0;
    let rentCarcost = 40;
    if (days >= 7) {
      discount = 50;
    } else if (days >= 3) {
      discount = 20;
    }
    let total = days * rentCarcost - discount;
  
    return total;
  }
  console.log(calculatorRentCar());
  
  
  // Task 5) => http://www.codewars.com/kata/calculating-with-functions
  
  const zero = (f) => (f ? f(0) : 0);
  
  const one = (f) => (f ? f(1) : 1);
  
  const two = (f) => (f ? f(2) : 2);
  
  const three = (f) => (f ? f(3) : 3);
  
  const four = (f) => (f ? f(4) : 4);
  
  const five = (f) => (f ? f(5) : 5);
  
  const six = (f) => (f ? f(6) : 6);
  
  const seven = (f) => (f ? f(7) : 7);
  
  const eight = (f) => (f ? f(8) : 8);
  
  const nine = (f) => (f ? f(9) : 9);
  
  const plus = (n1) => {
    return function (n2) {
      return n2 + n1;
    };
  };
  const minus = function (n1) {
    return function (n2) {
      return n2 - n1;
    };
  };
  const times = function (n1) {
    return function (n2) {
      return n2 * n1;
    };
  };
  const dividedBy = function (n1) {
    return function (n2) {
      return Math.floor(n2 / n1);
    };
  };
  console.log(five(times(six())));
  
  
  // Task 6) => https://www.codewars.com/kata/get-the-middle-character
  
  function getMiddle(string) {
    let lengthOfWord = string.length;
    let length;
    let position;
  
    if (lengthOfWord % 2 == 1) {
      position = lengthOfWord / 2;
      length = 1;
    } else {
      position = lengthOfWord / 2 - 1;
      length = 2;
    }
  
    return string.slice(position, position + length);
  }
  console.log(getMiddle("test"));
  
  //Task 7) => Do it again
  
  
  //Task 8) => https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
  
  function countWords(string) {
    let stringToArray = string.split(" ");
    let index = stringToArray.map((elem, index) => {
      return index + 1;
    });
    return Number(index.length);
  }
  console.log(countWords("Hello everyone"));
  
  
  //Task 9) => https://www.codewars.com/kata/find-the-odd-int/
  
  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }
  console.log(findOdd([0,1,0,1,0]));
  
  //Task 10) => https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
  
  function findOutlier(integers){
    let pair = integers.filter(num => num % 2 === 0 );
    let odd = integers.filter(num => num % 2 !== 0);
    return (pair.length === 1) ? pair[0] : odd[0]
  }
  console.log(findOutlier([1,1,0,1,1]))
  
  //Task 11) => Do it
  
  
  // Task 12) https://www.codewars.com/kata/filter-the-number
  const filterNumber = (string) => string.match(/[0-9]/g);
  console.log(filterNumber("093d"));
  
  
  //Task 13) => https://www.codewars.com/kata/n-th-fibonacci
  
  function nthFibo(n) {
    if (n <= 1) return 0;
    if (n === 2) return 1;
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
  console.log(nthFibo(12));
  
  //Task 14) => Do it
  
  
  // Task 15) => https://www.codewars.com/kata/duplicate-encoder
  function duplicateEncode(word){
    // ...
    let lowWord = word.toLocaleLowerCase()
    return lowWord.split("")
      .map(s => lowWord.indexOf(s) === lowWord.lastIndexOf(s) ? '(' : ')')
      .join('')
  }
  console.log(duplicateEncode("Success"));
  
  
  //Task 16) => https://www.codewars.com/kata/5693239fb761dc8670000001
  
  
  
  // Task 18) => https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
  
  function wave(str) {
    var result = [];
  
    for (var i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i)) {
        result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
      }
    }
  
    return result;
  }
  console.log(wave('Hello'));
  
  
  //Task 19) => https://www.codewars.com/kata/59d398bb86a6fdf100000031
  
  function stringBreakers(n, string){
    let str = ''
    let splitteded = string.split("");
    for(const x of string){
      str += splitteded.splice(0, n).join('')+'\n'
    }
    return str.trim()
  }
  console.log(stringBreakers(3,"David"));
  
  
  
  // Task 20) => https://www.codewars.com/kata/514a024011ea4fb54200004b
  
  const domainName = (url) =>
    url
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .split(".")[0];
  
  console.log(domainName("http://cnet.com"));
  
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
  if (s.length % 2 === 0) {
    const evenLength = s.length;
    const evenHalfLength = evenLength / 2;
    const evenIndex = s.substr(evenHalfLength - 1, 2);
    return console.log(evenIndex);
  } else {
    const oddLength = s.length;
    const oddHalfLength = Math.trunc(oddLength / 2);
    const oddIndex = s.charAt(oddHalfLength);
    return console.log(oddIndex);
  }
}

// Task 7 - http://www.codewars.com/kata/partition-on

// Task 8 - https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript

let string = 'HelloWordls';

function countWords(str) {
  let toRemove = '';
  let counter = 0;
  let counterSepareteWords = 0;
  let regex2 = /([a-z])([A-Z])/g; //Numbers counting as lowercase characters
  let isCamelCase = /[\s_-]/g; //Check if the string has whitespaces, "-" or "_"

  // Function for non-whitespace
  function nonWhitespace(str) {
    let separateWords = str.replace(regex2, '$1 $2');
    let finalResult = separateWords.charAt(0).toUpperCase() + separateWords.slice(1);

    let arrSeparetaWords = finalResult.split(' ');
    console.log(finalResult.split(' '));
    console.log(arrSeparetaWords.length);

    arrSeparetaWords = arrSeparetaWords.filter((el) => {
      return el != toRemove;
    });
    for (let i = 0; i < arrSeparetaWords.length; i++) {
      counterSepareteWords++;
    }
    //     return counterSepareteWords;
  }

  if (!str.match(isCamelCase)) {
    nonWhitespace(str);
    return counterSepareteWords;
  } else {
    //   Convert the string into an array
    let arrString = str.split(' ');

    //   Filter method to delete white spaces
    arrString = arrString.filter((el) => {
      return el != toRemove;
    });

    //   Strings counter
    for (let i = 0; i < arrString.length; i++) {
      counter++;
    }
  }
  return counter;
}

console.log(countWords(string));

// Task 9 - https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  A.sort();
  let elements = [];
  let elementsRepeat = [];
  let counter = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] === A[i]) {
      counter++;
    } else {
      elements.push(A[i]);
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

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
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
  let split = value.split('');
  // console.log(split)

  let map = split.map((el) => {
    if (!isNaN(parseInt(el))) {
      // console.log(el)
      return el;
    }
  });

  let numbers = map.filter((el) => {
    return el != undefined;
  });

  // console.log(numbers)
  return parseInt(numbers.join(''));
};

// Task 20 - https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

let pagina = 'https://www.codewars.com';
let spliteado = pagina.split('');
spliteado;
console.log(spliteado.splice());

if (spliteado.includes('h')) {
  console.log('contiene');
}

// function domainName(url){
//   let http = "http://"
//   let www = "www."

//   if (url.includes(http)){
//     console.log("incluye 'http://'")
//   }
//   return dominio
// }

// console.log(domainName(dominio))

// funcion que elimina el "HTTPS://" O "HTTP://" O "WWW."
let link = 'https://www.prueba.comfdfds';

let regexWWW = /\bwww\b/g;
let regexHttp = /\bhttp:\b/g;
let regexHttps = /\bhttps:\b/g;
let regexCom = /\b.com\b/g;

function deleteProtocol(link) {
  let withoutHttp = link.split(regexHttps).join('');
  console.log(withoutHttp);
  link = withoutHttp;
  let withoutWWW = link.split('www.').join('');
  withoutWWW;
}

deleteProtocol(link);

function deleteWWW(link) {
  let withoutWWW = link.split('www.').join('');
  console.log(withoutWWW);
}

deleteWWW(link);

let url = 'http://www.prueba.com';
console.log(url.slice(0, 7));

function obtainDomine(url) {
  if (url.includes('http://')) {
    let replaceHTTP = url.replace('http://', '');
    return replaceHTTP;
  }

  if (url.includes('www.')) {
    let replaceWWW = url.replace('www.', '');
    return replaceWWW;
  }

  if (url.includes('.com')) {
    let replaceWWW = url.replace('.com', '');
    return replaceWWW;
  }
}

console.log(obtainDomine(url));

if (arr.toString().includes('http://')) {
  let replaceHTTP = url.replace('http://', '');
  replaceHTTP;
}

// if (url.includes("http://")){
//   let replaceHTTP = url.replace("http://", "")
//   replaceHTTP

// **********************************************************
function eliminaWWW(www) {
  // separo los caracteres de mi url
  let split = www.split('');
  split;

  let splice = split.splice(0, 4); //obtengo un array con mis elementos eliminados
  let join = splice.join(''); // uno los elementos del array y lo transformo a un string

  if (www.includes(join)) {
    // compruebo que mi url tenga los elementos de mi array por splice
    console.log('incluye el www');

    let eliminoWWW = www.replace(join, '');
    eliminoWWW; //elimino mi join de mi url y obtengo la url sin el WWWW
  }
}
eliminaWWW(url);

// funcion para eliminar el ".COM"
function eliminoCom(com) {
  console.log(com.split(''));
}

eliminoCom(url);

// console.log(prueba.substring(4))

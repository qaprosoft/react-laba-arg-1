//task 1 http://www.codewars.com/kata/opposite-number

function opposite(number) {
    return (-number)
}


//task 2 http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  switch(operation) {
      case '+':
      return value1 + value2
      break;
      case '-':
      return value1 - value2
      break;
      case '*':
      return value1 * value2
      break;
      case '/':
      return value1 / value2
      break;
  }
}


//task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array){
    return array.toString()
}


//task 4 http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
    let cost = d * 40;
    if (d >= 7) {
        return cost - 50
    } else if (d >= 3) {
        return cost - 20
    } else return cost
}

//task 5 http://www.codewars.com/kata/calculating-with-functions

function calculateExpA(a, calculateExpB) {
    if (!calculateExpB) return a;
    else return calculateExpB(a);
  }
  
  
  
  function zero(calculateExpB) {
    return calculateExpA (0, calculateExpB)
  }
  function one(calculateExpB) {
    return calculateExpA (1, calculateExpB)
  }
  function two(calculateExpB) {
    return calculateExpA (2, calculateExpB)
  }
  function three(calculateExpB) {
    return calculateExpA (3, calculateExpB)
  }
  function four(calculateExpB) {
    return calculateExpA (4, calculateExpB)
  }
  function five(calculateExpB) {
    return calculateExpA (5, calculateExpB)
  }
  function six(calculateExpB) {
    return calculateExpA (6, calculateExpB)
  }
  function seven(calculateExpB) {
    return calculateExpA (7, calculateExpB)
  }
  function eight(calculateExpB) {
    return calculateExpA (8, calculateExpB)
  }
  function nine(calculateExpB) {
    return calculateExpA (9, calculateExpB)
  }
  
  
  
  function plus(b) {
    return function(a) {
      return a + b
    }
  }
  function minus(b) {
    return function(a) {
      return a - b
    }
  }
  function times(b) {
    return function(a) {
      return a * b
    }
  }
  function dividedBy(b) {
    return function(a) {
      return Math.floor(a / b)
    }
  }


//task 6 http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {

    if (s.length % 2 === 0) return (s[(s.length/2)-1] + s[s.length/2])
    else return s[Math.floor(s.length/2)]
}

//task 7 http://www.codewars.com/kata/partition-on

//task 8 http://www.codewars.com/kata/word-count

//task 9 https://www.codewars.com/kata/find-the-odd-int/

//task 10 https://www.codewars.com/kata/find-the-parity-outlier

//task 11 https://www.codewars.com/kata/zipwith

//task 12 https://www.codewars.com/kata/filter-the-number

var FilterString = function(value) {
    
    let regex = /[0-9]/g
    
    return Number(value.match(regex).join(""))
}



//task 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
    if (n === 1) return 0
    else if (n === 2) return 1
    else return nthFibo(n-1) + nthFibo(n-2)
}



//task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

//task 15 https://www.codewars.com/kata/duplicate-encoder

//task 16 https://www.codewars.com/kata/5693239fb761dc8670000001

//task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    const tower = []
    const stars = []
    const spaces = []

    for (let i = 1; i <= nFloors; i++){
        stars = '*'.repeat((2 * i) - 1)
        spaces = ' '.repeat(nFloors - i)
        tower.push(`${spaces}${stars}${spaces}`)
    } 
    return tower
}

//task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

//task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

//task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
    let regex = /.+\/\/|www.|\..+/g
    return url.replace(regex, '')
}

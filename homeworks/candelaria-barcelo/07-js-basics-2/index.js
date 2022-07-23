// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    const array = arr.filter(number => number>0)
    const result = array.reduce((number, accumulator) => {
      return accumulator = accumulator + number
    },0)
    return result
  }

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049


// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound){
    let N = bound;
    while (N > 0) {
      if (N % divisor === 0) {
        return N
      } 
      N--
    }
  }

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray){
    const answer = numbersArray.filter(number => number % 2 === 0);
    return answer
  }

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr){
    let input = arr;
    let result = [];
    while (input.length > 0) {
      result.push(Math.max.apply(Math, input))
      input = input.filter(number => number !== Math.max.apply(Math, input))
      result.push(Math.min.apply(Math, input))
      input = input.filter(number => number !== Math.min.apply(Math, input))
    }
    return result.filter(num => num !== Infinity) /* filter Infinity, which was added when there were an odd 
                                                    number of results in the input array. */
  };

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    if (string.length < 2 || string.length > 100) { 
      return "invalid string" 
    } else {
      const array = string.split("")
      const result = array.filter((char, i) => i % 2 !== 0);
      return result
    }
  }

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme (triplet) {
    const sortedArray = [];
    Object.assign(sortedArray, triplet)
    sortedArray.sort((a,b) => a-b);
    return triplet.indexOf(sortedArray[1])
  }

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    const binary = arr.join().replace(/,/g, "")
    return parseInt(binary, 2)
  };

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(array) {
    const counts = {};
      for (let i=0; i < array.length; i++) {
        counts[array[i]] = (counts[array[i]] || 0) + 1; 
      } 
    let answer = 0
      Object.entries(counts).forEach(entry => {
        if (entry[1] === 1) {
          answer = entry[0]
        }
      })
      return parseFloat(answer)
  }
  

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8


// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d


// OPTIONAL ADVANCED task 1 https://www.codewars.com/kata/515bb423de843ea99400000a


// OPTIONAL ADVANCED task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0


// OPTIONAL ADVANCED task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3


// OPTIONAL ADVANCED task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7



// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    const array = arr.filter(number => number>0)
    const result = array.reduce((number, accumulator) => {
      return accumulator = accumulator + number
    },0)
    return result
  }

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(array){
    let lengthOfLoop = array.length
    if (array.length % 2 !== 0) {
      lengthOfLoop = array.length - 1
    }
    let count = 0;
    for (let i=0; i < lengthOfLoop; i = i+2) {
      if (array[i+1] - array[i] === 1 || array[i+1] - array[i] === -1) {
        count++
      } 
    }
    return count
  };

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
function decipherThis(str) {
    let array = str.split(" ")
    const answer = array.map(word => {
      let realWord = word.replace(word.match(/\d+/), String.fromCharCode(word.match(/\d+/)))
      if (realWord.length > 2) {                      
        return realWord.slice(0, 1) + realWord.slice(realWord.length-1, realWord.length) + realWord.slice(2, realWord.length-1) + realWord.slice(1, 2)
      } else {
        return realWord
      }
    })
    return answer.join(" ")
  }; 

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    const sortedOddNumbers = array.filter(number => number % 2 !== 0).sort((a,b) => a-b)
    const answer = [];
    let indexOfSortedOddNumbers = 0
    for (let i=0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        answer.push(array[i])
      } else {
        answer.push(sortedOddNumbers[indexOfSortedOddNumbers]);
        indexOfSortedOddNumbers++
      }
    }
    return answer
  }

// OPTIONAL ADVANCED task 1 https://www.codewars.com/kata/515bb423de843ea99400000a


// OPTIONAL ADVANCED task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
    const trueIndexes = []
    arr.forEach(function(item, i) {
      if (item === 0) { 
        arr.push(item) 
        trueIndexes.push(i)
      }
    })
    trueIndexes.reverse(); // reversing so that the splice will work, otherwise indexes would be moved
    trueIndexes.forEach(function(index) {
      arr.splice(index, 1);
    })
    return arr
  }

// OPTIONAL ADVANCED task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
    let newArray = []
    // for each word in the array
    for (let i=0; i < arr.length; i++) {
      // convert it to lower case and split into an array for each letter
      const lowerCaseItem = arr[i].toLowerCase().split("")
      let uniqueCharacters = new Set();
      // add each character of the word to a set, to find unique characters
      const findUniqueCharacters = lowerCaseItem.filter(letter => {
        if (uniqueCharacters.has(letter)) { 
          return false 
        } else if (letter !== ' ' && letter !== '') {
          uniqueCharacters.add(letter)
        }
      }); 
      // push each unique character to an array: wordArray
      let wordArray = []
      for (let value of uniqueCharacters) {
        wordArray.push(value)
      }
      // sort each character so that each word with = characters will seem identical
      wordArray.sort(); 
      // join each character into a word and push each word to the newArray
      newArray.push(wordArray.join('')); 
    }
    // now we will check for unique / repeated words
    let uniqueWords = new Set();
    let repeatedWord = []
    // add each unique word to the set, if it's repeated push to repeatedWord
    const findUniqueWords = newArray.filter(word => {
      return uniqueWords.has(word) ? repeatedWord.push(word) : uniqueWords.add(word)
    }); 
    
    let indexOfAnswer = 0
    // find the word which is not the repeatedWord and return its index
    const findUniqueWord = newArray.map((word, index) => {
      if (word !== repeatedWord[0]) { indexOfAnswer = index } 
    }); 
    return arr[indexOfAnswer]
  }
  

// OPTIONAL ADVANCED task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7



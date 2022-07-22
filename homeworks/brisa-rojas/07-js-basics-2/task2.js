'use strict';

//Codewars tasks
// 1 - https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let accumulator = 0;
    arr.forEach(x => accumulator += x * (x>0));
    return accumulator;
}

// 2 - https://www.codewars.com/kata/5a3e1319b6486ac96f000049
// 3 - https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound){
    return divisor * Math.floor(bound/divisor);
}

// 4 - https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray){
    return numbersArray.filter(number => !(number % 2));
}

// 5 - https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr){
    let solved = [];
    let maximum;
    let minimum;

    arr.sort(compare); //ordered from min to max
    
    while (arr.length){
        maximum = arr[arr.length-1];
        solved.push(maximum);
        arr.pop();
        if (arr.length){
            minimum = arr[0];
            solved.push(minimum);
            arr.shift();  
        }
    }
    
    return solved; 
}
function compare(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;  
}

// 6 - https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    let even = [];
  
    //checks length
    if (string.length > 100 || string.length < 2){
        return "invalid string";
    }

    string.split('');
    for (let i = 1; i<string.length; i +=2){
        even.push(string[i]);
    }
    
    return even;   
}

// 7 - https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme (triplet) {
    let bound;
    let indexes = [0,1,2];
    
    // delete min index from indexes
    bound = Math.min.apply(null, triplet);
    indexes.splice(indexes.indexOf(triplet.indexOf(bound)),1);
    
    //delete max index from indexes
    bound = Math.max.apply(null, triplet);
    indexes.splice(indexes.indexOf(triplet.indexOf(bound)),1);
    return indexes[0];
}

// 8 - https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''),2);
};

// 9 - https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    let unique;
    
    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
            unique = arr[i];
        }
    }

    return unique;
}

// 10 - https://www.codewars.com/kata/581e014b55f2c52bb00000f8


// 11 - https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    let odds = [];
  
    // make an array with all odd numbers
    array.forEach(function(num){
        if (num%2){ odds.push(num);}
        return;
    })
    
    // order the odd numbers
    odds.sort(compare);
    
    
    //replace from max to min odd number
    for(let i = array.length - 1; i > -1 ; i--){
        if (array[i]%2){
            array[i] = odds[odds.length-1];
            odds.pop();
        }
    }

    return array;
}
              
function compare(a, b){
    if (a<b) { return -1; }
    else if (a>b) { return 1; }
    else {return 0;}
}

/*
faltan la 5, 7, 8(esta esta bien pero le falta eso de los non-whitespaces), 11, 13
*/

//1.
function opposite(number){
    return - number;
}

//2. 
function basicOp(operation, value1, value2){
   if(operation === '+') return value1 + value2;
    else if(operation === '-') return value1 - value2;
    else if(operation === '*') return value1 * value2;
    else if(operation === '/') return value1 / value2;
    else return console.error("operator error");
}

//3.
function printArray(array){
    return array.toString();    
}

//4.
function rentalCarCost(d) {
    if(d >= 7){
        return d * 40 - 50;
    }
    if(d >= 3){
        return d * 40 -20;
    }
    return d * 40;
}

//5.    LATER
function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

//6.
function getMiddle(s)
{
  const middle = Math.floor(s.length / 2);

  if(s.length % 2 === 0) return s[middle -1] + s[middle];
  else return s[middle];
}

//7.
function partitionOn(pred, items) {
}

//8.   VER SI ES ESTA PORQUE EL LINK QUE PASARON DA 404
function countWords(str) {
    str.trim();
    let wordCounter = 0;
    let lastChar;
    for (let i = 0; i < str.length; i++) {
        
        let current = str[i];

        if(i === 0){
            lastChar = current;
        }

        if(current === " " && lastChar !== " "){
            wordCounter++;
        }
        if(i === str.length -1){
            if(str[str.length-1] !== " "){
                wordCounter++;
            }
        }

        lastChar = current;
        
    }
    return wordCounter;
}

//9.
function findOdd(A) {
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
        let current = A[i];
        for (let j = 0; j < A.length; j++) {
            if(A[j] == current) counter++;
        }
        if(counter % 2 !== 0) return current;
        
    }
    return 0;
}

//10.
function findOutlier(integers){
    let odd = 0;
    let even = 0;
    let outlierEven;
    let outlierOdd;
    for (let i = 0; i < integers.length; i++) {
        if(integers[i] % 2 === 0){
            outlierEven = integers[i];
            even++;
        }
        else{
            outlierOdd = integers[i];
            odd++;

        }
        
    }
    if(even === 1) return outlierEven;
    else return outlierOdd;
}

//11.
function zipWith(fn,a0,a1) {
    return [];
}

//12.
var FilterString = function(value) {
    let numbers = ""; 
    for (let i = 0; i < value.length; i++) {
        if(!isNaN(value[i])) numbers += value[i];
    }
    return +numbers;  
}

//13.
function nthFibo(n) {
}

//14.


//15.  REHACER
function duplicateEncode(word){
    let result = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        debugger;
        for (let j = 0; j < word.length; j++) {
            if( i !== j){
                if(char == word[j]){
                    result += ')';
                    break;
                }
            }    
                    
        }

        result += '(';
        
    }
    return result;
}
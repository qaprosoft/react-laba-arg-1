'use strict'

// KATA 1. https://www.codewars.com/kata/opposite-number
function opposite(number) {
    number *= -1;
    return number;
  }

// KATA 2. https://www.codewars.com/kata/basic-mathematical-operations
function basicOperations(operator, value1, value2) {
  switch(operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case  '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 'Invalid input';
  }
}

// KATA 3. http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
//From my understanding, this kata is asking for the string only, not for me to print it out.
function printArray(array){
  return array.toString();
}

// KATA 4. http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  let carCost = d * 40;
  if (d >= 7){
    carCost -= 50;
  }
  else if (d>=3){
    carCost -=20;
  }
  return carCost;
}

// KATA 5. http://www.codewars.com/kata/calculating-with-functions
// KATA 6. http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  let middleChar = ""; //initialize empty string
  len = s.length;
  if ( (len % 2) == 0) { // if it's even
    middleChar += s[len / 2 -1];
    middleChar += s[len /2];
  }
  else { //if it's odd
    middleChar += s[(len -1)/2];
  }
  return middleChar;
}

// KATA 7. https://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  
  let mapped = items.map(pred); // items mapped to T and F 
  items, mapped = order(items, mapped);
  return mapped.indexOf(true); 
}

function order(arr, arrBoolean){
  let numberOfFalses = 0;
  
  for (let i=0; i < arr.length; i++ ){
    if (!arrBoolean[i]){numberOfFalses++;}
  }
  
  if(numberOfFalses){
    while(numberOfFalses){   
    
      let index = arrBoolean.lastIndexOf(false);
      // adds "false" element to the start
      arr.unshift(arr[index]);    
      arrBoolean.unshift(arrBoolean[index]);

      // deletes original appeareance of "false" element
      index++; // index has incremented because of the addition at the beggining
      arr.splice(index, 1);
      arrBoolean.splice( index , 1);
    
      numberOfFalses--; 
    }
    
  }
  
  return arr, arrBoolean;
}
// a faster version (because of the use of push instead of unshift is the following), it follows the same logic as 
//the previous one but adds the numbers to the end of the array instead
function partitionOn(pred, items) {
  
  let mapped = items.map(pred); // items mapped to T and F 
  items, mapped = order(items, mapped);
  return mapped.indexOf(true); 
}

function order(arr, arrBoolean){
  let numberOfTrues = 0;
  
  for (let i=0; i < arr.length; i++ ){
    if (arrBoolean[i]){numberOfTrues++;}
  }
  
  if(numberOfTrues){
    while(numberOfTrues){   
    
      let index = arrBoolean.indexOf(true);
      // adds "true" element to the end
      arr.push(arr[index]);    
      arrBoolean.push(arrBoolean[index]);

      // deletes original appeareance of "true" element
      arr.splice(index , 1);
      arrBoolean.splice(index , 1);
    
      numberOfTrues--; 
    }
    
  }
  
  return arr, arrBoolean;
}


// KATA 8.	http://www.codewars.com/kata/word-count
// https://www.codewars.com/kata/570cc83df616a85944001315 -- the provided link is broken, I replaced it with the one below;

// KATA 9.	https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let appearances = {};
  
  A.forEach(function(num){
  appearances[num] = (appearances[num] || 0) + 1;
  });

  for (num in appearances){
    if(appearances[num]%2){ 
      return parseInt(num); //parsed to an int
    }
  }
}

// KATA 10.	https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers){
  let even = [];
  let odd = [];
  let outlier ;
  
  //separate in odd and even integers
  integers.forEach( function(num){
    if(num % 2){ odd.push(num); }
    else { even.push(num) };
  })
  
  //there will be only 1 array with length = 1
  if (even.length - 1) { // even.length should be more than 2 to be true
    outlier = odd[0];
  }
  else { 
    outlier = even[0];
  }
  
  return outlier;
}

// KATA 11: https://www.codewars.com/kata/zipwith
function zipWith(fn,a0,a1) {
  let len = Math.min(a0.length, a1.length);
  let zipped = [];
  
  for (let i = 0; i < len; i++){
    zipped.push(fn(a0[i], a1[i]));
  }
  return zipped;
}

// KATA 12: https://www.codewars.com/kata/filter-the-number
function FilterString (str) {
  let filtered='';
  for (i in str){
    if (str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48){
      filtered += str[i];
    }
  }
  return parseInt(filtered);
}

// KATA 13: https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  if (n < 2) {
    return 0;
  }
  else if (n == 2){
    return 1;
  }
  else {
      return nthFibo(n-1) + nthFibo(n-2);
  }
}

// KATA 14.	https://www.codewars.com/kata/cat-and-mouse-2d-version/
function getPosition(map,animal){
  let numberOfRows = 1;
  
  // rows
  while (map.includes("\n")){
    numberOfRows++;
    map=map.replace("\n","");
  }
  
  row = Math.floor(map.indexOf(animal) / (map.length/numberOfRows));
  col = map.indexOf(animal) % (map.length/numberOfRows);
  return [row, col] ;
}

function catMouse(map,moves){
  // check if cat and mouse are present
  if (!(map.includes('C')&& map.includes('m'))){
    return "boring without two animals"
  }
  
  let C; // [cat row,  cat col]
  let m; // [mouse row, mouse col]

  
  // check position in map
  C = getPosition(map,'C'); 
  m= getPosition(map,'m');

  
  //cat has to move |C[0]-m[0]| + |C[1]-m[1]| to get to mouse
  moves -= Math.abs(C[0]-m[0]) + Math.abs(C[1]-m[1]);
  
  if (moves < 0){
    return 'Escaped!'
  }
  else{
    return "Caught!"
  }  
}

// KATA 15.	https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word){
  let encoded;
  let repeated = {};
  
  word = word.toUpperCase();
  word = word.split('');
  
  
  word.forEach(function(letter){
  repeated[letter] = (repeated[letter] || 0) + 1; // if letter is not in repeated, it wil be initialized  
  });

  encoded = word.map(function(letter){
    if (!(repeated[letter]-1)){return "(";}
    return ")";
  });
  encoded = encoded.join('');
  return encoded;
}

// KATA 16.	https://www.codewars.com/kata/5693239fb761dc8670000001
// KATA 17.	https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// KATA 18.	https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function makeLetterStand(word, pos){
  //pos is index of the letter that's going to be uppercase
  word = word.split('')
  if (word[pos] == ' ' || word[pos]== "\n" || word[pos] == ''){ // if character is not a letter (there may be other cases)
    return "?"; //arbitrary symbol to represent non-letter
  }
  word[pos] = word[pos].toUpperCase();
  word = word.join('');
  return word;
}
function wave(str){
  let wavedWord = [];
  
  for (index in str){
    if (makeLetterStand(str,index) !== "?"){
      wavedWord.push(makeLetterStand(str,index));
    }
  }
  return wavedWord;
}
// KATA 19.	https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string){
  let brokenParts = [];
  let numberOfBrokenParts;

  string = string.split(/\s/); //removes all spaces
  string= string.join(''); // cast into string again
  
  
  numberOfBrokenParts =  Math.floor(string.length / n) ; 
  
  // for "whole" parts
  for (let i = 0 ; i < numberOfBrokenParts ; i++){
    brokenParts.push(string.slice( n*i , n*(i+1)));
    if (i !== (numberOfBrokenParts-1)){ //if it's not last iteration
      brokenParts.push('\n');      
    }
  }
  // for remainder characters}
  if (string.length % n){
    brokenParts.push('\n');
    brokenParts.push(string.slice(n*numberOfBrokenParts));
  }  
  
  
  brokenParts = brokenParts.join('');
  return brokenParts;
  
}
// KATA 20.	https://www.codewars.com/kata/514a024011ea4fb54200004b



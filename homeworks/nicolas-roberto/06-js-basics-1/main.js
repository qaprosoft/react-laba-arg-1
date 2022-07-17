// 1 katas http://www.codewars.com/kata/opposite-number

let oppositeNumber = function (number){
    return number *-1
}

//console.log (oppositeNumber(15))
//console.log (oppositeNumber(-15))

// 2 katas http://www.codewars.com/kata/basic-mathematical-operations

let mathematicalOperations = function (operator, value1, value2){
if (operator === "+"){
    return value1 + value2
}else if (operator === "-"){
    return value1 - value2
}else if (operator === "*"){
    return value1 * value2
}else if (operator === "/"){
    return value1 / value2
}
}

//console.log (mathematicalOperations("+", 3, 2))

// 3 katas http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

let arrayWithComma= [];
let arrayOfElements = ["h","o","l","a"];
arrayWithComma = arrayOfElements.join (",");

//console.log(arrayWithComma)

// 4 katas http://www.codewars.com/kata/transportation-on-vacation

let carRent = function (days){
    let dayPrice = 40;
    if (days > 7){
        return (days * dayPrice) - 50
    } else if (days > 3){
        return (days * dayPrice) - 20
    } else{
        return days * dayPrice
    }
}

//console.log(carRent(8))

// 5 katas https://www.codewars.com/kata/calculating-with-functions

let zero = function (){
    return 0
} 

let one = function (){
    return 1
} 

let two = function (){
    return 2
} 

let three = function (){
    return 3
} 

let four = function (){
    return 4
} 

let five = function (){
    return 5
} 

let six = function (){
    return 6
} 

let seven = function (){
    return 7
} 

let eight = function (){
    return 8
} 

let nine = function (){
    return 9
} 

let plus = function (){
    return "+"
} 

let minus = function (){
    return "-"
} 

let times = function (){
    return "*"
} 

let dividedBy = function (){
    return "/"
} 

let result = function (leftOperand, operation, rigthOperand){
   if (operation === "+"){
        return (leftOperand + rigthOperand)
    }else if (operation === "-"){
        return (leftOperand - rigthOperand)
    }else if (operation === "*"){
        return (leftOperand * rigthOperand)
    }else if (operation === "/"){
        return Math.round(leftOperand / rigthOperand)
    }
}

//console.log(result(nine(),plus(),two()))

// 6 kata https://www.codewars.com/kata/get-the-middle-character

let middleLetter= []
let twoMiddleLetter = []
let position = 0
let findMiddleLetter = function (word){
    //if the word has one middle letter
    if (word.length % 2 === 1){
        position = Math.round(((word.length)/2));
        middleLetter=word[position-1]
        //it returns the middle letter
        return middleLetter
    } else{
        //if the word has two letters in the middle
        position =(word.length)/2;
        //it pushes both middle letters into an array
        middleLetter.push(word[position-1])
        middleLetter.push(word[position])
        //then joins both letters so they won't be two elements of an array 
        //and erases the comma
        return twoMiddleLetter = middleLetter.join('')
    }
    
}

console.log(findMiddleLetter("test"))
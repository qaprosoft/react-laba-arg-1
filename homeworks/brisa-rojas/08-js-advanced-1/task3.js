'use strict';

// Object for pluck and clone functions
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

// 1 - PLUCK
// Create a function to access the properties of an object.
function pluck(obj, key) {
  let searchedValue = nullValue;
  let keys = key.split('.');

  if (typeof obj === 'object' && obj !== null) {
    if (obj.hasOwnProperty(keys[0])) {
      // if keys[0] is a property of obj
      if (typeof obj[keys[0]] === 'object') {
        searchedValue = pluck(obj[keys[0]], keys.splice(1).join('.'));
      } else {
        searchedValue = obj[keys[0]];
      }
    }
  }

  return searchedValue;
}

const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null
//Other tests
console.log(pluck(user, 'username'));
console.log(pluck(user, 'preferences.sound.maxValue'));


// 2 - DEEP CLONE
//Create custom deep clone function.
function clone(obj){
    return JSON.parse(JSON.stringify(obj)); 
    // user obj is small enough to be cloned with JSON.parse/JSON.stringify approach
}

let clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70; // change the value of the sound.maxValue property of the cloned object

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// 5 - MERGED OBJECTS https://www.codewars.com/kata/merged-objects
function objConcat(arr){
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    for (let key in arr[i]){
      obj[key] = (arr[i])[key];
    }
  }
  return obj;
}

// 6 - NAMED ONE https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript 
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
    set(full) {
      if (full.includes(' ')){
        full = full.split(' ');
        this.firstName =  full[0];
        this.lastName =  full [1];
        full = full.join(' ');
      }
    },
  });
}

// this implementation passed all tests in codewars but testing it locally I found that allows for situations that should be invalid, for example

let person = new NamedOne('John', 'Doe');
console.log(person.fullName); // John Doe
person.firstName = '';
console.log(person.fullName); // Doe
person.firstName = 'I used';
person.lastName = 'a Multi Word String';
console.log(person.fullName); // I used a Multi Word String
person.fullName = 'Disaster happens when given a 3 words or longer name for full name';
console.log(person.fullName); // Disaster happens [when given a 3 words or longer name for full name is missing]


// OPTIONAL KATAS
// "THIS" IS AN OTHER SOLUTION https://www.codewars.com/kata/54834b3559e638b39d0009a2/javascript
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = first + ' ' + last;
  Object.freeze(this);
}

// HUMAN READABLE TIME https://www.codewars.com/kata/human-readable-time
function humanReadable (seconds) {
  let humanReadableTime= '';
  let hours;
  let minutes;
  
  //set hours
  hours = Math.floor(seconds/3600);
  if (hours < 10){
      humanReadableTime += '0' + hours;
  }
  else {
      humanReadableTime += hours;
  }

  seconds -= hours * 3600; // remove seconds corresponding to hours 
  
  humanReadableTime += ':'; // formating

  //set minutes
  minutes = Math.floor(seconds/60);
  if (minutes < 10){
      humanReadableTime += '0' + minutes;
  }
  else {
      humanReadableTime += minutes;
  }
  seconds -= minutes * 60; // remove seconds corresponding to minutes 
  
  humanReadableTime += ':'; // formating

  if (seconds < 10){
      humanReadableTime += '0' + seconds;
  }
  else {
      humanReadableTime += seconds;
  } //remaining should be below 60 secs

  return humanReadableTime;
}

console.log(humanReadable(360)); 

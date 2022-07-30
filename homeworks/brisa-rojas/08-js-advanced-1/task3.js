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

// 5 - MERGED OBJECTS 
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

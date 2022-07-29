// VARIABLE DECLARATIONS

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
// for pluck function
const randomValue = Math.random();
const nullValue = null;

// for clone function
let clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70; // change the value of the sound.maxValue property of the cloned object



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

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

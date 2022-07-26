// Test user

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

// 1. Pluck

function pluck(obj, props) {
  if (!obj) return null;

  let splittedProps = props.split('.');
  let cur = obj;

  for (let i = 0; i < splittedProps.length; i++) {
    // If the property doesn't exist it returns null
    if (!cur[splittedProps[i]]) {
      return null;
    }
    cur = cur[splittedProps[i]];
  }

  return cur;
}

// Test

const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// 2. Deep Clone

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Test

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

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

// 3.

function howLong(firstDate, secondDate) {
  let diffInSeconds = (firstDate.getTime() - secondDate.getTime()) / 1000;

  diffInMinutes = diffInSeconds / 60;

  const minutes = diffInMinutes % 60;

  let diffInHours = (diffInMinutes - minutes) / 60;

  const hours = diffInHours % 24;

  let diffInDays = (diffInHours - hours) / 24;

  let days = diffInDays % 365;

  if (diffInDays >= 365) {
    days = diffInDays + 1;
  }

  let difference = '';
  if (!days) {
    if (hours) {
      difference = difference.concat(`${hours} hour${hours > 1 ? 's' : ''} `);
    }

    if (minutes) {
      difference = difference.concat(`${minutes} minute${minutes > 1 ? 's' : ''} `);
    }
  } else {
    difference = difference.concat(`${days} day${days > 1 ? 's' : ''} `);
  }

  return `${difference}ago`;
}

let date1 = new Date(2021, 2, 23, 14, 0, 0); // Test date

let date2 = new Date(2021, 2, 24, 10, 30, 0);
console.log(howLong(date1, date2)); // 30 minutes ago

let date3 = new Date(2021, 2, 23, 13, 0, 0);
console.log(howLong(date1, date2)); // 1 hour ago

console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago

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

// Pluck test

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

// Deep Clone test

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// 3. A long time ago

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

// A long time ago test

let date1 = new Date(2021, 2, 23, 14, 0, 0); // Test date

let date2 = new Date(2021, 2, 23, 13, 30, 0);
console.log(howLong(date1, date2)); // 30 minutes ago

let date3 = new Date(2021, 2, 23, 13, 0, 0);
console.log(howLong(date1, date2)); // 1 hour ago

let date4 = new Date(2021, 2, 23, 11, 30, 0);
console.log(howLong(date1, date2)); // 2 hours 30 minutes ago

let date5 = new Date(2021, 2, 22, 14, 0, 0);
console.log(howLong(date1, date2)); // 1 day ago

let date6 = new Date(2020, 2, 23, 10, 0, 0);
console.log(howLong(date1, date2)); // 366 days ago

// 4. Random dates

function randomDate(date1, date2) {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();

  if (date1 > date2) return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
  if (date2 > date1) return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
}

// Random dates test

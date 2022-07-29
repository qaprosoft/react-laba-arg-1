// 1. Pluck
function pluck(obj, key) {
  let keys = key.split(".");
  let searchedValue = null;

  let value = (auxObj) => {
    for (atribute in auxObj) {
      let isInKeys = keys.some((e) => atribute === e);
      if (typeof auxObj[atribute] === "object" && isInKeys) {
        value(auxObj[atribute]);
      } else if (isInKeys) {
        searchedValue = auxObj[atribute];
      }
    }
  };

  value(obj);

  return searchedValue;
}

//2. Deep Clone
function clone(obj) {
  let stringOfObject = JSON.stringify(obj);
  return JSON.parse(stringOfObject);
}

//3. "A long time ago"
function moment(date, format) {
  let arr = format.split(/[/ :]/g);
  let objFormat = {};
  arr.forEach((e) => {
    let index = format.indexOf(e);
    objFormat[e] = date.substr(index, e.length);
  });
  return new Date(
    objFormat["YYYY"],
    objFormat["MM"] - 1,
    objFormat["DD"],
    objFormat["hh"] ?? 0,
    objFormat["mm"] ?? 0,
    objFormat["ss"] ?? 0
  );
}

function offset(date) {
  let response;
  const MMS_IN_MIN = 1000 * 60;
  const MIN_IN_HOUR = 60;
  const MIN_IN_DAY = 60 * 24;
  const NOW = new Date();
  const DIFF_TIME_MMS = Math.abs(NOW - date);
  const DIFF_MIN = Math.floor(DIFF_TIME_MMS / MMS_IN_MIN);

  if (DIFF_MIN < MIN_IN_HOUR) {
    response = DIFF_MIN + " minutes ago";
  }
  if (DIFF_MIN >= MIN_IN_HOUR) {
    response =
      Math.floor(DIFF_MIN / MIN_IN_HOUR) +
      " hours " +
      Math.floor(DIFF_MIN % MIN_IN_HOUR) +
      " minutes ago";
  }
  if (DIFF_MIN > MIN_IN_DAY) {
    response = Math.floor(DIFF_MIN / MIN_IN_DAY) + " days ago";
  }
  return response;
}

//4. Random dates
//Using moment() from task #3
function randomDate(date1, date2) {
  return new Date(Math.random() * (date2 - date1) + date1.getTime());
}

Date.prototype.format = (format) => {
  let dateItems = ["YYYY", "YY", "MM", "DD", "hh", "mm", "ss"];
  let entries = {
    DD: date.getDate(),
    MM: date.getMonth() + 1,
    YYYY: date.getFullYear(),
    YY: date.getFullYear().toString().substring(2),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  for (e of dateItems) {
    format = format.replace(e, entries[e]);
  }

  return format;
};

//## Code Wars

//5. Merged Objects https://www.codewars.com/kata/515bb423de843ea99400000a
function objConcat(objectsArray) {
  return Object.assign({}, ...objectsArray);
}

//6. "this" is an other problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
    set(_fullName) {
      _fullName = _fullName.split(" ");
      if (_fullName.length === 2) {
        [this.firstName, this.lastName] = _fullName;
      }
    },
  });
}

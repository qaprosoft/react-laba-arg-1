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

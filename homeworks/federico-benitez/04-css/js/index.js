function addListener() {
  const toggleButton = document.getElementById("toggleMode");
  toggleButton.addEventListener("click", toggleUIMode, false);
}

/**
 * Add or remove class on html document node to set as dark mode
 */
function changePageMode() {
  const pageElement = document.getElementById("page");

  if (isDarkMode()) {
    pageElement.classList.add("dark");
  } else {
    pageElement.classList.remove("dark");
  }
}

/**
 * Set on localstorage an item with key 'mode'
 * @param {'dark' | 'light'} modeSelected
 */
function setMode(modeSelected) {
  localStorage.setItem("mode", modeSelected);
}

/**
 * Check on localstorage if exists an item called mode
 * if not exist create a new item and set light as default
 * if the item has a different value than 'light' or 'dark', rewrite the item
 * otherwise returns the current item value
 * @returns {'dark' | 'light'}
 */
function getMode() {
  const mode = localStorage.getItem("mode");
  if (shouldInitialize(mode)) {
    setMode("light");
    return "light";
  }
  return mode;
}

function shouldInitialize(mode) {
  if (!mode) return true;
  if (mode !== "dark" && mode !== "light") return true;
}

function isDarkMode() {
  const mode = getMode();
  return mode === "dark";
}

function toggleUIMode() {
  if (isDarkMode()) {
    setMode("light");
  } else {
    setMode("dark");
  }
  changePageMode();
}

document.addEventListener("DOMContentLoaded", addListener, false);

function initialize() {
  getMode();
  changePageMode();
}

initialize();

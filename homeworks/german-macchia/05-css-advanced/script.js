const lightColor = "#e5e5e5";
const darkColor = "#0c151d";
const btnBgColorDarkMode = "#171f26";
const btnBgColorLightMode = "#ffffff";
const txtColorDarkMode = "#a3abb2";
const navTxtColorLightMode = "#19191b";
const prfBtnTxtColorLightMode = "#3d3d3d";
const subTitleTxtColorLightMode = "#575757";
const h1ColorLightMode = "#3d3d3d";
const h1ColorDarkMode = "#f1f2f4";
const buttonColorDarkMode = "#FFE071";
const buttonColorLightMode = "#fbd144";
const brightnessLightMode = 1;
const brightnessDarkMode = 2;

let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root);

function changeTheme() {
  let actualBgColor = rootStyle.getPropertyValue("--main-bg-color");

  if (actualBgColor == lightColor) {
    root.style.setProperty("--main-bg-color", darkColor);
    root.style.setProperty("--btn-bg-color", btnBgColorDarkMode);
    root.style.setProperty("sub-txt-color", txtColorDarkMode);
    root.style.setProperty("--nav-txt-color", txtColorDarkMode);
    root.style.setProperty("--h1-color", h1ColorDarkMode);
    root.style.setProperty("--prof-btn-color", txtColorDarkMode);
    root.style.setProperty("--brightness", brightnessDarkMode);
    root.style.setProperty("--yellow-btn-tone", buttonColorDarkMode);
  } else {
    root.style.setProperty("--main-bg-color", lightColor);
    root.style.setProperty("--btn-bg-color", btnBgColorLightMode);
    root.style.setProperty("sub-txt-color", subTitleTxtColorLightMode);
    root.style.setProperty("--nav-txt-color", navTxtColorLightMode);
    root.style.setProperty("--h1-color", h1ColorLightMode);
    root.style.setProperty("--brightness", brightnessLightMode);
    root.style.setProperty("--prof-btn-color", prfBtnTxtColorLightMode);
    root.style.setProperty("--yellow-btn-tone", buttonColorLightMode);
  }
}

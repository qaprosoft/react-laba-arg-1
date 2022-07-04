const lightColor = "#e5e5e5";
const darkColor = "#0c151d";
const btnBgColor_darkMode = "#171f26";
const btnBgColor_lightMode = "#ffffff";
const txtColor_darkMode = "#a3abb2";
const navTxtColor_lightMode = "#19191b";
const prfBtnTxtColor_lightMode = "#3d3d3d";
const subTitleTxtColor_lightMode = "#575757";
const h1Color_lightMode = "#3d3d3d";
const h1Color_darkMode = "#f1f2f4";
const brightness_lightMode = 1;
const brightness_darkMode = 2;

let r = document.querySelector(":root");
let rs = getComputedStyle(r);

function changeTheme() {
  let actualBgColor = rs.getPropertyValue("--main-bg-color");

  if (actualBgColor == lightColor) {
    r.style.setProperty("--main-bg-color", darkColor);
    r.style.setProperty("--btn-bg-color", btnBgColor_darkMode);
    r.style.setProperty("sub-txt-color", txtColor_darkMode);
    r.style.setProperty("--nav-txt-color", txtColor_darkMode);
    r.style.setProperty("--h1-color", h1Color_darkMode);
    r.style.setProperty("--prof-btn-color", txtColor_darkMode);
    r.style.setProperty("--brightness", brightness_darkMode);
  } else {
    r.style.setProperty("--main-bg-color", lightColor);
    r.style.setProperty("--btn-bg-color", btnBgColor_lightMode);
    r.style.setProperty("sub-txt-color", subTitleTxtColor_lightMode);
    r.style.setProperty("--nav-txt-color", navTxtColor_lightMode);
    r.style.setProperty("--h1-color", h1Color_lightMode);
    r.style.setProperty("--brightness", brightness_lightMode);
    r.style.setProperty("--prof-btn-color", prfBtnTxtColor_lightMode);
  }
}

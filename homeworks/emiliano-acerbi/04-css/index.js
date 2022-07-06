// Elements
const themeBtn = document.getElementById("themeBtn")
const themeBtnLight = document.getElementById("themeBtn-light")
const profileTitle = document.querySelector(".profile__title")
const breadCrumbs = document.querySelector(".breadcrumbs")
const breadCrumb = document.querySelector(".breadcrumbs__item")
const btn = document.querySelector(".buttons__btn-secondary")
const profileListLight = document.querySelector(".profile__list-light")
const profileListDark = document.querySelector(".profile__list")

// Variables
const BACKGROUND_COLOR_LIGHT = "#e9ebec"
const BACKGROUND_COLOR_DARK = "#0c151d"
const TEXT_COLOR_DARK = "#a3abb2"
const TEXT_COLOR_LIGHT = "#575757"
let darkMode = true

// Logic
themeBtn.addEventListener("click", () => toggleTheme())
themeBtnLight.addEventListener("click", () => toggleTheme())

const toggleTheme = () => {
  if (darkMode) {
    document.body.style.backgroundColor = BACKGROUND_COLOR_LIGHT
    document.body.style.color = TEXT_COLOR_LIGHT
    themeBtn.style.display = "none"
    themeBtnLight.style.display = "grid"
    profileTitle.classList.add("light")
    profileListLight.style.display = "flex"
    profileListDark.style.display = "none"
    btn.classList.add("light")
    breadCrumbs.classList.add("light")
    breadCrumb.classList.add("light")

    darkMode = !darkMode
    return
  } else {
    document.body.style.backgroundColor = BACKGROUND_COLOR_DARK
    document.body.style.color = TEXT_COLOR_DARK
    themeBtn.style.display = "grid"
    themeBtnLight.style.display = "none"
    profileTitle.classList.remove("light")
    profileListLight.style.display = "none"
    profileListDark.style.display = "flex"
    btn.classList.remove("light")
    breadCrumbs.classList.remove("light")
    breadCrumb.classList.remove("light")

    darkMode = !darkMode
    return
  }
}

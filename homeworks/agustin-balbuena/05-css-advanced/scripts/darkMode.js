//Primero: selecciono todos los elementos a los que le voy a aplicar la clase "dark-mode"
let body = document.body;
let toggleMode = document.getElementById("toggle-mode");
let nameInfo = document.querySelector(".name-info");
let carrerInfo = document.querySelector(".career-info");
let experienceInfo_li = document.querySelectorAll(".experience-info__list");
let profile_contactMe = document.querySelector(".profile__contact-me");
let tabs = document.querySelector(".tabs");
let tabs_portfolio = document.querySelector(".tabs__portfolio");
let tabs_skills = document.querySelector(".tabs__skills");
let footer = document.querySelector("footer");

//Segundo: a todos los elementos les agrego la misma clase pero del dark-mode
function toggleDarkMode() {
  body.classList.toggle("dark-mode__body");
  toggleMode.classList.toggle("dark-mode__toggleMode");
  nameInfo.classList.toggle("dark-mode__name-info");
  carrerInfo.classList.toggle("dark-mode__career-info");
  experienceInfo_li[0].classList.toggle("dark-mode__experience-info-list");
  experienceInfo_li[1].classList.toggle("dark-mode__experience-info-list");
  experienceInfo_li[2].classList.toggle("dark-mode__experience-info-list");
  profile_contactMe.classList.toggle("dark-mode__profile-contact-me");
  tabs.classList.toggle("dark-mode__tabs");
  tabs_portfolio.classList.toggle("dark-mode__tabs-portfolio");
  tabs_skills.classList.toggle("dark-mode__tabs-skills");
  footer.classList.toggle("dark-mode__footer");
}

//Selecciono el boton toggle y le invoco la funcion
let toggleDarkModeBtn = document.getElementById("toggle-mode");

toggleDarkModeBtn.addEventListener("click", toggleDarkMode);

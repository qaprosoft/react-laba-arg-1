let switchMode = document.querySelector(".btn-mode");
let switchModeDark = document.querySelector(".btn-mode__dark");
let mainInfo = document.querySelector(".main--information");
let mainInfoDark = document.querySelector(".main--information__dark");
let projectsButton = document.querySelector(".projects--button");
let projectsButtonDark = document.querySelector(".projects--buttonDark");
let footerWhite = document.querySelector(".footer--white");
let footerDark = document.querySelector(".footer--dark");
let profileInformation = document.querySelector(".profile--information");
let profileInformationDark = document.querySelector(
  ".profile--information__dark"
);

//Swith to dark mode
switchMode.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark--mode");
  switchModeDark.style.display = "inline-block";
  switchMode.style.display = "none";
  profileInformation.style.display = "none";
  profileInformationDark.style.display = "flex";
  mainInfoDark.style.display = "flex";
  mainInfo.style.display = "none";
  projectsButton.style.display = "none";
  projectsButtonDark.style.display = "flex";
  footerDark.style.display = "block";
  footerWhite.style.display = "none";
});

//Switch to light mode
switchModeDark.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark--mode");
  switchModeDark.style.display = "none";
  switchMode.style.display = "inline-block";
  profileInformation.style.display = "flex";
  profileInformationDark.style.display = "none";
  mainInfoDark.style.display = "none";
  mainInfo.style.display = "flex";
  projectsButton.style.display = "flex";
  projectsButtonDark.style.display = "none";
  footerDark.style.display = "none";
  footerWhite.style.display = "block";
});

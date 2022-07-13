switchTheme = () => {
  let page = document.querySelector(".page");
  let btn = document.querySelector(".button--white");
  let btnIcon = document.querySelector(".button__icon--grey");
  let text = document.querySelectorAll(
    ".main__button, .tab__button, .footer__text, .main__fact, .fact__strong, .header__subheading, .header__icon"
  );
  let buttons = document.querySelectorAll(
    ".main__button--white, .tabs__buttons-padding, .tab__button"
  );
  let title = document.querySelector(".header__heading");
  let portfolio = document.querySelector(".tabs__button--grey");
  let yellowText = document.querySelector(".main__button--yellow");
  page.classList.toggle("page--dark");
  btn.classList.toggle("button--dark");
  btnIcon.classList.toggle("button__icon--dark");
  text.forEach((element) => {
    element.classList.toggle("text--dark");
  });
  buttons.forEach((button) => {
    button.classList.toggle("button--dark");
  });
  title.classList.toggle("header__heading--dark");
  portfolio.classList.toggle("tabs__button--black");
  yellowText.classList.toggle("btn-yellow--dark");
};
window.onscroll = function () {
  scrollFunction();
};

scrollFunction = () => {
  btn = document.querySelector(".footer__button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

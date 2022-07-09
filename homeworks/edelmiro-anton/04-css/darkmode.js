const btnSwitch = document.querySelector(".btnSwitch");

btnSwitch.addEventListener("click", () => toggleDark());

const toggleDark = () => {
  document.body.classList.toggle("dark");
  document.body.classList.add("transition__dark");
};

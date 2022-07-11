const arrowContainer = document.getElementById("arrow");
const width = screen.width;

// Logic to check if screen width is <= 600px
const screenWidth = () => {
  if (width <= 600) {
    console.log(width);
    arrowContainer.classList.add("container__scrollTop");
    const imgArrow = document.createElement("img");
    // imgArrow.className = "arrowUp";
    imgArrow.src = "./img/arrow.png";
    imgArrow.width = 50;
    imgArrow.height = 50;
    imgArrow.style.position = "sticky";
    imgArrow.classList.add("arrow__img");
    arrowContainer.appendChild(imgArrow);
    console.log("hello");
  }
};
window.addEventListener("resize", screenWidth());

// Event to scroll to top
const arrow = document.querySelector(".arrow__img");
arrow.addEventListener("click", () => scroll());

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

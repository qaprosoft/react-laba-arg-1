document.querySelector(".mode").addEventListener("click", (e) => {
  document.body.classList.toggle("darkTheme");
});
document.querySelector('.backOnTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

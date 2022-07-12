function scrollDetect() {
  window.onscroll = function () {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    const button = document.getElementById('scrollButton');

    if (currentScroll > 30) {
      button.style.display = 'block';
      button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      button.style.display = 'none';
    }
  };
}

scrollDetect();

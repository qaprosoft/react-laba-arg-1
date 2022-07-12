function scrollDetect() {
  window.onscroll = function () {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0) {
      document.getElementById('scrollLoc').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };
}

scrollDetect();

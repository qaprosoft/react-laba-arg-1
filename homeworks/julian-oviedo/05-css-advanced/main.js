let btn = document.querySelector('#scrollUp');

btn.addEventListener('click', () => {
   document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
   })
})
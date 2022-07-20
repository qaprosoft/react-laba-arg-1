let btn = document.querySelector('#scrollUp');

btn.addEventListener('click', () => {
   document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
   })
})



const btnSwitch = document.querySelector('.header__button')


const buttonThemeImg = document.querySelector('.header__button-img')
const buttonThemeConteiner = document.querySelector('.header__button')
const profileh1 = document.querySelector('h1')
const profileh2 = document.querySelector('h2')
const profileFacts = document.querySelector('.profile-facts')
const buttonSecondary = document.querySelector('.firstbttn-container__btn--bg')
const conteiner = document.querySelector('.secondbttn-container')
const conteinerPortfolio = document.querySelector('.secondbttn-container__btn')
const conteinerSkills = document.querySelector('.secondbttn-container__btn--bg')
const footer = document.querySelector('footer')



btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('body--darktheme');
    buttonThemeImg.classList.toggle('header__button-img--dark')
    buttonThemeConteiner.classList.toggle('header__button--dark')
    profileh1.classList.toggle('container__title--dark')
    profileh2.classList.toggle('container__subtitle--dark')
    profileFacts.classList.toggle('profile-facts--dark')
    buttonSecondary.classList.toggle('firstbttn-container__btn--bg--dark')
    conteiner.classList.toggle('secondbttn-container--dark')
    conteinerPortfolio.classList.toggle('secondbttn-container__btn--dark')
    conteinerSkills.classList.toggle('secondbttn-container__btn--bg--dark')
    footer.classList.toggle('footer--dark')


    

})
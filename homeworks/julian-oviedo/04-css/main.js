

const btnSwitch = document.querySelector('.buttonTheme')


const buttonThemeImg = document.querySelector('.buttonTheme__Img')
const buttonThemeConteiner = document.querySelector('.buttonTheme')
const profileh1 = document.querySelector('.profileInformation__title')
const profileh2 = document.querySelector('.profileInformation__subtitle')
const profileFacts = document.querySelector('.profileFacts')
const buttonSecondary = document.querySelector('.button__primary--background')
const conteiner = document.querySelector('.conteiner')
const conteinerPortfolio = document.querySelector('.conteiner__portfolio')
const conteinerSkills = document.querySelector('.conteiner__skills')
const footer = document.querySelector('.footer')



btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('body--darktheme');
    buttonThemeImg.classList.toggle('buttonTheme__Img--dark')
    buttonThemeConteiner.classList.toggle('buttonTheme--dark')
    profileh1.classList.toggle('profileInformation__title--dark')
    profileh2.classList.toggle('profileInformation__subtitle--dark')
    profileFacts.classList.toggle('profileFacts--dark')
    buttonSecondary.classList.toggle('button__primary--background--dark')
    conteiner.classList.toggle('conteiner--dark')
    conteinerPortfolio.classList.toggle('conteiner__portfolio--dark')
    conteinerSkills.classList.toggle('conteiner__skills--dark')
    footer.classList.toggle('footer--dark')


    

})
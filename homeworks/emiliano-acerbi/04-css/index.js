// Elements
const themeBtn = document.getElementById('themeBtn')
const themeBtnLight = document.getElementById('themeBtn-light')
const headerTitle = document.querySelector('.header__title')
const breadCrumbs = document.querySelector('.main__breadcrumbs')
const breadCrumb = document.querySelector('.main__breadcrumb')
const btn = document.querySelector('.main__btn-secondary')
const headerListLight = document.querySelector('.header__list-light')
const headerListDark = document.querySelector('.header__list')

// Variables
const BACKGROUND_COLOR_LIGHT = '#e9ebec'
const BACKGROUND_COLOR_DARK = '#0c151d'
const TEXT_COLOR_DARK = '#a3abb2'
const TEXT_COLOR_LIGHT = '#575757'
let darkMode = true

// Logic
themeBtn.addEventListener('click', () => toggleTheme())
themeBtnLight.addEventListener('click', () => toggleTheme())

const toggleTheme = () => {
	if (darkMode) {
		document.body.style.backgroundColor = BACKGROUND_COLOR_LIGHT
		document.body.style.color = TEXT_COLOR_LIGHT
		themeBtn.style.display = 'none'
		themeBtnLight.style.display = 'grid'
		headerTitle.classList.add('light')
		headerListLight.style.display = 'flex'
		headerListDark.style.display = 'none'
		btn.classList.add('light')
		breadCrumbs.classList.add('light')
		breadCrumb.classList.add('light')

		darkMode = !darkMode
		return
	}

	if (!darkMode) {
		document.body.style.backgroundColor = BACKGROUND_COLOR_DARK
		document.body.style.color = TEXT_COLOR_DARK
		themeBtn.style.display = 'grid'
		themeBtnLight.style.display = 'none'
		headerTitle.classList.remove('light')
		headerListLight.style.display = 'none'
		headerListDark.style.display = 'flex'
		btn.classList.remove('light')
		breadCrumbs.classList.remove('light')
		breadCrumb.classList.remove('light')

		darkMode = !darkMode
		return
	}
}

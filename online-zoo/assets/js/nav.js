const navBtn = document.querySelector('.burger')
const navMenu = document.querySelector('.header__nav')
const body = document.body

function closeMenu() {
  body.classList.remove('nav-open')
  body.style.overflow = ''
  navMenu.style.display = 'none'
}

function openMenu(e) {
  setTimeout(() => {
    navMenu.style.display = ''
  }, 10)

  body.classList.toggle('nav-open')

  if (body.classList.contains('nav-open')) {
    body.style.overflow = 'hidden'
    document.querySelector('.header__overlay').onclick = () => {
      closeMenu()
    }
  } else {
    closeMenu()
  }
}

if (navBtn) {
  navBtn.addEventListener('click', openMenu)
}

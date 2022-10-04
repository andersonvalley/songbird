const navBtn = document.querySelector('.burger')

if (navBtn) {
  navBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
  })
}

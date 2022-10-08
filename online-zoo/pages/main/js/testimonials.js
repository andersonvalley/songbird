const progressList = document.querySelector('.testimonials__list')
const progressInput = document.querySelector('.testimonials__progress-input')

export function testimonialsSlider() {
  let width = 325

  if (window.innerWidth < 1599) {
    slide(width)
  } else {
    width = 297
    slide(width)
  }

  window.addEventListener('resize', () => {
    progressList.style.marginLeft = '0px'
    progressInput.value = 1
    let width = 325

    if (window.innerWidth < 1600) {
      slide(width)
    } else {
      width = 297
      slide(width)
    }
  })

  function slide(step) {
    const arr = []
    let inital = 0

    for (let i = 0; i <= progressInput.getAttribute('max'); i++) {
      let obj = {}

      obj.number = i

      if (i > 4) {
        obj.value = inital += step
      } else if (i <= 4) {
        obj.value = 0
      }

      arr.push(obj)
    }

    progressInput.addEventListener('input', (e) => {
      const inputValue = e.target.value

      if (e.target.value == arr[inputValue].number) {
        progressList.style.marginLeft = -arr[inputValue].value + 'px'
      }
    })
  }
}

// popup
export function showPopupReview() {
  const reviewItems = document.querySelectorAll('.testimonials__item')
  const popup = document.querySelector('.testimonials__popup')
  const body = document.body

  function closePopup() {
    body.classList.remove('review-open')
    body.style.overflow = ''
  }

  function openPopup(e) {
    if (window.innerWidth > 1000) return

    const parent = e.target.closest('.testimonials__item')
    const itemText = parent.querySelector('.testimonials__text').innerHTML
    const itemUserName = parent.querySelector('.testimonials__user-name').innerHTML
    const itemUserAvatar = parent.querySelector('img').getAttribute('src')
    const itemUserCity = parent.querySelector('.testimonials__user-city').innerHTML
    const itemUserTime = parent.querySelector('.testimonials__user-visit').innerHTML

    popup.querySelector('.testimonials__text').innerHTML = itemText
    popup.querySelector('.testimonials__user-name').innerHTML = itemUserName
    popup.querySelector('.testimonials__user-city').innerHTML = itemUserCity
    popup.querySelector('.testimonials__user-visit').innerHTML = itemUserTime
    popup.querySelector('.testimonials__user').querySelector('img').setAttribute('src', itemUserAvatar)
    body.classList.toggle('review-open')

    if (body.classList.contains('review-open')) {
      body.style.overflow = 'hidden'

      document.querySelector('.overlay').onclick = () => {
        closePopup()
      }
      document.querySelector('.testimonials__popup-close').onclick = () => {
        closePopup()
      }
    } else {
      closePopup()
    }
  }

  reviewItems.forEach((item) => {
    const onClickItem = (item) => {
      item.onclick = (e) => openPopup(e)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 1000) {
        progressList.style.marginLeft = '0px'
        progressInput.value = 1
        onClickItem(item)
      }
    })

    if (window.innerWidth < 1000) {
      onClickItem(item)
    }
  })
}

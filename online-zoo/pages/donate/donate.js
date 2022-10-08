function donate() {
  const donateItems = document.querySelectorAll('.progress__item')
  const inputAmount = document.querySelector('.amount')

  function removeActiveItem(item) {
    donateItems.forEach((item) => {
      item.classList.remove('progress__item-active')
    })
  }

  donateItems.forEach((item) => {
    item.addEventListener('click', () => {
      const amount = item.querySelector('.progress__item-price').innerHTML
      removeActiveItem(item)
      item.classList.add('progress__item-active')

      inputAmount.setAttribute('value', amount)
    })
  })

  inputAmount.addEventListener('input', (e) => {
    if (e.target.value.length > 4) e.target.value = e.target.value.substr(0, 4)

    donateItems.forEach((item) => {
      const amount = item.querySelector('.progress__item-price').innerHTML

      if (e.target.value === amount) {
        removeActiveItem(item)
        item.classList.add('progress__item-active')
      } else {
        item.classList.remove('progress__item-active')
      }
    })
  })
}

donate()

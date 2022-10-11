import data from './data.js'

function petsSlider() {
  const btnNext = document.querySelector('.pets__slider-btn-next')
  const btnPrev = document.querySelector('.pets__slider-btn-prev')
  const petsItems = document.querySelectorAll('.pets__item')

  const randomIndexes = () => {
    const arr = []

    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * data.length)
      while (arr.indexOf(randomNumber) !== -1) {
        randomNumber = Math.floor(Math.random() * data.length)
      }
      arr.push(randomNumber)
    }

    return arr
  }

  function slider() {
    let indexes = randomIndexes()

    petsItems.forEach((item, index) => {
      item.style.transform = 'scale(0.7)'
      item.style.opacity = '0'

      btnNext.setAttribute('disabled', true)
      btnPrev.setAttribute('disabled', true)

      setTimeout(() => {
        item.querySelector('.pets__item-img').setAttribute('src', data[indexes[index]].petsImg)
        item
          .querySelector('.pets__item-info')
          .querySelector('img')
          .setAttribute('src', data[indexes[index]].petsIcon)
        item.querySelector('.pets__item-country').innerHTML = data[indexes[index]].text
        item.querySelector('.pets__item-title').innerHTML = data[indexes[index]].name
      }, 200)

      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'scale(1)'
        btnNext.disabled = false
        btnPrev.disabled = false
      }, 600)
    })
  }

  if (btnNext && btnPrev) {
    btnNext.addEventListener('click', slider)
    btnPrev.addEventListener('click', slider)
  }
}

export default petsSlider

import setLocalStorage from '../helps/localstorage';

export function showPopup(mixedElements) {
  setLocalStorage(mixedElements);

  document.querySelector('.popup__title').innerHTML = 'The game has been save';
  document.querySelector('.popup__text').innerHTML = 'You can come back later';
  document.querySelector('.popup__list').innerHTML = '';

  document.body.classList.add('popup-active');

  const classes = ['.popup__close', '.popup__btn', '.overlay'];

  if (document.body.className.includes('popup-active')) {
    classes.forEach((item) => {
      (document.querySelector(item)).onclick = () => {
        document.body.classList.remove('popup-active');
      };
    });
  }
}

export default function saveGame(mixedElements) {
  showPopup(mixedElements);
}

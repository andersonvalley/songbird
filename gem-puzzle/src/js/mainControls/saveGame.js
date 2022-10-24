import setLocalStorage from '../helps/localstorage';

export function showPopup(mixedElements) {
  setLocalStorage(mixedElements);

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

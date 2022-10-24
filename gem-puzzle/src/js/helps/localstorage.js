export default function setLocalStorage(mixedElements) {
  const el = document.querySelector('.game__frame-text').innerHTML.charAt(0);

  window.localStorage.setItem('elements', JSON.stringify(mixedElements));
  window.localStorage.setItem('moves', JSON.stringify(document.querySelector('.puzzle__moves').innerHTML));
  window.localStorage.setItem('seconds', JSON.stringify(document.querySelector('.puzzle__sec').innerHTML));
  window.localStorage.setItem('minutes', JSON.stringify(document.querySelector('.puzzle__min').innerHTML));
  window.localStorage.setItem('rows', JSON.stringify(document.querySelector('.game__frame-text').innerHTML[0]));
  window.localStorage.setItem('countOf', JSON.stringify(String(el * el)));
}

export function getLocalStorageElements() {
  return JSON.parse(window.localStorage.getItem('elements'));
}

export function getLocalStorageMoves() {
  let moves = window.localStorage.getItem('moves');

  if (moves) {
    moves = JSON.parse(moves);
  }

  return moves;
}

export function getLocalStorageSeconds() {
  let sec = window.localStorage.getItem('seconds');

  if (sec) {
    sec = JSON.parse(sec);
  }

  return +sec;
}

export function getLocalStorageMinutes() {
  let min = window.localStorage.getItem('minutes');

  if (min) {
    min = JSON.parse(min);
  }

  return +min;
}

export function getLocalStorageTop() {
  return JSON.parse(window.localStorage.getItem('top-results'));
}

export function getLocalStorageRows() {
  return JSON.parse(window.localStorage.getItem('rows'));
}

export function getLocalStorageCountOfElements() {
  return JSON.parse(window.localStorage.getItem('countOf'));
}

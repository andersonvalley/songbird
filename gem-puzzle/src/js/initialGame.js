// function createElement(tag, className) {
//   return window.document.createElement(tag).classList.add(className);
// }

import { getLocalStorageMinutes, getLocalStorageMoves, getLocalStorageSeconds } from './helps/localstorage';

const html = `
  <div class="container">
  <div class="puzzle">
    <div class="puzzle__controls">
      <button class="puzzle__btn" id="start">Shuffle and start</button>
      <button class="puzzle__btn" id="stop">Stop</button>
      <button class="puzzle__btn" id="save">Save</button>
      <button class="puzzle__btn" id="results">Results</button>
    </div>

    <div class="puzzle__info">
      <div>Moves: <span class="puzzle__moves"></span></div>
      <div class="puzzle__group"><span>Time:</span> <span class="puzzle__min"></span>:<span class="puzzle__sec"></span></div>
    </div>
    
    <audio class="audio" src="../assets/mus.mp3"></audio>

    <div class="game">
      <ul class="game__list game__list-4x4"></ul>
    </div>

    <div class="game__frame">Frame size: <span class="game__frame-text">4x4</span></div>

    <div class="game__size">
      Other sizes:
      <ul class="game__size-list">
        <li class="game__size-item" data-size="9" data-rows="3">3x3</li>
        <li class="game__size-item" data-size="16" data-rows="4">4x4</li>
        <li class="game__size-item" data-size="25" data-rows="5">5x5</li>
        <li class="game__size-item" data-size="36" data-rows="6">6x6</li>
        <li class="game__size-item" data-size="49" data-rows="7">7x7</li>
        <li class="game__size-item" data-size="64" data-rows="8">8x8</li>
      </ul>
    </div>
  </div>
</div>
<div class="overlay"></div>
<div class="popup">
  <div class="popup__close">x</div>
  <h1 class="popup__title">The game has been save</h1>
  <p class="popup__text">You can come back later</p>
  <ul class="popup__list"></ul>
  <button class="puzzle__btn popup__btn">OK</button>
</div>
`;

export default function initialGame() {
  window.document.body.insertAdjacentHTML('beforeend', html);
  document.querySelector('.puzzle__moves').innerHTML = getLocalStorageMoves() ? getLocalStorageMoves() : '0';
  document.querySelector('.puzzle__sec').innerHTML = getLocalStorageSeconds() ? getLocalStorageSeconds() : '0';
  document.querySelector('.puzzle__min').innerHTML = getLocalStorageMinutes() ? getLocalStorageMinutes() : '0';
}

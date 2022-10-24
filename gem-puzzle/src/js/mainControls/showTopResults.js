import { showPopup } from './saveGame';

export default function showTopResults(mixedElements, topResults) {
  showPopup(mixedElements, topResults);

  if (document.body.className.includes('popup-active')) {
    const text = document.querySelector('.popup__text');
    const list = document.querySelector('.popup__list');

    document.querySelector('.popup__title').innerHTML = 'Top result of the game';
    text.innerHTML = '';
    list.innerHTML = '';

    const html = (move, min, sec, type) => `
        <li class="popup__item">
        <span>Moves: ${move}</span> | <span>Spent Time: ${min}:${sec}</span> | <span>Type: ${type}x${type}</span>
      </li>    
    `;

    if (topResults.length === 0) {
      text.innerHTML = 'No results yet';
    }

    if (topResults.length >= 10) {
      topResults.splice(5, topResults.length);
      list.insertAdjacentHTML('beforeend', topResults.map((item) => html(item.move, item.min, item.sec, item.type)).join(''));
    }

    list.insertAdjacentHTML('beforeend', topResults.map((item) => html(item.move, item.min, item.sec, item.type)).join(''));
  }
}

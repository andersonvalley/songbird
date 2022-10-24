import renderItemsGameFiled from './renderItemsGameFiled';
import { checkResults } from './mainControls/resultsOfGame';
import { showPopup } from './mainControls/saveGame';

import topResults from './helps/topResults';

function render(mixedElements, item, i, nextOrPrev, rows) {
  const audio = document.querySelector('.audio');
  const moves = document.querySelector('.puzzle__moves');
  const sec = document.querySelector('.puzzle__sec');
  const min = document.querySelector('.puzzle__min');
  moves.innerHTML = String(+moves.innerHTML + 1);

  const clickElement = item.dataset.number;

  audio.play();

  mixedElements.splice(i, 1, 0);
  mixedElements.splice(nextOrPrev, 1, +clickElement);
  renderItemsGameFiled(mixedElements, rows);
  // eslint-disable-next-line no-use-before-define
  gameLogic(mixedElements, rows);

  if (checkResults(mixedElements)) {
    const obj = {
      move: moves.innerHTML,
      sec: sec.innerHTML,
      min: min.innerHTML,
      type: rows,
    };

    topResults(obj);
    showPopup(mixedElements);

    document.querySelector('.popup__text').innerHTML = `You solved the puzzle in ${min.innerHTML}:${sec.innerHTML} and ${obj.move} moves!!`;
    document.querySelector('.popup__list').innerHTML = '';
    document.querySelector('.popup__title').innerHTML = 'Hooray!';

    setTimeout(() => {
      moves.innerHTML = '0';
      sec.innerHTML = '0';
      min.innerHTML = '0';
    }, 100);
  }
}

export default function gameLogic(mixedElements, rows) {
  const gameItems = document.querySelectorAll('.game__item');
  const empty = '0';

  gameItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (item.nextElementSibling && item.nextElementSibling.dataset.number === empty) {
        render(mixedElements, item, i, i + 1, rows);
      } else if (item.previousElementSibling
        && item.previousElementSibling.dataset.number === empty) {
        render(mixedElements, item, i, i - 1, rows);
      } else if (item.dataset.next === empty) {
        render(mixedElements, item, i, i + +rows, rows);
      } else if (item.dataset.prev === empty) {
        render(mixedElements, item, i, i - +rows, rows);
      }
    });
  });
}

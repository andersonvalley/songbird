import renderItemsGameFiled from '../renderItemsGameFiled';
import gameLogic from '../gameLogic';

export default function startGame(initial, mixedElements, rows) {
  const stopGameBtn = document.querySelector('#stop');

  renderItemsGameFiled(mixedElements, rows);
  gameLogic(mixedElements, rows);

  if (initial) {
    stopGameBtn.classList.add('puzzle__btn-gray');
    stopGameBtn.innerHTML = 'Stop';
  }
}

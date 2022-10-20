import renderItemsGameFiled from '../renderItemsGameFiled';
import timer from '../helps/timer';

export default function startGame(initial) {
  const stopGameBtn = document.querySelector('#stop');

  renderItemsGameFiled();

  if (initial) {
    stopGameBtn.classList.add('puzzle__btn-gray');
    stopGameBtn.innerHTML = 'Stop';
    timer();
  }
}

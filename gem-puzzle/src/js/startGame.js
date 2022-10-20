import renderItems from './renderItems';
import startTimer from './helps/startTimer';

export default function startGame(initial) {
  const stopGameBtn = document.querySelector('#stop');

  renderItems();

  if (initial) {
    stopGameBtn.classList.add('puzzle__btn-gray');
    stopGameBtn.innerHTML = 'Stop';
    startTimer();
  }
}

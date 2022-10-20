import '../index.html';
import '../scss/main.scss';
import initialGame from './initialGame';
import startGame from './startGame';
import chooseSize from './chooseSize';
import game from './game';

window.document.addEventListener('DOMContentLoaded', () => {
  initialGame();
  startGame();
  chooseSize();
  game();
  const startGameBtn = document.querySelector('#start');

  if (startGameBtn) {
    startGameBtn.addEventListener('click', () => startGame('initial'));
  }
});

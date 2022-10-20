import '../index.html';
import '../scss/main.scss';
import initialGame from './initialGame';
import startGame from './mainControls/startGame';
import chooseSizeField from './mainControls/chooseSizeField';
import gameLogic from './gameLogic';
import stopGame from './mainControls/stopGame';
import saveGame from './mainControls/saveGame';
import resultsOfGame from './mainControls/resultsOfGame';

window.document.addEventListener('DOMContentLoaded', () => {
  initialGame();
  startGame();
  gameLogic();
  chooseSizeField();

  const controlsGame = document.querySelector('.puzzle__controls');

  if (controlsGame) {
    controlsGame.addEventListener('click', (e) => {
      const { id } = e.target;

      switch (id) {
        case 'start':
          startGame();
          break;

        case 'stop':
          stopGame();
          break;

        case 'save':
          saveGame();
          break;

        case 'results':
          resultsOfGame();
          break;

        default:
          break;
      }
    });
  }
});

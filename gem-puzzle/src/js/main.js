import '../index.html';
import '../scss/main.scss';
import initialGame from './initialGame';
import startGame from './mainControls/startGame';
import saveGame from './mainControls/saveGame';
import timer, { stopTimer } from './helps/timer';
import stopGame from './mainControls/stopGame';
import randomNumbers from './helps/randomNumbers';
import setLocalStorage, {
  getLocalStorageCountOfElements,
  getLocalStorageElements,
  getLocalStorageRows,
} from './helps/localstorage';
import showTopResults from './mainControls/showTopResults';
import topResults from './helps/topResults';

window.document.addEventListener('DOMContentLoaded', () => {
  initialGame();

  const controlsGame = document.querySelector('.puzzle__controls');
  const sizeButtons = document.querySelector('.game__size-list');
  const gameField = document.querySelector('.game__list');
  const stopGameBtn = document.querySelector('#stop');

  let countOfElements = getLocalStorageCountOfElements() ? getLocalStorageElements() : '16';
  let rows = getLocalStorageRows() ? getLocalStorageRows() : '4';
  let timerId;
  let topRes = topResults();
  let mixedElements = getLocalStorageElements()
    ? getLocalStorageElements()
    : randomNumbers(countOfElements);

  startGame(null, mixedElements, rows);
  clearInterval(timerId);
  const { seconds, minutes } = stopGame();

  sizeButtons.addEventListener('click', (e) => {
    const { dataset } = e.target;

    countOfElements = dataset.size;
    rows = dataset.rows;
    stopTimer(timerId);
    mixedElements = randomNumbers(countOfElements);
    document.querySelector('.game__frame-text').innerHTML = `${rows}x${rows}`;
    setLocalStorage(mixedElements, topRes);
    startGame(null, mixedElements, rows);
  });

  gameField.onclick = () => {
    if (!timerId) {
      timerId = timer(minutes, seconds);
    }

    stopGameBtn.classList.add('puzzle__btn-gray');
    stopGameBtn.innerHTML = 'Stop';
    setLocalStorage(mixedElements);

    if (document.body.className.includes('popup-active')) {
      clearInterval(timerId);
    }
  };

  if (controlsGame) {
    controlsGame.addEventListener('click', (e) => {
      const { id } = e.target;

      switch (id) {
        case 'start':

          if (!timerId) {
            timerId = timer(minutes, seconds);
          }

          stopTimer(timerId);
          document.querySelector('.puzzle__min').innerHTML = '0';
          document.querySelector('.puzzle__sec').innerHTML = '0';
          document.querySelector('.puzzle__moves').innerHTML = '0';
          timerId = timer(0, 0);
          mixedElements = randomNumbers(countOfElements);
          setLocalStorage(mixedElements);
          startGame('initial', mixedElements, rows);
          break;

        case 'stop':

          stopTimer(timerId);

          if (stopGameBtn.className.includes('puzzle__btn-gray')) {
            stopGameBtn.innerHTML = 'Continue';
            stopGameBtn.classList.remove('puzzle__btn-gray');
          } else {
            stopGameBtn.classList.add('puzzle__btn-gray');
            stopGameBtn.innerHTML = 'Stop';

            stopTimer(timerId);
            timerId = timer(minutes, seconds);
          }

          break;

        case 'save':
          stopTimer(timerId);
          saveGame(mixedElements);
          break;

        case 'results':
          topRes = topResults();
          showTopResults(mixedElements, topRes);
          break;

        default:
          break;
      }
    });
  }
});

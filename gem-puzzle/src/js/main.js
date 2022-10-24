import '../index.html';
import '../scss/main.scss';
import initialGame from './initialGame';
import startGame from './mainControls/startGame';
import saveGame from './mainControls/saveGame';
import timer, { clearTimeNode, stopTimer } from './helps/timer';
import stopGame from './mainControls/stopGame';
import randomNumbers from './helps/randomNumbers';
import setLocalStorage, {
  getLocalStorageCountOfElements,
  getLocalStorageElements,
  getLocalStorageRows,
} from './helps/localstorage';
import showTopResults from './mainControls/showTopResults';
import topResults from './helps/topResults';
import vueButtonStop from './helps/vueButtonStop';

window.document.addEventListener('DOMContentLoaded', () => {
  initialGame();

  const controlsGame = document.querySelector('.puzzle__controls');
  const gameField = document.querySelector('.game__list');
  const sizeButtons = document.querySelector('.game__size-list');
  const audioBtn = document.querySelector('#audio');
  const audioMove = document.querySelector('.audio');
  const stopGameBtn = document.querySelector('#stop');

  let countOfElements = getLocalStorageCountOfElements() ? getLocalStorageCountOfElements() : '16';
  let rows = getLocalStorageRows() ? getLocalStorageRows() : '4';
  let timerId;
  let topRes = topResults();
  let mixedElements = getLocalStorageElements()
    ? getLocalStorageElements()
    : randomNumbers(countOfElements);

  startGame(null, mixedElements, rows);
  clearInterval(timerId);
  const { seconds, minutes } = stopGame();

  // change size of filed
  sizeButtons.addEventListener('click', (e) => {
    const { dataset } = e.target;

    countOfElements = dataset.size;
    rows = dataset.rows;

    stopTimer(timerId);
    clearTimeNode();

    document.querySelector('.puzzle__moves').innerHTML = '0';
    document.querySelector('.game__frame-text').innerHTML = `${+rows}x${+rows}`;

    mixedElements = randomNumbers(countOfElements);
    setLocalStorage(mixedElements);
    startGame(null, mixedElements, rows);
    timerId = timer(0, 0);
  });

  gameField.onmousedown = () => {
    if (!timerId) {
      timerId = timer(minutes, seconds);
    }

    if (!stopGameBtn.className.includes('puzzle__btn-gray')) {
      // eslint-disable-next-line no-case-declarations
      const m = document.querySelector('.puzzle__min').innerHTML;
      // eslint-disable-next-line no-case-declarations
      const s = document.querySelector('.puzzle__sec').innerHTML;
      clearInterval(timerId);
      timerId = timer(m, s);
    }

    vueButtonStop();
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
          clearTimeNode();
          document.querySelector('.puzzle__moves').innerHTML = '0';
          timerId = timer(0, 0);
          mixedElements = randomNumbers(getLocalStorageCountOfElements());
          setLocalStorage(mixedElements);
          startGame('initial', mixedElements, rows);
          break;

        case 'stop':
          setLocalStorage(mixedElements);
          stopTimer(timerId);

          if (stopGameBtn.className.includes('puzzle__btn-gray')) {
            stopGameBtn.innerHTML = 'Continue';
            stopGameBtn.classList.remove('puzzle__btn-gray');
          } else {
            vueButtonStop();

            // eslint-disable-next-line no-case-declarations
            const m = document.querySelector('.puzzle__min').innerHTML;
            // eslint-disable-next-line no-case-declarations
            const s = document.querySelector('.puzzle__sec').innerHTML;

            timerId = timer(m, s);
          }

          break;

        case 'save':
          saveGame(mixedElements);
          break;

        case 'results':
          topRes = topResults();
          showTopResults(mixedElements, topRes);
          break;

        case 'audio':
          audioBtn.classList.toggle('puzzle__btn-off');

          if (audioBtn.className.includes('puzzle__btn-off')) {
            audioMove.volume = 1;
          } else {
            audioMove.volume = 0;
          }
          break;

        default:
          break;
      }
    });
  }
});

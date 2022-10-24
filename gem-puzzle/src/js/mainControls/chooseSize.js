import { clearTimeNode, stopTimer } from '../helps/timer';
import randomNumbers from '../helps/randomNumbers';
import setLocalStorage from '../helps/localstorage';
import startGame from './startGame';

const sizeButtons = document.querySelector('.game__size-list');

export default function chooseSize(timerId) {
  sizeButtons.addEventListener('click', (e) => {
    const { dataset } = e.target;

    const countOfElements = dataset.size;
    const { rows } = dataset;

    stopTimer(timerId);
    clearTimeNode();
    const mixedElements = randomNumbers(countOfElements);

    document.querySelector('.game__frame-text').innerHTML = `${rows}x${rows}`;

    setLocalStorage(mixedElements);
    startGame(null, mixedElements, rows);
  });
}

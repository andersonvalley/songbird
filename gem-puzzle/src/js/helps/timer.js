export function stopTimer(timerId) {
  if (timerId !== undefined) {
    clearInterval(timerId);
  }
}

export function clearTimeNode() {
  document.querySelector('.puzzle__min').innerHTML = '0';
  document.querySelector('.puzzle__sec').innerHTML = '0';
}

export default function timer(min = 0, sec = 0) {
  // const startGameBtn = document.querySelector('#start');
  const secondNode = document.querySelector('.puzzle__sec');
  const minuteNode = document.querySelector('.puzzle__min');

  let seconds = +sec;
  let minutes = +min;

  return setInterval(() => {
    // timerId = setTimeout(tick, 1000);

    seconds += 1;

    if (String(seconds).length === 1) {
      secondNode.innerHTML = `0${seconds}`;
    } else {
      secondNode.innerHTML = seconds;
    }

    if (seconds === 59) {
      seconds = 0;
      minutes += 1;

      if (String(minutes).length === 1) {
        minuteNode.innerHTML = `0${minutes}`;
      } else {
        minuteNode.innerHTML = minutes;
      }

      secondNode.innerHTML = seconds;
    }
  }, 1000);

  // stopGameBtn.addEventListener('click', () => {
  //   clearTimeout(timerId);
  //
  //   if (stopGameBtn.innerHTML === 'continue') {
  //     timer(min.innerHTML, sec.innerHTML);
  //     stopGameBtn.textContent = 'Stop';
  //   }
  //
  //   stopGameBtn.innerHTML = 'continue';
  //   stopGameBtn.classList.toggle('puzzle__btn-gray');
  // });
}

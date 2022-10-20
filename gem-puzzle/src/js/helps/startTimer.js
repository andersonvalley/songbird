export default function startTimer(minutes, second) {
  const sec = document.querySelector('.puzzle__sec');
  const min = document.querySelector('.puzzle__min');
  const stopGameBtn = document.querySelector('#stop');

  let secs;
  let mins;

  if (second === undefined && minutes === undefined) {
    mins = 0;
    secs = 0;
  } else {
    secs = +second;
    mins = +minutes;
  }

  let timerId = setTimeout(function tick() {
    secs += 1;

    if (secs === 59) {
      mins += 1;

      if (String(mins).length === 1) {
        min.innerHTML = `0${mins}`;
      } else {
        min.innerHTML = mins;
      }
      secs = 0;
    }

    sec.innerHTML = secs;

    timerId = setTimeout(tick, 1000);
  }, 1000);

  stopGameBtn.addEventListener('click', () => {
    clearTimeout(timerId);

    if (stopGameBtn.innerHTML === 'continue') {
      console.log('yes');
      startTimer(min.innerHTML, sec.innerHTML);
      stopGameBtn.textContent = 'Stop';
    }

    stopGameBtn.innerHTML = 'continue';
    stopGameBtn.classList.toggle('puzzle__btn-gray');
  });

  return timerId;
}

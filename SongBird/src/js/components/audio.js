export default function audio() {

}

export function playOrStop(audioElement, buttonPlay) {
  buttonPlay.addEventListener('click', () => {
    if (buttonPlay.dataset.play === 'false') {
      buttonPlay.children[0].setAttribute('srcset', 'img/stop.svg');
      audioElement.play();
      buttonPlay.setAttribute('data-play', 'true');

      // eslint-disable-next-line no-use-before-define
      setDuration(audioElement, '#question-track-duration');
    } else {
      buttonPlay.children[0].setAttribute('srcset', 'img/play.svg');
      audioElement.pause();
      buttonPlay.setAttribute('data-play', 'false');
    }
  });
}

function setDuration(audioEl, durationEl) {
  const trackDuration = document.querySelector(durationEl);
  const timeMax = trackDuration.querySelector('.track__time-max');
  const timeCurrent = trackDuration.querySelector('.track__time-current');
  const trackLine = trackDuration.querySelector('.track__line');
  const trackLineShadow = trackDuration.querySelector('.track__line_back');

  // eslint-disable-next-line no-use-before-define
  timeMax.innerHTML = makeReadableDuration(audioEl.duration);

  audioEl.addEventListener('timeupdate', () => {
    // eslint-disable-next-line no-use-before-define
    timeCurrent.innerHTML = makeReadableDuration(audioEl.currentTime);
    const percent = String(Math.floor((audioEl.currentTime / audioEl.duration) * 100));

    // console.log(percent);
    trackLine.setAttribute('value', percent);
    if (+percent < 30 && +percent >= 1) {
      trackLineShadow.style.width = `${+percent + 1}%`;
    } else {
      trackLineShadow.style.width = `${percent}%`;
    }
  }, false);
}

function makeReadableDuration(duration) {
  let time = String(Math.floor(duration));

  if (time >= 60) {
    time = (duration / 60).toFixed(2).split('.').join(':');

    return `${time}`;
  }

  if (time.length === 1) {
    return `00:0${time}`;
  }

  return `00:${time}`;
}

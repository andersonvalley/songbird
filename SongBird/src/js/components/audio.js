import rangeInput from '../helpers/rangeInputUi';

export default function playOrStop(audioElement, buttonPlay, duration) {
  rangeInput('#question-track-line', '#question-track-line-back', '#question-track');

  // eslint-disable-next-line no-use-before-define
  // volume('#question-volume', '#question-input', audioElement);

  buttonPlay.addEventListener('click', () => {
    if (buttonPlay.dataset.play === 'false') {
      buttonPlay.children[0].setAttribute('srcset', 'img/stop.svg');
      audioElement.play();
      buttonPlay.setAttribute('data-play', 'true');

      // eslint-disable-next-line no-use-before-define
      setDuration(audioElement, duration);
    } else {
      buttonPlay.children[0].setAttribute('srcset', 'img/play.svg');
      audioElement.pause();
      buttonPlay.setAttribute('data-play', 'false');
    }

    // eslint-disable-next-line no-use-before-define
    volume('#question-volume', '#question-input', audioElement);
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

function volume(btn, input, track) {
  const volumeBtn = document.querySelector(btn);
  const volumeInput = document.querySelector(input);

  // eslint-disable-next-line no-use-before-define
  volumeOff(volumeBtn, volumeInput, track);

  volumeInput.addEventListener('input', (e) => {
    // eslint-disable-next-line no-param-reassign
    track.volume = e.target.value / 100;

    // eslint-disable-next-line no-use-before-define
    checkVolume(track, volumeBtn);
    // eslint-disable-next-line no-use-before-define
    volumeOff(volumeBtn, volumeInput, track);
  });
}

function checkVolume(track, volumeBtn) {
  if (track.volume === 0) {
    volumeBtn.children[0].setAttribute('srcset', 'img/volumeoff.svg');
  } else {
    volumeBtn.children[0].setAttribute('srcset', 'img/volume.svg');
  }
}

function volumeOff(volumeBtn, volumeInput, track) {
  // eslint-disable-next-line no-param-reassign
  volumeBtn.onclick = () => {
    const volumeImg = volumeBtn.children[0];
    if (volumeImg.getAttribute('srcset') === 'img/volume.svg') {
      volumeImg.setAttribute('srcset', 'img/volumeoff.svg');
      // eslint-disable-next-line no-param-reassign
      track.volume = 0;
      // volumeInput.setAttribute('value', '0');
    } else {
      volumeImg.setAttribute('srcset', 'img/volume.svg');
      // eslint-disable-next-line no-param-reassign
      track.volume = 0.5;
      // volumeInput.setAttribute('value', '50');
    }
  };
}

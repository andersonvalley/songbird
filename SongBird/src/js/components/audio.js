export default function renderPlayer(audioElement, buttonPlay, duration, vol) {
  const durationContainer = document.querySelector(duration);
  const progressContainer = durationContainer.querySelector('.progress');

  // eslint-disable-next-line no-use-before-define
  volume(audioElement, vol);

  buttonPlay.addEventListener('click', () => {
    if (buttonPlay.dataset.play === 'false') {
      // eslint-disable-next-line no-use-before-define
      playMusic(buttonPlay, audioElement, durationContainer);
    } else {
      // eslint-disable-next-line no-use-before-define
      stopMusic(buttonPlay, audioElement);
    }
  });

  // eslint-disable-next-line no-use-before-define
  progressContainer.addEventListener('click', (e) => changeDuration(e, progressContainer.querySelector('.progress__line'), audioElement, durationContainer, buttonPlay));
}

export function playMusic(buttonPlay, audioElement, durationContainer) {
  buttonPlay.children[0].setAttribute('srcset', 'img/stop.svg');
  audioElement.play();
  buttonPlay.setAttribute('data-play', 'true');

  // eslint-disable-next-line no-use-before-define
  setDuration(audioElement, durationContainer, buttonPlay);
}

export function stopMusic(buttonPlay, audioElement) {
  buttonPlay.children[0].setAttribute('srcset', 'img/play.svg');
  audioElement.pause();
  buttonPlay.setAttribute('data-play', 'false');
}

function setDuration(audioEl, durationContainer, buttonPlay) {
  const timeMax = durationContainer.querySelector('.track__time-max');
  const timeCurrent = durationContainer.querySelector('.track__time-current');
  const progressLine = durationContainer.querySelector('.progress__line');

  // eslint-disable-next-line no-use-before-define
  timeMax.innerHTML = makeReadableDuration(audioEl.duration);

  audioEl.addEventListener('timeupdate', () => {
    if (audioEl.currentTime === audioEl.duration) {
      // eslint-disable-next-line no-param-reassign
      audioEl.currentTime = 0;
      // eslint-disable-next-line no-param-reassign
      durationContainer.querySelector('.progress__line').style.width = `${0}%`;
      stopMusic(buttonPlay, audioEl);
    }

    // eslint-disable-next-line no-use-before-define
    timeCurrent.innerHTML = makeReadableDuration(audioEl.currentTime);
    const percent = String(Math.floor((audioEl.currentTime / audioEl.duration) * 100));

    // eslint-disable-next-line no-use-before-define
    updateProgressLine(progressLine, percent);
  });
}

function updateProgressLine(progressLine, percent) {
  // eslint-disable-next-line no-param-reassign
  progressLine.style.width = `${percent}%`;
}

function changeDuration(e, progress, audio, durationContainer, buttonPlay) {
  const width = e.target.clientWidth;
  const clickX = e.offsetX;
  const percent = (clickX / width) * 100;
  const timeByClick = (clickX / width) * audio.duration;

  // eslint-disable-next-line no-param-reassign
  audio.currentTime = timeByClick;

  updateProgressLine(progress, percent);

  setDuration(audio, durationContainer, buttonPlay);
}

export function makeReadableDuration(duration) {
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

export function volume(audioEl, vol) {
  const volumeContainer = document.querySelector(vol);
  const volumeBtn = volumeContainer.querySelector('.track__volume-btn');

  const progressLine = volumeContainer.querySelector('.progress__line-volume');

  // eslint-disable-next-line no-use-before-define
  volumeOff(volumeBtn, audioEl, volumeContainer);
  // eslint-disable-next-line no-use-before-define
  volumeContainer.querySelector('.progress-volume').addEventListener('click', (e) => updateVolume(e, progressLine, audioEl));
}

function updateVolume(e, progress, audioEl) {
  const width = e.target.clientWidth;
  const clickX = e.offsetX;
  const percent = (clickX / width);

  updateProgressLine(progress, percent * 100);
  // eslint-disable-next-line no-param-reassign
  audioEl.volume = percent;
}

function volumeOff(volumeBtn, track, volumeContainer) {
  // eslint-disable-next-line no-param-reassign
  volumeBtn.onclick = () => {
    const volumeImg = volumeBtn.children[0];
    const line = volumeContainer.querySelector('.progress__line-volume');

    if (volumeImg.getAttribute('srcset') === 'img/volume.svg') {
      volumeImg.setAttribute('srcset', 'img/volumeoff.svg');
      // eslint-disable-next-line no-param-reassign
      track.volume = 0;
      updateProgressLine(line, 0);
    } else {
      volumeImg.setAttribute('srcset', 'img/volume.svg');
      // eslint-disable-next-line no-param-reassign
      track.volume = 0.5;
      updateProgressLine(line, 50);
    }
  };
}

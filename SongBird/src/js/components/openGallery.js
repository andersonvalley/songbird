import rerender from '../helpers/returnQuestionOrCategory';
import { makeReadableDuration, stopMusic } from './audio';
// eslint-disable-next-line import/no-cycle
import { checkLocalStorage } from './changeLang';

export default function openGallery() {
  checkLocalStorage();
  const app = document.querySelector('.app');
  document.body.classList.remove('first-page');
  document.body.classList.add('gallery');
  app.innerHTML = '';
  const data = rerender();

  const html = `
    <section class="gallery">
      <h3 class="gallery__title">Gallery</h3>
      <audio src="" class="player"></audio>
      
      <ul class="gallery__list"></ul>
    </section>
  `;

  app.innerHTML = html;

  const list = document.querySelector('.gallery__list');

  function htmlItem({
    name, image, species, audio, description,
  }) {
    return `
      <li class="gallery__item">
        <img class="gallery__img" src="${image}" alt="name">
        
        <div class="gallery__inner">
          <span class="gallery__name">${name}</span>
          <span class="gallery__name gallery__name-latin">${species}</span>
          
          <div class="gallery__track">
            <div class="track__controls">

                <div class="track__inner">
                  <button data-play="false" data-src="${audio}" id="play_${name}" class="btn-reset track__play">
                    <img src="img/play.svg" alt="play or stop button">
                  </button>

                  <div id="track-duration_${name}" class="track__duration">
                     <div class="progress">
                      <div class="progress__line"><div class="progress__point"></div></div>
                    </div>
                    <div class="track__time">
                      <span class="track__time-current">00:00</span>
                      <span class="track__time-max">00:00</span>
                    </div>
                  </div>
                </div>   
              </div>
          </div>
          
          <p class="gallery__text">
            ${description}
          </p>
        </div>
      </li>
    `;
  }

  list.insertAdjacentHTML('beforeend', data.map((item) => item.map((obj) => htmlItem(obj)).join('')).join(''));

  if (list.children) {
    const trackBtns = document.querySelectorAll('.track__play');

    trackBtns.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.onclick = () => {
        // eslint-disable-next-line no-use-before-define
        clickHandler(item);
      };
    });
  }
}

const trackBtns = document.querySelectorAll('.track__play');

trackBtns.forEach((item) => {
  // eslint-disable-next-line no-param-reassign
  item.onclick = () => {
    // eslint-disable-next-line no-use-before-define
    clickHandler(item);
  };
});

function clickHandler(btn) {
  const player = document.querySelector('.player');
  const track = btn.getAttribute('data-src');
  const durationCont = btn.nextElementSibling;

  if (player.getAttribute('src') !== track) {
    // eslint-disable-next-line no-use-before-define
    stopPlayer();
    player.setAttribute('src', track);
  } else {
    // eslint-disable-next-line no-use-before-define
    checkCurrentAudio(btn, player, durationCont);
    return;
  }

  // eslint-disable-next-line no-use-before-define
  checkCurrentAudio(btn, player, durationCont);
}

function checkCurrentAudio(btn, player, durationCont) {
  if (btn.dataset.play === 'false') {
    setTimeout(() => {
      btn.children[0].setAttribute('srcset', 'img/stop.svg');
      player.play();
      btn.setAttribute('data-play', 'true');
      // eslint-disable-next-line no-use-before-define
      duration(durationCont, player, btn);
    }, 1000);
  } else {
    // eslint-disable-next-line no-use-before-define
    stopMusic(btn, player);
  }
}

function stopPlayer() {
  const trackBtn = document.querySelectorAll('.track__play');

  trackBtn.forEach((item) => {
    item.setAttribute('data-play', 'false');
    item.children[0].setAttribute('srcset', 'img/play.svg');
  });
}

function duration(durationContainer, audioEl, buttonPlay) {
  const timeMax = durationContainer.querySelector('.track__time-max');
  const timeCurrent = durationContainer.querySelector('.track__time-current');
  const progressLine = durationContainer.querySelector('.progress__line');

  // eslint-disable-next-line no-use-before-define
  timeMax.innerHTML = makeReadableDuration(audioEl.duration);

  // eslint-disable-next-line no-param-reassign
  audioEl.ontimeupdate = () => {
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
  };
}

function updateProgressLine(progressLine, percent) {
  // eslint-disable-next-line no-param-reassign
  progressLine.style.width = `${percent}%`;
}

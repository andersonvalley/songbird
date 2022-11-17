import birdImg from '../../img/bird.jpg';
import stopImg from '../../img/stop.svg';
import playImg from '../../img/play.svg';
import volumeImg from '../../img/volume.svg';
import volumeOff from '../../img/volumeoff.svg';
import winAudio from '../../img/win.mp3';
import errorAudio from '../../img/error.mp3';

export default function quizHtml() {
  return `
  <section class="audio" id="question-audio">

      <div class="audio__cover">
        <img src="${birdImg}" class="audio__cover_img" id="question-cover" width="300" alt="bird">
      </div>

      <div class="audio__track track">
        <h1 class="audio__title"></h1>

        <div class="track__controls">
          <p id="question__title" class="track__title">******</p>

          <audio id="question-track"></audio>

          <div class="track__inner">
            <button id="question-play" class="btn-reset track__play" data-play="false">
              <img src="${stopImg}" srcset="${playImg}" alt="play or stop button">
            </button>

            <div id="question-track-duration" class="track__duration">
              <div class="progress">
                <div class="progress__line"><div class="progress__point"></div></div>
              </div>
              <div class="track__time">
                <span class="track__time-current">00:00</span>
                <span class="track__time-max">00:00</span>
              </div>
            </div>
          </div>
          
          <div id="question-volume" class="track__volume">
            <button class="track__volume-btn btn-reset">
                <img src="${volumeOff}" srcset="${volumeImg}" alt="volume">
            </button>
             <div class="progress progress-volume">
                <div class="progress__line progress__line-volume"><div class="progress__point"></div></div>
             </div>
          </div>
          
        </div>
      </div>
    </section>

    <div class="flex">
      <section class="answers">
        <h3 class="answers__title"></h3>
        <ul class="answers__list"></ul>
        <audio id="win" src="${winAudio}"></audio>
        <audio id="error" src="${errorAudio}"></audio>
      </section>

      <section class="description">
        <h3 class="description__title"></h3>

        <div class="description__track">
          <h3 class="description__text"></h3>
          <p class="description__choose"></p>
        </div>
      </section>
    </div>

    <div class="flex-center">
      <button class="btn-reset next-question" disabled></button>
    </div>
`;
}

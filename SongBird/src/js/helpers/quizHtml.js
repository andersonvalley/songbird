import birdImg from '../../img/bird.jpg';
import stopImg from '../../img/stop.svg';
import playImg from '../../img/play.svg';
import volumeImg from '../../img/volume.svg';
import winAudio from '../../img/win.mp3';
import errorAudio from '../../img/error.mp3';

export default function quizHtml() {
  return `
  <section class="audio">

      <div class="audio__cover">
        <img src="${birdImg}" class="audio__cover_img" id="question-cover" width="300" alt="bird">
      </div>

      <div class="audio__track track">
        <h1 class="audio__title">Попробуйте угадать птицу по голосу</h1>

        <div class="track__controls">
          <p id="question__title" class="track__title">******</p>

          <audio id="question-track"></audio>

          <div class="track__inner">
            <button id="question-play" class="btn-reset track__play" data-play="false">
              <img src="${stopImg}" srcset="${playImg}" alt="play or stop button">
            </button>

            <div id="question-track-duration" class="track__duration">
              <input id="question-track-line" class="track__line" value="10" min="0" max="100" step="1" type="range">
              <div id="question-track-line-back" class="track__line_back" style="width: 0"></div>
              <div class="track__time">
                <span class="track__time-current">00:00</span>
                <span class="track__time-max">00:00</span>
              </div>
            </div>

            <button class="track__volume btn-reset">
              <img src="${volumeImg}" alt="volume">
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="flex">
      <section class="answers">
        <h3 class="answers__title">Выберите вариант ответа</h3>
        <ul class="answers__list"></ul>
        <audio id="win" src="${winAudio}"></audio>
        <audio id="error" src="${errorAudio}"></audio>
      </section>

      <section class="description">
        <h3 class="description__title">Описание птицы</h3>

        <div class="description__track">
          <h3>Послушайте плеер</h3>
          <p>Выберите птицу из списка</p>
        </div>
      </section>
    </div>

    <div class="flex-center">
      <button class="btn-reset next-question" disabled>Следующий уровень</button>
    </div>
`;
}
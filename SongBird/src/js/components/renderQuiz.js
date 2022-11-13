import { playOrStop } from './audio';

export default function renderQuiz(currentCategory, randomQuestion) {
  const questionTrack = document.querySelector('#question-track');
  const questionPlayStopButton = document.querySelector('#question-play');
  // eslint-disable-next-line no-use-before-define
  cleanDOM();
  // eslint-disable-next-line no-use-before-define
  renderAnswers(currentCategory);

  questionTrack.setAttribute('src', randomQuestion.audio);
  playOrStop(questionTrack, questionPlayStopButton);
}

export function renderAnswers(answers) {
  const answersList = document.querySelector('.answers__list');
  answersList.innerHTML = '';
  answersList.setAttribute('clean', 'false');

  const html = (name) => `
    <li class="answers__item">
      <div class="answers__round"></div>
      <span class="answers__text">${name}</span>
    </li>`;

  answersList.insertAdjacentHTML('beforeend', answers.map((item) => html(item.name)).join(''));
}

function cleanDOM() {
  const html = `
     <h3 class="track__title">Послушайте плеер</h3>
     <p>Выберите птицу из списка</p>
  `;
  document.querySelector('#question-cover').setAttribute('src', 'img/bird.jpg');
  document.querySelector('#question-track').setAttribute('src', '');
  document.querySelector('#question__title').innerHTML = '#####';
  document.querySelector('.description__track').innerHTML = html;

  const track = document.querySelector('#question-track-duration');

  const buttonPlay = document.querySelector('#question-play');
  buttonPlay.setAttribute('data-play', 'false');
  buttonPlay.children[0].setAttribute('srcset', 'img/play.svg');
  track.querySelector('.track__line_back').style.width = '0%';
  track.querySelector('.track__line').remove();
  // eslint-disable-next-line no-use-before-define
  track.prepend(createInputDuration());
}

function createInputDuration() {
  const input = document.createElement('input');
  input.classList.add('track__line');
  input.setAttribute('value', '0');
  input.setAttribute('max', '100');
  input.setAttribute('min', '0');
  input.setAttribute('type', 'range');

  return input;
}

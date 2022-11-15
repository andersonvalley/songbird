import renderPlayer from './audio';
// eslint-disable-next-line import/no-cycle
import { checkLocalStorage } from './changeLang';

export default function renderQuiz(currentCategory, randomQuestion) {
  const questionTrack = document.querySelector('#question-track');
  const questionPlayStopButton = document.querySelector('#question-play');
  // eslint-disable-next-line no-use-before-define
  cleanDOM();
  // eslint-disable-next-line no-use-before-define
  renderAnswers(currentCategory);

  questionTrack.setAttribute('src', randomQuestion.audio);
  renderPlayer(questionTrack, questionPlayStopButton, '#question-track-duration', '#question-volume');
  checkLocalStorage();
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
     <h3 class="description__text"></h3>
     <p class="description__choose"></p>
  `;

  document.querySelector('#question-cover').setAttribute('src', 'img/bird.jpg');
  document.querySelector('#question-track').setAttribute('src', '');
  document.querySelector('#question__title').innerHTML = '******';
  document.querySelector('.description__track').innerHTML = html;

  const buttonPlay = document.querySelector('#question-play');
  buttonPlay.setAttribute('data-play', 'false');
  buttonPlay.children[0].setAttribute('srcset', 'img/play.svg');
}

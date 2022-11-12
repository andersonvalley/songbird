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

export function renderAnswers(dataFiltered) {
  const answersList = document.querySelector('.answers__list');
  answersList.innerHTML = '';

  const html = (name) => `
    <li class="answers__item">
      <div class="answers__round"></div>
      <span class="answers__text">${name}</span>
    </li>`;

  answersList.insertAdjacentHTML('beforeend', dataFiltered.map((item) => html(item.name)).join(''));
}

function cleanDOM() {
  document.querySelector('#question-cover').setAttribute('src', 'img/bird.jpg');
  document.querySelector('#question-track').setAttribute('src', '');
  document.querySelector('#question__title').innerHTML = '#####';
  document.querySelector('.description__track').innerHTML = '';
}

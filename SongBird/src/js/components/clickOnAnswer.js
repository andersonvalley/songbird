import descriptionBirdHtml from '../helpers/descriptionBirdHtml';
// eslint-disable-next-line import/no-cycle
import toNextQuestion from './nextQuestion';
import { currentCategory, returnCurrentQuestion } from '../helpers/returnQuestionOrCategory';
import countTotalScore from '../helpers/countScore';
import renderPlayer from './audio';
import hideButtonLang from '../helpers/hideButtonLang';
import findCorrectAnswerFlag, { changeCorrectAnswerFlag } from '../helpers/findCorrectAnswerFlag';

export default function clickOnAnswer() {
  const answersList = document.querySelector('.answers__list');
  const descriptionContainer = document.querySelector('.description__track');

  function clickHandler(e) {
    if (e.target.className.includes('answers__item')) {
      const name = e.target.querySelector('.answers__text').innerHTML;
      currentCategory().forEach((item) => {
        if (name === item.name) {
          // render description
          descriptionContainer.innerHTML = '';
          descriptionContainer.insertAdjacentHTML('beforeend', descriptionBirdHtml(item));
          // eslint-disable-next-line no-use-before-define
          play();

          // eslint-disable-next-line no-use-before-define
          checkCorrectAnswer(item, e.target, returnCurrentQuestion());

          // eslint-disable-next-line no-use-before-define
          hideButtonLang();
        }
      });
    }
  }

  if (answersList.getAttribute('clean') === 'true') {
    answersList.removeEventListener('click', clickHandler);
  }

  answersList.addEventListener('click', clickHandler);
}

let currentScore = 5;

export function checkCorrectAnswer(itemOfQuestion, clickedElement, currentQuestion) {
  const birdCover = document.querySelector('#question-cover');
  const winAudio = document.querySelector('#win');
  const errorAudio = document.querySelector('#error');
  const questionTitle = document.querySelector('#question__title');
  const questionPlayButton = document.querySelector('#question-play');
  const headerScore = document.querySelector('.score__number');

  if (currentQuestion.id === itemOfQuestion.id) {
    if (findCorrectAnswerFlag()) return;
    changeCorrectAnswerFlag(true);

    errorAudio.pause();
    // eslint-disable-next-line no-use-before-define
    updateSrc('img/win.mp3', winAudio);

    // stop question audio
    document.querySelector('#question-track').pause();
    questionPlayButton.children[0].setAttribute('srcset', 'img/play.svg');
    questionPlayButton.setAttribute('data-play', 'false');

    birdCover.setAttribute('src', currentQuestion.image);
    questionTitle.innerHTML = currentQuestion.name;

    countTotalScore(currentScore);
    clickedElement.classList.add('answers__item_correct');
    currentScore = 5;
    headerScore.innerHTML = countTotalScore();

    toNextQuestion();
  } else {
    if (findCorrectAnswerFlag()) return;
    // eslint-disable-next-line no-use-before-define
    updateSrc('img/error.mp3', errorAudio);

    if (clickedElement.getAttribute('clicked') === 'true') {
      clickedElement.classList.add('answers__item_wrong');
      return;
    }

    clickedElement.setAttribute('clicked', 'true');

    currentScore -= 1;
    clickedElement.classList.add('answers__item_wrong');
  }
}

function updateSrc(src, audioEl) {
  audioEl.setAttribute('src', src);
  audioEl.play();
}

function play() {
  const track = document.querySelector('#track__description');
  const playStopButton = document.querySelector('#description-play');

  if (track) {
    renderPlayer(track, playStopButton, '#description-track-duration', '#description-volume');
  }
}

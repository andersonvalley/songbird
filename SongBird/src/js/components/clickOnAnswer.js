import descriptionBirdHtml from '../helpers/descriptionBirdHtml';
import toNextQuestion from './nextQuestion';
import { currentCategory, returnCurrentQuestion } from '../helpers/returnQuestionOrCategory';
import countTotalScore from '../helpers/countScore';

export default function clickOnAnswer() {
  const answersList = document.querySelector('.answers__list');
  const descriptionContainer = document.querySelector('.description__track');

  function clickHandler(e) {
    if (e.target.className.includes('answers__item')) {
      const name = e.target.querySelector('.answers__text').innerHTML;
      currentCategory().forEach((item) => {
        if (name === item.name) {
          descriptionContainer.innerHTML = '';
          descriptionContainer.insertAdjacentHTML('beforeend', descriptionBirdHtml(item));

          // eslint-disable-next-line no-use-before-define
          checkCorrectAnswer(item, e.target, returnCurrentQuestion());
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
  const headerScore = document.querySelector('.score__number');

  if (currentQuestion.id === itemOfQuestion.id) {
    winAudio.play();
    birdCover.setAttribute('src', currentQuestion.image);
    questionTitle.innerHTML = currentQuestion.name;

    countTotalScore(currentScore);
    clickedElement.setAttribute('disabled', 'true');
    clickedElement.classList.add('answers__item_correct');
    currentScore = 5;
    headerScore.innerHTML = countTotalScore();

    toNextQuestion();
  } else {
    if (clickedElement.getAttribute('clicked') === 'true') {
      clickedElement.classList.add('answers__item_wrong');
      return;
    }

    if (errorAudio.play()) {
      errorAudio.load();
      errorAudio.play();
    }
    errorAudio.play();
    clickedElement.setAttribute('clicked', 'true');

    currentScore -= 1;
    clickedElement.classList.add('answers__item_wrong');
  }
}

import descriptionBirdHtml from '../helpers/descriptionBirdHtml';
import toNextQuestion from './nextQuestion';
import returnCurrentCategory, { returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
import countTotalScore from '../helpers/countScore';

export default function clickOnAnswer() {
  const answersList = document.querySelector('.answers__list');
  const descriptionContainer = document.querySelector('.description__track');

  answersList.addEventListener('click', (e) => {
    if (e.target.className.includes('answers__item')) {
      const name = e.target.querySelector('.answers__text').innerHTML;

      returnCurrentCategory().forEach((item) => {
        if (name === item.name) {
          descriptionContainer.innerHTML = '';
          descriptionContainer.insertAdjacentHTML('beforeend', descriptionBirdHtml(item));

          // eslint-disable-next-line no-use-before-define
          checkCorrectAnswer(item, e.target, returnRandomQuestion());
        }
      });
    }
  });
}

let currentScore = 5;

function checkCorrectAnswer(itemOfQuestion, clickedElement, randomQuestion) {
  const birdCover = document.querySelector('#question-cover');
  const questionTitle = document.querySelector('#question__title');
  const headerScore = document.querySelector('.score__number');

  if (randomQuestion.id === itemOfQuestion.id) {
    birdCover.setAttribute('src', randomQuestion.image);
    questionTitle.innerHTML = randomQuestion.name;

    countTotalScore(currentScore);
    currentScore = 5;
    headerScore.innerHTML = countTotalScore();
    clickedElement.classList.add('answers__item_correct');

    toNextQuestion();
  } else {
    currentScore -= 1;
    clickedElement.classList.add('answers__item_wrong');
  }
}

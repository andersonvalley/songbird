import quizHtml from '../helpers/quizHtml';
// eslint-disable-next-line import/no-cycle
import renderQuiz from './renderQuiz';
import { currentCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';

export default function startQuiz() {
  const startQuizBtn = document.querySelector('.first-page__btn');
  const startQuizBtnHeader = document.querySelector('.first-page__header-btn');

  // eslint-disable-next-line no-use-before-define
  startQuizBtnHeader.onclick = () => clickHandler();
  // eslint-disable-next-line no-use-before-define
  startQuizBtn.onclick = () => clickHandler();
}

export function render() {
  const app = document.querySelector('.app');
  const startQuizBtnHeader = document.querySelector('.first-page__header-btn');
  if (startQuizBtnHeader) {
    startQuizBtnHeader.remove();
  }
  app.innerHTML = '';
  app.innerHTML = quizHtml();

  renderQuiz(currentCategory(), returnRandomQuestion());
  clickOnAnswer();
}

function clickHandler() {
  document.body.classList.remove('first-page');
  render();
}

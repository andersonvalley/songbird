import quizHtml from '../helpers/quizHtml';
// eslint-disable-next-line import/no-cycle
import renderQuiz from './renderQuiz';
import { currentCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';
// eslint-disable-next-line import/no-cycle
import openGallery from './openGallery';

const startQuizBtnHeader = document.querySelector('.first-page__header-btn');
const galleryBtn = document.querySelector('.footer__btn');

export default function startQuiz() {
  const startQuizBtn = document.querySelector('.first-page__btn');

  // eslint-disable-next-line no-use-before-define
  startQuizBtnHeader.onclick = () => clickHandler();
  // eslint-disable-next-line no-use-before-define
  startQuizBtn.onclick = () => clickHandler();
  galleryBtn.onclick = () => {
    document.querySelector('.footer__btn').remove();
    openGallery();
  };
}

export function render() {
  const app = document.querySelector('.app');

  if (startQuizBtnHeader) {
    startQuizBtnHeader.remove();
  }

  if (galleryBtn) {
    galleryBtn.remove();
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

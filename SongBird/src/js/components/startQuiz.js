import quizHtml from '../helpers/quizHtml';
// eslint-disable-next-line import/no-cycle
import renderQuiz from './renderQuiz';
import { currentCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';

export default function startQuiz() {
  const startQuizBtn = document.querySelector('.first-page__btn');

  startQuizBtn.onclick = () => {
    document.querySelector('.app').classList.remove('first-page');
    // eslint-disable-next-line no-use-before-define
    render();
  };
}

export function render() {
  const app = document.querySelector('.app');
  app.innerHTML = '';
  app.innerHTML = quizHtml();

  renderQuiz(currentCategory(), returnRandomQuestion());
  clickOnAnswer();
}

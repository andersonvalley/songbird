import quizHtml from '../helpers/quizHtml';
import renderQuiz from './renderQuiz';
import { currentCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
import clickOnAnswer from './clickOnAnswer';

export default function startQuiz() {
  const app = document.querySelector('.app');
  const startQuizBtn = document.querySelector('.first-page__btn');

  startQuizBtn.onclick = () => {
    app.classList.remove('first-page');
    app.innerHTML = '';
    app.innerHTML = quizHtml();

    renderQuiz(currentCategory(), returnRandomQuestion());
    clickOnAnswer();
  };
}

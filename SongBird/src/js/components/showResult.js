import countTotalScore, { resetScore } from '../helpers/countScore';
import quizHtml from '../helpers/quizHtml';
import renderQuiz from './renderQuiz';
import { currentCategory, resetCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';
// eslint-disable-next-line import/no-cycle
import { changeCategory } from './nextQuestion';
import renderL from '../helpers/renderL';

export default function showResult() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  let html = () => `
   <div class="result">
     <h4 class="result__title"></h4>
     <p class="result__text"></p>
     <button class="btn-reset next-question result-btn"></button>
   </div>
  `;

  if (countTotalScore() === '30') {
    html = () => `
     <div class="result">
       <h4 class="result__title result__title-fin"></h4>
       <p class="result__text"></p>
       <button class="btn-reset next-question result-btn-fin"></button>
     </div>
  `;
  }

  app.insertAdjacentHTML('beforeend', html());

  renderL();
  const btnBack = document.querySelector('.result-btn');

  btnBack.onclick = () => {
    resetScore();
    resetCategory();
    document.querySelector('.score__number').innerHTML = '0';
    app.innerHTML = '';
    app.innerHTML = quizHtml();

    renderL();

    renderQuiz(currentCategory(), returnRandomQuestion());
    clickOnAnswer();
    changeCategory();
  };
}

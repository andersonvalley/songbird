import countTotalScore, { resetScore } from '../helpers/countScore';
import quizHtml from '../helpers/quizHtml';
// eslint-disable-next-line import/no-cycle
import renderQuiz from './renderQuiz';
import { currentCategory, resetCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import { changeCategory } from './nextQuestion';
import { showButtonLang } from '../helpers/hideButtonLang';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';
// eslint-disable-next-line import/no-cycle
import { checkLocalStorage } from './changeLang';

export default function showResult() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const html = () => `
   <div class="result">
     <h4 class="result__title"></h4>
     <p class="result__text"></p>
     <button class="btn-reset next-question result-btn"></button>
   </div>
  `;

  app.insertAdjacentHTML('beforeend', html());

  if (countTotalScore() === 30) {
    document.querySelector('.result-btn').remove();
  }

  checkLocalStorage();
  const btnBack = document.querySelector('.result-btn');

  btnBack.onclick = () => {
    resetScore();
    resetCategory();
    document.querySelector('.score__number').innerHTML = '0';
    app.innerHTML = '';
    app.innerHTML = quizHtml();

    renderQuiz(currentCategory(), returnRandomQuestion());
    clickOnAnswer();
    changeCategory();
    showButtonLang();
  };
}

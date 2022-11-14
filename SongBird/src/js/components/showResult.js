import countTotalScore, { resetScore } from '../helpers/countScore';
import quizHtml from '../helpers/quizHtml';
import renderQuiz from './renderQuiz';
import { currentCategory, resetCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';

export default function showResult() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  let html = () => `
   <div class="result">
     <h4 class="result__title">Поздравляем!</h4>
     <p class="result__text">Вы прошли викторину и набрали ${countTotalScore()} из 30 возможных баллов</p>
     <button class="btn-reset next-question result-btn">Попробовать еще раз</button>
   </div>
  `;

  if (countTotalScore() < 30) {
    html = () => `
     <div class="result">
       <h4 class="result__title">Поздравляем! Игра окончена!</h4>
       <p class="result__text">Вы прошли викторину и набрали ${countTotalScore()} из 30 возможных баллов</p>
       <button class="btn-reset next-question result-btn">В начало</button>
     </div>
  `;
  }

  app.insertAdjacentHTML('beforeend', html());

  const btnBack = document.querySelector('.result-btn');

  btnBack.onclick = () => {
    resetScore();
    resetCategory();
    document.querySelector('.score__number').innerHTML = '0';
    app.innerHTML = '';
    app.innerHTML = quizHtml();

    renderQuiz(currentCategory(), returnRandomQuestion());
    clickOnAnswer();
  };
}

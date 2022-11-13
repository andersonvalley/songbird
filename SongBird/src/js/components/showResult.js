import countTotalScore from '../helpers/countScore';

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
}

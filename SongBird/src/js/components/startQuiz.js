import quizHtml from '../helpers/quizHtml';
import renderQuiz from './renderQuiz';
import { currentCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
import clickOnAnswer from './clickOnAnswer';
import { renderLang } from './changeLang';

export default function startQuiz() {
  const app = document.querySelector('.app');
  const startQuizBtn = document.querySelector('.first-page__btn');
  const lang = window.localStorage.getItem('lang');

  startQuizBtn.onclick = () => {
    app.classList.remove('first-page');
    app.innerHTML = '';
    app.innerHTML = quizHtml();

    renderQuiz(currentCategory(), returnRandomQuestion());
    clickOnAnswer();

    if (lang) {
      document.querySelector('html').setAttribute('lang', lang);
      renderLang(lang);
    } else {
      renderLang('ru');
    }
  };
}

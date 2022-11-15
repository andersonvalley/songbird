import '../index.html';
import '../scss/main.scss';

import startQuiz from './components/startQuiz';
import clickOnButtonLang, { checkLocalStorage } from './components/changeLang';

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.first-page')) {
    startQuiz();
  }

  checkLocalStorage();
  clickOnButtonLang();
});

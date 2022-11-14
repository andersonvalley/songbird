import '../index.html';
import '../scss/main.scss';

import startQuiz from './components/startQuiz';
import changeLang from './components/changeLang';
import renderL from './helpers/renderL';

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.first-page')) {
    startQuiz();
    renderL();
  }
  changeLang();
});

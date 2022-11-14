import '../index.html';
import '../scss/main.scss';

import startQuiz from './components/startQuiz';

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.first-page')) {
    startQuiz();
  }
});

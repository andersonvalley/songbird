import '../index.html';
import '../scss/main.scss';

import renderQuiz from './components/renderQuiz';
import clickOnAnswer from './components/clickOnAnswer';
import { currentCategory, returnRandomQuestion } from './helpers/returnQuestionOrCategory';

window.addEventListener('DOMContentLoaded', () => {
  renderQuiz(currentCategory(), returnRandomQuestion());
  clickOnAnswer();
});

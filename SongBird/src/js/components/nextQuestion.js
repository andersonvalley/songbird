// import randomNumber from '../helpers/randomNumber';
import renderQuiz from './renderQuiz';
import {
  currentCategoryIndex,
  nextCategory,
  returnRandomQuestion,
} from '../helpers/returnQuestionOrCategory';
import data from '../../assets/data';
import showResult from './showResult';
import { playOrStop } from './audio';

function changeCategory() {
  const categoryList = document.querySelector('.nav__list');
  const categories = Array.from(categoryList.children);

  categories.forEach((item) => item.classList.remove('nav__item_active'));

  categories[currentCategoryIndex()].classList.add('nav__item_active');
}

export default function toNextQuestion() {
  const nextBtn = document.querySelector('.next-question');
  const questionTrack = document.querySelector('#question-track');
  const questionPlayStopButton = document.querySelector('#question-play');

  nextBtn.removeAttribute('disabled');

  nextBtn.addEventListener('click', () => {
    if (data.length - 1 === currentCategoryIndex()) {
      showResult();
      return;
    }

    nextBtn.setAttribute('disabled', 'disabled');
    const next = data[nextCategory()];

    renderQuiz(next, returnRandomQuestion());
    changeCategory();

    playOrStop(questionTrack, questionPlayStopButton);
  }, { once: true });
}

// import randomNumber from '../helpers/randomNumber';
import renderQuiz from './renderQuiz';
import { currentCategory, nextCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';

function changeCategory(index) {
  const categoryList = document.querySelector('.nav__list');
  const categories = Array.from(categoryList.children);

  categories.forEach((item) => item.classList.remove('nav__item_active'));

  categories[index].classList.add('nav__item_active');
}

export default function toNextQuestion() {
  const nextBtn = document.querySelector('.next-question');
  nextBtn.removeAttribute('disabled');

  nextBtn.addEventListener('click', () => {
    nextBtn.setAttribute('disabled', 'disabled');

    renderQuiz(nextCategory(), returnRandomQuestion());

    changeCategory(currentCategory());
  });
}

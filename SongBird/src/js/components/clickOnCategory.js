import renderQuiz from './renderQuiz';

export default function clickOnCategory() {
  const categoryList = document.querySelector('.nav__list');

  if (categoryList) {
    categoryList.addEventListener('click', (e) => {
      const { dataset } = e.target;
      if (!dataset.index) return;

      Array.from(categoryList.children).forEach((item) => item.classList.remove('nav__item_active'));
      e.target.classList.add('nav__item_active');

      renderQuiz(dataset.index);
    });
  }
}

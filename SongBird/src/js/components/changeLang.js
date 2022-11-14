import countTotalScore from '../helpers/countScore';
// eslint-disable-next-line import/no-cycle
import renderQuiz from './renderQuiz';
import { currentCategory, returnRandomQuestion } from '../helpers/returnQuestionOrCategory';
// eslint-disable-next-line import/no-cycle
import clickOnAnswer from './clickOnAnswer';

export default function clickOnButtonLang() {
  const btn = document.querySelector('.header__lang');
  const html = document.querySelector('html');

  btn.onclick = (e) => {
    btn.classList.toggle('open-modal');
    const lang = e.target.innerHTML;

    if (lang !== 'ru' && lang !== 'en') return;

    html.setAttribute('lang', lang);
    window.localStorage.setItem('lang', lang);
    // eslint-disable-next-line no-use-before-define
    renderLangDifference(lang);
    renderQuiz(currentCategory(), returnRandomQuestion());
    clickOnAnswer();
  };
}

export function renderLangDifference(lang = 'ru') {
  const pageBtn = document.querySelector('.first-page__btn');
  const logoSubtitle = document.querySelector('.logo__subtitle');
  const scoreText = document.querySelector('.score__text');
  const audioTitle = document.querySelector('.audio__title');
  const answersTitle = document.querySelector('.answers__title');
  const descriptionTitle = document.querySelector('.description__title');
  const descriptionText = document.querySelector('.description__text');
  const descriptionChoose = document.querySelector('.description__choose');
  const nextLevel = document.querySelector('.next-question');
  const resultBtn = document.querySelector('.result-btn');
  const resultText = document.querySelector('.result__text');
  const resultTitle = document.querySelector('.result__title');
  const resultTitleFin = document.querySelector('.result__title-fin');
  const navList = document.querySelector('.nav__list');

  const category = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  const categoryENG = ['Warm up', 'Passerines', 'Forest birds', 'Song birds', 'Predator birds', 'Sea birds'];

  function categoryHtml(item, index) {
    navList.innerHTML = '';
    return `<li class="nav__item ${index === 0 && 'nav__item_active'}">${item}</li>`;
  }

  if (lang === 'en') {
    navList.insertAdjacentHTML('beforeend', categoryENG.map((item, index) => categoryHtml(item, index)).join(''));
    if (pageBtn) {
      pageBtn.innerHTML = 'Start quiz';
    }
    logoSubtitle.innerHTML = 'Try to guess the bird by its voice';
    scoreText.innerHTML = 'Score: ';

    if (audioTitle) {
      audioTitle.innerHTML = 'Try to guess the bird by its voice';
    }

    if (answersTitle) {
      answersTitle.innerHTML = 'Choose an answer';
    }

    if (descriptionTitle) {
      descriptionTitle.innerHTML = 'Description of the bird';
    }

    if (descriptionText) {
      descriptionText.innerHTML = 'Listen to the player';
    }

    if (descriptionChoose) {
      descriptionChoose.innerHTML = 'Select a bird from the list';
    }
    if (nextLevel) {
      nextLevel.innerHTML = 'next level';
    }
    if (resultBtn) {
      resultBtn.innerHTML = 'Try one more time';
    }

    if (resultText) {
      resultText.innerHTML = `You completed the quiz and scored ${countTotalScore()} out of 30 possible points`;
    }
    if (resultTitle) {
      resultTitle.innerHTML = 'Congratulations!';
    }
    if (resultTitleFin) {
      resultTitleFin.innerHTML = 'Congratulations! The game is over!!';
    }
  } else if (lang === 'ru') {
    navList.insertAdjacentHTML('beforeend', category.map((item, index) => categoryHtml(item, index)).join(''));

    if (pageBtn) {
      pageBtn.innerHTML = 'Начать викторину';
    }
    logoSubtitle.innerHTML = 'Попробуйте угадать птицу по голосу';
    scoreText.innerHTML = 'Набрано очков: ';

    if (audioTitle) {
      audioTitle.innerHTML = 'Попробуйте угадать птицу по голосу';
    }

    if (answersTitle) {
      answersTitle.innerHTML = 'Выберите вариант ответа';
    }

    if (descriptionTitle) {
      descriptionTitle.innerHTML = 'Описание птицы';
    }

    if (descriptionText) {
      descriptionText.innerHTML = 'Послушайте плеер';
    }

    if (descriptionChoose) {
      descriptionChoose.innerHTML = 'Выберите птицу из списка';
    }
    if (nextLevel) {
      nextLevel.innerHTML = 'Следующий уровень';
    }
    if (resultBtn) {
      resultBtn.innerHTML = 'Попробовать еще раз';
    }

    if (resultText) {
      resultText.innerHTML = `Вы прошли викторину и набрали ${countTotalScore()} из 30 возможных баллов`;
    }
    if (resultTitle) {
      resultTitle.innerHTML = 'Поздравляем';
    }

    if (resultTitleFin) {
      resultTitleFin.innerHTML = 'Поздравляем! Игра окончена!!';
    }
  }
}

export function checkLocalStorage() {
  const lang = window.localStorage.getItem('lang');
  if (lang) {
    document.querySelector('html').setAttribute('lang', lang);
    renderLangDifference(lang);
  } else {
    renderLangDifference('ru');
  }
}

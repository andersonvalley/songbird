import data from '../../assets/data';
import dataEN from '../../assets/dataEN';
import randomNumber from './randomNumber';

let categoryIndex = 0;
let currentQuestion = {};

export default function rerender() {
  const dataByLang = document.querySelector('html').getAttribute('lang') === 'ru' ? data : dataEN;
  return dataByLang;
}

export function nextCategory() {
  categoryIndex += 1;
  return rerender()[categoryIndex];
}

export function resetCategory() {
  categoryIndex = 0;
}

export function currentCategory() {
  return rerender()[categoryIndex];
}

export function currentCategoryIndex() {
  return categoryIndex;
}

export function returnRandomQuestion() {
  currentQuestion = currentCategory()[randomNumber(currentCategory())];
  return currentQuestion;
}

export function returnCurrentQuestion() {
  return currentQuestion;
}

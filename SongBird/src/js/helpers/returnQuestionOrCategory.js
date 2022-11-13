import data from '../../assets/data';
import randomNumber from './randomNumber';

let categoryIndex = 0;
let currentQuestion = {};

export function nextCategory() {
  categoryIndex += 1;
  return categoryIndex;
}

export function currentCategory() {
  return data[categoryIndex];
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

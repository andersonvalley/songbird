import data from '../../assets/data';
import randomNumber from './randomNumber';

let categoryIndex = 0;

export default function returnCurrentCategoryData() {
  return data[categoryIndex];
}

export function nextCategory() {
  categoryIndex += 1;
  return data[categoryIndex];
}

export function currentCategory() {
  return data[categoryIndex];
}

export function returnRandomQuestion() {
  return returnCurrentCategoryData()[randomNumber(returnCurrentCategoryData())];
}

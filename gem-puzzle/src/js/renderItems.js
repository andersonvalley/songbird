import randomNumbers from './helps/randomNumber';

let randomArray;
export default function renderItems(numberItems = 16) {
  const gameList = document.querySelector('.game__list');

  const html = (number) => `<li data-number="${number}" class="${!number ? 'game__item game__item-empty' : 'game__item'}">${!number ? '' : number}</li>`;
  randomArray = randomNumbers(numberItems);
  gameList.innerHTML = '';

  gameList.insertAdjacentHTML('beforeend', randomArray.map((item) => html(item)).join(''));
}

export function rerenderItems() {
  return randomArray;
}

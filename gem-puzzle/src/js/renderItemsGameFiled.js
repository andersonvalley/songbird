// import randomNumbers from './helps/randomNumbers';

export default function renderItemsGameFiled(mixedElements, rows) {
  const gameListNode = document.querySelector('.game__list');

  document.querySelector('.game__frame-text').innerHTML = `${rows}x${rows}`;

  switch (String(mixedElements.length)) {
    case '9':
      gameListNode.className = 'game__list game__list-3x3';
      break;

    case '25':
      gameListNode.className = 'game__list game__list-5x5';
      break;

    case '36':
      gameListNode.className = 'game__list game__list-6x6';
      break;

    case '49':
      gameListNode.className = 'game__list game__list-7x7';
      break;

    case '64':
      gameListNode.className = 'game__list game__list-8x8';
      break;

    default:
      gameListNode.className = 'game__list game__list-4x4';
      break;
  }

  const htmlItem = (number, index) => `<li data-number="${number}" data-index="${index}" data-next="${mixedElements[+index + +rows]}" data-prev="${mixedElements[+index - +rows]}" class="${!number ? 'game__item game__item-empty' : 'game__item'}">${!number ? '' : number}</li>`;

  gameListNode.innerHTML = '';
  gameListNode.insertAdjacentHTML('beforeend', mixedElements.map((item, index) => htmlItem(item, index)).join(''));
}

import renderItemsGameFiled from '../renderItemsGameFiled';

export default function chooseSizeField() {
  const sizeButtons = document.querySelector('.game__size-list');

  sizeButtons.addEventListener('click', (e) => {
    const { dataset } = e.target;

    renderItemsGameFiled(dataset.size);
  });
}

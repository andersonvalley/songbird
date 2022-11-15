import rerender from '../helpers/returnQuestionOrCategory';

export default function openGallery() {
  const app = document.querySelector('.app');
  document.querySelector('.footer__btn').remove();
  app.innerHTML = '';
  const data = rerender();

  const html = `
    <section class="gallery">
      <h3 class="gallery__title">Галлерея</h3>
      
      <ul class="gallery__list"></ul>
    </section>
  `;

  app.innerHTML = html;

  const list = document.querySelector('.gallery__list');

  function htmlItem({
    name, image, species, audio, description,
  }) {
    return `
      <li class="gallery__item">
        <img class="gallery__img" src="${image}" alt="name">
        
        <div class="gallery__inner">
          <span class="gallery__name">${name}</span>
          <span class="gallery__name gallery__name-latin">${species}</span>
          
          <div class="gallery__track">
            <audio src="${audio}" controls></audio>
          </div>
          
          <p class="gallery__text">
            ${description}
          </p>
        </div>
      </li>
    `;
  }

  list.insertAdjacentHTML('beforeend', data.map((item) => item.map((obj) => htmlItem(obj)).join('')).join(''));
}

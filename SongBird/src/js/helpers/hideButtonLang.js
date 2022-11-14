export default function hideButtonLang() {
  const btn = document.querySelector('.header__lang');

  btn.style.display = 'none';
}

export function showButtonLang() {
  const btn = document.querySelector('.header__lang');

  btn.style.display = 'flex';
}

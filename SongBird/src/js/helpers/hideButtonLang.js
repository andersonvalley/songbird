const btn = document.querySelector('.header__lang');

export default function hideButtonLang() {
  btn.style.display = 'none';
}

export function showButtonLang() {
  btn.style.display = 'flex';
}

import { renderLang } from '../components/changeLang';

export default function renderL() {
  const lang = window.localStorage.getItem('lang');

  if (lang) {
    document.querySelector('html').setAttribute('lang', lang);
    renderLang(lang);
  } else {
    renderLang('ru');
  }
}

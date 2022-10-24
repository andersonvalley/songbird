import { getLocalStorageTop } from './localstorage';

export default function topResults(obj) {
  let topRes = getLocalStorageTop() ? getLocalStorageTop() : [];
  if (obj) {
    topRes = [...topRes, obj];
  }
  window.localStorage.setItem('top-results', JSON.stringify(topRes));

  return topRes;
}

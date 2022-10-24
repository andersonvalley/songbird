export default function vueButtonStop() {
  const stopGameBtn = document.querySelector('#stop');

  stopGameBtn.classList.add('puzzle__btn-gray');
  stopGameBtn.innerHTML = 'Stop';
  stopGameBtn.removeAttribute('disabled');
}

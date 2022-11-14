export default function rangeInput(input, shadow, track) {
  const inputRange = document.querySelector(input);
  const inputShadow = document.querySelector(shadow);
  const audioTrack = document.querySelector(track);

  inputRange.addEventListener('input', (e) => {
    const width = +inputShadow.getAttribute('style').split(':')[1].split('%')[0];
    audioTrack.currentTime = (audioTrack.duration / 100) * width;

    inputRange.setAttribute('value', e.target.value);
    if (e.target.value < 30 && e.target.value >= 1) {
      inputShadow.style.width = `${+e.target.value + 1}%`;
    } else {
      inputShadow.style.width = `${e.target.value}%`;
    }
  });
}

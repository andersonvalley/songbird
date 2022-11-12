function rangeInput(input, shadow) {
  const inputRange = window.document.querySelector(input);
  const inputShadow = window.document.querySelector(shadow);

  inputRange.addEventListener('input', (e) => {
    if (e.target.value < 30 && e.target.value >= 1) {
      inputShadow.style.width = `${+e.target.value + 1}%`;
    } else {
      inputShadow.style.width = `${e.target.value}%`;
    }
  });
}

rangeInput('.track__line', '.track__line_back');

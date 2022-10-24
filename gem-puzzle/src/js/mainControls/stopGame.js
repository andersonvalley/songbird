export default function stopGame() {
  const minutes = document.querySelector('.puzzle__min').innerHTML;
  const seconds = document.querySelector('.puzzle__sec').innerHTML;

  return { minutes, seconds };
}

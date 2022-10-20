export default function chooseSize() {
  const sizeBtns = document.querySelectorAll('.game__size-item');

  sizeBtns.forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item);
    });
  });
}

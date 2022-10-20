export default function randomNumbers(numberItems) {
  const arr = [];

  for (let i = 1; i <= numberItems; i += 1) {
    let randomNumber = Math.floor(Math.random() * numberItems);
    while (arr.indexOf(randomNumber) !== -1) {
      randomNumber = Math.floor(Math.random() * numberItems);
    }
    arr.push(randomNumber);
  }
  return arr;
}

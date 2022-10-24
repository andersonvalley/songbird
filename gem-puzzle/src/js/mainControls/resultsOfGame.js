export function checkResults(mixedElements) {
  let flag = true;
  for (let i = 0; i < mixedElements.length - 1; i += 1) {
    const next = mixedElements[i + 1] === undefined
    || mixedElements[i + 1] === 0 ? mixedElements[i] : mixedElements[i + 1];
    if (mixedElements[i] > next) {
      flag = false;
      break;
    }
  }

  return flag;
}

export default function resultsOfGame(mixedElements) {
  checkResults(mixedElements);
}

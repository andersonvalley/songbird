export function checkResults(mixedElements) {
  let flag = false;
  if (mixedElements[mixedElements.length - 1] !== 0 && mixedElements[0] !== 1) {
    flag = false;
  }

  for (let i = 0; i < mixedElements.length - 2; i += 1) {
    const next = mixedElements[i + 1] === undefined
      ? mixedElements[i]
      : mixedElements[i + 1];
    if (mixedElements[i] > next) {
      flag = false;
      break;
    } else {
      flag = true;
    }
  }

  return flag;
}

export default function resultsOfGame(mixedElements) {
  checkResults(mixedElements);
}

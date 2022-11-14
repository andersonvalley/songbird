let flag = false;

export default function findCorrectAnswerFlag() {
  return flag;
}

export function changeCorrectAnswerFlag(value) {
  flag = value;
  return flag;
}

let totalScore = 0;

export default function countTotalScore(score) {
  if (!score) return totalScore;

  totalScore += score;
  return totalScore;
}

export function resetScore() {
  totalScore = 0;
}

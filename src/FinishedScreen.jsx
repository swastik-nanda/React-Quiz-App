import { useQuiz } from "./contexts/QuizProvider";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = Math.floor((points / maxPossiblePoints) * 100);
  let emoji;
  if (percentage === 100) {
    emoji = "💯";
  } else if (percentage < 100 && percentage >= 90) {
    emoji = "🎖️";
  } else if (percentage < 90 && percentage >= 60) {
    emoji = "👍🏻";
  } else if (percentage < 60 && percentage >= 10) {
    emoji = "😊";
  } else if (percentage < 10 && percentage >= 0) {
    emoji = "👎🏻";
  }
  function handleRestart() {
    dispatch({ type: "restartQuiz" });
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong> ({percentage} %)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={handleRestart}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;

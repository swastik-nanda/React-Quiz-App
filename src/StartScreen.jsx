import { useQuiz } from "./contexts/QuizProvider";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  function handleActiveState() {
    dispatch({ type: "start" });
  }
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleActiveState}>
        Let&apos;s Start
      </button>
    </div>
  );
}

export default StartScreen;

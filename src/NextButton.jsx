import { useQuiz } from "./contexts/QuizProvider";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  function handleNextButton() {
    dispatch({ type: "nextQuestion" });
  }
  function handleFinishQuiz() {
    dispatch({ type: "endQuiz" });
  }
  if (answer === null) {
    return null;
  }
  if (index < numQuestions - 1)
    return (
      <div>
        <button className="btn btn-ui" onClick={handleNextButton}>
          Next
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div>
        <button className="btn btn-ui" onClick={handleFinishQuiz}>
          Finish Quiz
        </button>
      </div>
    );
}

export default NextButton;

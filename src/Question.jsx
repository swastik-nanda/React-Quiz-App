import { useQuiz } from "./contexts/QuizProvider";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions.at(index);
  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? `answer` : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={index}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "answered", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

import { useEffect } from "react";
import { useQuiz } from "./contexts/QuizProvider";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);
  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;

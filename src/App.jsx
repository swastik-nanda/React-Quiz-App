import Header from "./Header.jsx";
import MainComponent from "./MainComponent.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import Progress from "./Progress.jsx";
import FinishedScreen from "./FinishedScreen.jsx";
import Footer from "./Footer.jsx";
import NextButton from "./NextButton.jsx";
import Timer from "./Timer.jsx";
import { useQuiz } from "./contexts/QuizProvider.jsx";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header></Header>
      <MainComponent>
        {status === "loading" && <Loader></Loader>}
        {status === "error" && <Error></Error>}
        {status === "ready" && <StartScreen></StartScreen>}
        {status === "active" && (
          <>
            <Progress></Progress>
            <Question></Question>
            <Footer>
              <Timer></Timer>
              <NextButton></NextButton>
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen></FinishedScreen>}
      </MainComponent>
    </div>
  );
}
export default App;

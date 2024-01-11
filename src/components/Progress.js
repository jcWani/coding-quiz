import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { questions, index, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={questions.length} value={index + Number(answer !== null)} />

      <p>
        Question {index + 1} / {questions.length}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

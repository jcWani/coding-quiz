function Progress({ questions, index, points, maxPossiblePoints, answer }) {
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

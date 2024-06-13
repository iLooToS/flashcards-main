function QuestionItem({ question, setQuestions}) {

  return (
    (question.theme_id === 1 ? (<div>
      <h3>{question.theme_id}</h3>
      <p>{question.question}</p>
      <p>{question.answer}</p>
      <p>{question.year}</p>
    </div>) : <></>)
  );
}

export default QuestionItem;

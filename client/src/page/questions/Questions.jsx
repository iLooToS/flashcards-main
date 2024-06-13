import QuestionItem from "./QuestionsItem";
import request from "../../services/axios";
import { useEffect, useState } from "react";

function Questions() {
  const [questions, setQuestions] = useState([]);

  const axiosQuestions = async () => {
    const { data } = await request.get("/questions");
    if (data.message === "success") {
      setQuestions(data.questions);
    }
  };

  useEffect(() => {
    axiosQuestions();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((question) => (
        <QuestionItem
          question={question}
          key={question.id}
          setQuestions={setQuestions}
        />
      ))}
      <buttton>Далее</buttton>
    </div>
  );
}

export default Questions;

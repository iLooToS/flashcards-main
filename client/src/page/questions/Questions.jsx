import request from "../../services/axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Questions() {
  const { id } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, SetAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState("");

  const axiosThemes = async () => {
    const { data } = await request.get(`/questions/${id}`);
    setRightAnswer("");
    if (data.message === "success") {
      setQuestion(data.question);
    }
  };
  useEffect(() => {
    axiosThemes();
  }, [id]);

  function checkAnswer() {
    if (answer.toLowerCase() === question.answer) {
      setRightAnswer("Верно");
    } else {
      setRightAnswer(`Не верно
      Ответ: ${question.answer}`);
    }
  }

  return (
    <div>
      <div>
        <p>{question.question}</p>
        <div>
          <input
            placeholder="Ваш ответ"
            type="text"
            value={answer}
            onChange={(e) => SetAnswer(e.target.value)}
          />
          <button
            width="30px"
            height="30px"
            type="button"
            onClick={checkAnswer}
          >
            OK
          </button>

          {id == 5 || id == 10 ? (
            <button>
              {" "}
              <Link to="/">Меню</Link>
            </button>
          ) : (
            <button>
              <Link to={`/questions/${+id + 1}`}>Далее</Link>
            </button>
          )}
        </div>
        <div>{rightAnswer}</div>
      </div>
    </div>
  );
}

export default Questions;

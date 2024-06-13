import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../services/axios";

function Main() {
  const [themes, setThemes] = useState([]);

  const axiosThemes = async () => {
    const { data } = await request.get("/themes");
    if (data.message === "success") {
      setThemes(data.themes);
    }
  };

  useEffect(() => {
    axiosThemes();
  }, []);
  return (
    <div>
      <h1>Welcome to Quiz</h1>
      <img
        src="https://gb.ru/blog/wp-content/uploads/2022/11/shutterstock_1506580442.jpg.webp"
        alt="Quiz photo"
      />
      <div>
        {themes.length > 1 && (
          <>
            <div>
              <Link to={`/questions/1`}>
                <h1>{themes[0].theme}</h1>
              </Link>
            </div>
            <div>
              <Link to={`/questions/8`}>
                <h1>{themes[1].theme}</h1>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Main;

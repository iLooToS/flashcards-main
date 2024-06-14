import { useEffect, useState } from "react";
import Main from "../page/main/Main";
import Questions from "../page/questions/Questions";
import SignUpPage from "../page/singUpPage/SignUpPage";
import Themes from "../page/themes/Themes";
import request, { setAccessToken } from "../services/axios";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../page/Layout";
import LoginPage from "../page/loginPage/LoginPage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    request("/tokens/refresh")
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
        setAccessToken("");
      });
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await request.post("/auth/signup", data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await request.post("/auth/login", data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };
  const handleLogout = async () => {
    const res = await request.post("/auth/logout");
    if (res.status === 200) {
      setUser(null);
      setAccessToken("");
    }
  };

  const routes = [
    {
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/themes",
          element: <Themes />,
        },
        {
          path: "/questions/:id",
          element: <Questions />,
        },
        {
          path: "/signup",
          element: <SignUpPage handleSignUp={handleSignUp} />,
        },
        {
          path: "/login",
          element: <LoginPage handleLogin={handleLogin} />,
        },
        {
          path: "/*",
          element: (
            <div>
              {" "}
              <h1>404</h1>{" "}
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHd1MmE1cjJhcTNpdnVodTFkcXlpanJ5YzE2bWhqbmowMmRuYTMwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/349qKnoIBHK1i/giphy.webp"
                alt=""
              />
            </div>
          ),
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
  //   return (
  //     <div>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/" element={<Main />} />
  //         <Route path="/themes" element={<Themes />} />
  //         <Route path="/questions/:id" element={<Questions />} />
  //         <Route path="*" element={<h1>404</h1>} />
  //       </Routes>
  //     </div>
  //   );
}

export default App;

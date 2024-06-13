import Main from "../page/main/Main";
import Navbar from "../page/navbar/Navbar";
import Questions from "../page/questions/Questions";
import Themes from "../page/themes/Themes";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions/:id" element={<Questions />} />
        <Route path="/themes/:id/questions" element={<Questions />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;

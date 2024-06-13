import Main from '../page/main/Main';
import Navbar from '../page/navbar/Navbar';
import Questions from '../page/questions/Questions';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </div>
  )
}

export default App

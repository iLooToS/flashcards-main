import Main from '../page/main/Main';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </div>
  )
}

export default App

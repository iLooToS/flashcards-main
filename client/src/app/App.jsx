import Main from '../page/main/Main';
import Navbar from '../page/navbar/Navbar';
import Themes from '../page/themes/Themes';
import Questions from '../page/questions/Questions';
import request from '../services/axios'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/themes' element={<Themes/>}/>
        <Route
          path='/:theme_id/questions'
          element={<Questions />}
        />
        <Route path='/questions' element={<Questions />} />
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </div>
  )
}

export default App

import React from 'react';
import request from '../../services/axios'
import ThemeItem from './ThemeItem';
import { useState } from 'react';
const themesArr = [
    {
        id: 1,
        theme: 'ttt'
    },
     {
        id: 2,
        theme: 'rrr'
    }
]
function Themes() {
    const [themes, setThemes] = useState(themesArr);
    
  return (
      <div>
          {themes.map((theme) => (
            <ThemeItem theme={theme} key={theme.id} setThemes={setThemes}/>
        ))}
      </div>
  );
}

export default Themes;
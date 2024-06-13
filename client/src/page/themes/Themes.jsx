import React, { useEffect } from 'react';
import request from '../../services/axios'
import ThemeItem from './ThemeItem';
import { useState } from 'react';

function Themes({ themes, setThemes}) {
    
  return (
      <div>
          {themes.map((theme) => (
            <ThemeItem theme={theme} key={theme.id} setThemes={setThemes} />
        ))}
      </div>
  );
}

export default Themes;
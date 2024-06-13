import React from 'react';
import { Link } from 'react-router-dom';


function ThemeItem({ theme }) {
  return (
      <div key={theme.id}>
          <Link to={`/question/${question.theme_id}`}><h1>{theme.theme}</h1></Link>
          
      </div>
  );
}

export default ThemeItem;
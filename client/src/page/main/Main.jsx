import React from 'react';
import { Link } from 'react-router-dom';

function Main() {

  return (
      <div>
          <h1>Welcome to Quiz</h1>
          <img src='https://gb.ru/blog/wp-content/uploads/2022/11/shutterstock_1506580442.jpg.webp' alt='Quiz photo'/>
          <Link type='button' to={'/themes'}>Choose category</Link>
      </div>
  );
}

export default Main;
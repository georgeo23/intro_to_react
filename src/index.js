import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './homePage'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

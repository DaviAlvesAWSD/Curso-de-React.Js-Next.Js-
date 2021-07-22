import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { Home } from './views/home';


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


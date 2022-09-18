import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import PizzaProvider from './providers/PizzaProvider';

ReactDOM.render(
  <PizzaProvider>
    <Router>
      <App />
    </Router>
  </PizzaProvider>
,
  document.getElementById('root')
);
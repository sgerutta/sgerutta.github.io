import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//primary goal: follow and understand convention for react applications

//entry point to application
//renders the root component('App') into the document object model
//render takes in what to render, and where to render it


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

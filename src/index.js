import React from 'react';
import ReactDOM from 'react-dom/client';

//index
import App from './header/App';
import MainIndex from './main/index';
import Footerindex from './footer/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <hr class="outerHR" />
    <MainIndex />
    <hr class="outerHR" />
    <Footerindex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

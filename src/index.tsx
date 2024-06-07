import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './Components/Header/HeaderMain';
import SectionMain from './Components/Section/SectionMain';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.body.style.backgroundColor = '#F9F9F9'; 
root.render(
  <React.StrictMode>
    <Header />
    <SectionMain/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

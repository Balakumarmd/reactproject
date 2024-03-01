import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import HomeClass from './HomeClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Home name={'React JS'} age={20} obj={{ department: 'AIML', college: 'mkce' }} Arr={['java', 'html', 'css',]} jsx={<h4>Happy learning</h4>} /> */}
    <HomeClass />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
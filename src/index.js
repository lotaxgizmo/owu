import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import HamburgerHeader from './components/HamburgerHeader';

ReactDOM.render(
  <React.StrictMode>
    <div className="relative flex items-center flex-col">
      <HamburgerHeader />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);

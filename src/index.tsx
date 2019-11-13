import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

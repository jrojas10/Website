import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/components/Contact/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



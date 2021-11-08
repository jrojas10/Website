import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/components/Contact/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../src/components/Projects/Projects.scss';
// import '../src/components/About/About.scss';

// import '../src/components/Header/Header.scss';
// import '../src/components/Projects/Card.scss';
// import '../src/components/Footer/Footer.scss';
// import '../src/components/Intro/Intro.scss';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



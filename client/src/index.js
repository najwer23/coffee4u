import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import './CSS/muliFont.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.querySelector('#mainNav')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.querySelector('footer')
);

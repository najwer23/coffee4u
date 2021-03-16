import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";
import './CSS/index.css';
import './CSS/muliFont.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.querySelector('nav')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.querySelector('footer')
);

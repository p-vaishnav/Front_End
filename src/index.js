import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import MainSection from './components/mainSection/mainSection';

import './components/index.css';
const BACKEND_URI = "http://svp-back-end-final.herokuapp.com/";
function mainRender() {
  
  ReactDOM.render(
    <div style={{background: 'inherit'}}>
        <Header/>
        <MainSection/>
    </div>,
    document.getElementById('main')
  );
}

mainRender();

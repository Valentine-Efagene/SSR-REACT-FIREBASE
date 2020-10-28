//import App from './App.jsx';
import Page from './Page.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const list = ['hello', 'world', '!'];
//const element = <App facts={list} />;
const element = <Page />;
ReactDOM.render(element, document.getElementById('root'));

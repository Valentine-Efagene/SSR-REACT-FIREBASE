import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const list = ['hello', 'world', '!'];
const element = <App facts={list} />;
ReactDOM.render(element, document.getElementById('root'));
//ReactDOM.hydrate(element, document.getElementById('root'));

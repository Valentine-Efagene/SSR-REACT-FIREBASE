"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import React from 'react';
//import { renderToString } from 'react-dom-server';
//import App from '../src/App.jsx';
var app = (0, _express.default)();
app.get('**', function (req, res) {
  //const html = renderToString(<App />);
  //res.send(html);
  res.send('Hello World!');
});
var _default = app;
exports.default = _default;
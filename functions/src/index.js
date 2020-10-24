"use strict";

var _App = _interopRequireDefault(require("./App.jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = ['hello', 'world', '!'];

var element = /*#__PURE__*/_react.default.createElement(_App.default, {
  facts: list
}); //ReactDOM.render(element, document.getElementById('root'));


_reactDom.default.hydrate(element, document.getElementById('root'));
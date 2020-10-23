"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = About;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// npx babel src/About.jsx --out-dir functions/src
//const React = require('react');
function About() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "React Server-Side Rendering Demo version 0.9"), /*#__PURE__*/_react.default.createElement("h4", null, "API version 1.0"));
}
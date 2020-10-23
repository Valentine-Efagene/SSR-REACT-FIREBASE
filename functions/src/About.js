// npx babel src/About.jsx --out-dir functions/src
const React = require('react'); //const React = require('react');

function About() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'text-center',
    },
    /*#__PURE__*/ React.createElement(
      'h3',
      null,
      'React Server-Side Rendering Demo version 0.9',
    ),
    /*#__PURE__*/ React.createElement('h4', null, 'API version 1.0'),
  );
}

module.exports = About;

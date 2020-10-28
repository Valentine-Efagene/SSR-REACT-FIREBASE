// npx babel src/About.jsx --out-dir functions/src

import React from 'react';
//const React = require('react');

export default function About() {
  return (
    <div className="text-center">
      <h3>React Server-Side Rendering Demo version 0.9</h3>
      <h4>API version 1.0</h4>
    </div>
  );
}

import React from 'react';
import Page from './Page.jsx';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Page from './Page.jsx';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
  allReducers,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

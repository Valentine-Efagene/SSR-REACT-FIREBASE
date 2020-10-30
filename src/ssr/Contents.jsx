import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import routes from './routes.js';
import wrapPath from './wrapPath.js';

export default function Contents() {
  const location = useLocation();
  //console.log(location.pathname);
  const test = wrapPath('/');

  return (
    <Switch>
      <Redirect exact from={wrapPath('/')} to={wrapPath('/home')} />
      {routes.map((attrs) => (
        <Route {...attrs} key={attrs.path} />
      ))}
    </Switch>
  );
}

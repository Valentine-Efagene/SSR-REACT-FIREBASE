import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import ReduxTest from './ReduxTest.js';
import wrapPath from './wrapPath.js';

const routes = [
  { path: wrapPath('/home'), component: Home },
  { path: wrapPath('/about'), component: About },
  { path: wrapPath('/redux-test'), component: ReduxTest },
  { path: wrapPath('*'), component: NotFound },
];

export default routes;

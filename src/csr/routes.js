import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import ReduxTest from './ReduxTest.js';

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/redux-test', component: ReduxTest },
  { path: '*', component: NotFound },
];

export default routes;

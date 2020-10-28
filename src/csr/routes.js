import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '*', component: NotFound },
];

export default routes;

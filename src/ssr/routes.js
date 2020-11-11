import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Test from './Test.jsx';
import ReduxTest from './ReduxTest.js';
import CreateArticle from './CreateArticle.jsx';
import wrapPath from './wrapPath.js';

const routes = [
  { path: wrapPath('/home'), component: Home },
  { path: wrapPath('/about'), component: About },
  { path: wrapPath('/test'), component: Test },
  { path: wrapPath('/redux-test'), component: ReduxTest },
  { path: wrapPath('/create-article'), component: CreateArticle },
  { path: wrapPath('*'), component: NotFound },
];

export default routes;

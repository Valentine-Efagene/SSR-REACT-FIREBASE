import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Test from './Test.jsx';
import Login from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import ReduxTest from './ReduxTest.js';
import EmailSignUp from './EmailSignUp.jsx';
import PhoneSignUp from './PhoneSignUp.jsx';
import p5Test from './p5Test.jsx';
import CreateArticle from './CreateArticle.jsx';
import wrapPath from './wrapPath.js';

const routes = [
  { path: wrapPath('/home'), component: Home },
  { path: wrapPath('/signup'), component: SignUp },
  { path: wrapPath('/signup-email'), component: EmailSignUp },
  { path: wrapPath('/signup-phone'), component: PhoneSignUp },
  { path: wrapPath('/about'), component: About },
  { path: wrapPath('/test'), component: Test },
  { path: wrapPath('/p5-test'), component: p5Test },
  { path: wrapPath('/login'), component: Login },
  { path: wrapPath('/redux-test'), component: ReduxTest },
  { path: wrapPath('/create-article'), component: CreateArticle },
  { path: wrapPath('*'), component: NotFound },
];

export default routes;

import { combineReducers } from 'redux';
import count from './count';
import isLogged from './isLogged';
import initialData from './initialData';
import user from './user';
import session from './session';

const allReducers = combineReducers({
  count,
  isLogged,
  initialData,
  user,
  session,
});

export default allReducers;

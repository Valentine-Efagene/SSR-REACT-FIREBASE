import { combineReducers } from 'redux';
import count from './count';
import isLogged from './isLogged';
import initialData from './initialData';
import userData from './userData';
import session from './session';

const allReducers = combineReducers({
  count,
  isLogged,
  initialData,
  userData,
  session,
});

export default allReducers;

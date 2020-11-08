import { combineReducers } from 'redux';
import countReducer from './count';
import loggedReducer from './isLogged';
import initialDataReducer from './initialData';
import userDataReducer from './userData';

const allReducers = combineReducers({
  count: countReducer,
  isLogged: loggedReducer,
  initialData: initialDataReducer,
  userData: userDataReducer,
});

export default allReducers;

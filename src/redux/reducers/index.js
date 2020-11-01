import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import initialDataReducer from './initialData';
import userDataReducer from './userData';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  initialData: initialDataReducer,
  userData: userDataReducer,
});

export default allReducers;

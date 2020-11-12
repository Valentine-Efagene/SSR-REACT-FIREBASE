import { logIn, logOut } from './email.js';

const increment = (multiple) => {
  return {
    type: 'INCREMENT',
    payload: multiple,
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const setInitialData = (initialData) => {
  return {
    type: 'SET_INITIAL_DATA',
    payload: initialData,
  };
};

const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

const setSession = (session) => {
  return {
    type: 'SET_SESSION',
    payload: session,
  };
};

export {
  logIn,
  logOut,
  increment,
  decrement,
  setInitialData,
  setUser,
  setSession,
};

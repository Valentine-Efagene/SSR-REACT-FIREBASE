export const increment = (multiple) => {
  return {
    type: 'INCREMENT',
    payload: multiple,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const setInitialData = (initialData) => {
  return {
    type: 'SET_INITIAL_DATA',
    payload: initialData,
  };
};

export const setUserData = (userData) => {
  return {
    type: 'SET_USER_DATA',
    payload: userData,
  };
};

export const setSession = (session) => {
  return {
    type: 'SET_SESSION',
    payload: session,
  };
};

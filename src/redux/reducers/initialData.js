const initialDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default initialDataReducer;

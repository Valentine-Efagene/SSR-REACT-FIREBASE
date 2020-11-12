import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import store from './store.js';

function ReduxTest() {
  const initialCount = store.count;
  const appVisits = store.session?.appVisits;
  let count;

  if (typeof window === 'undefined') {
    count = useSelector(() => initialCount);
  } else {
    count = useSelector((state) => state.count);
  }

  //const initialData = useSelector((state) => state.initialData);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          You have visited this app {appVisits}{' '}
          {appVisits === 1 ? 'time' : 'times'}.
        </h1>
        <h1>Counter {count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </header>
    </div>
  );
}

export default ReduxTest;

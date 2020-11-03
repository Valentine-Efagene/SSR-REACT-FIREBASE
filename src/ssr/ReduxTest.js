import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

function ReduxTest() {
  const counter = useSelector((state) => state.counter);
  const initialData = useSelector((state) => state.initialData);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>You have visited this app {initialData.appVisits} times.</h1>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </header>
    </div>
  );
}

export default ReduxTest;

import React from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import useScrollPosition from './useScrollPosition.js';

export default function Test() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    inputEl.current.value = 'qqw';
  };

  useScrollPosition(
    ({ prevPos, pos }) => {
      //console.log(prevPos?.y);
      inputEl.current.value = prevPos?.y;
    },
    [],
    null,
    true,
    200,
  );

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

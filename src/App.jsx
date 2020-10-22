import React from 'react';
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

export default function App(props) {
  /*if (props.facts) {
    const facts = props.facts.map((fact, i) => {
      return <li key={i}>{fact}</li>;
    });
  
    return <ul>{facts}</ul>;
  } else {
    return <button onClick>Hello</button>;
  }*/

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count++);
  }

  const decrement = () => {
    setCount(count--);
  }

  return (
    <>
      <p>{count}</p>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </>
  )
}

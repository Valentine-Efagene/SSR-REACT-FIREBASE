import React, { useRef, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

const Test = () => {
  let str = 'hello';
  let f = [...str].map((e) => {
    return <div>{e}</div>;
  });

  return <Container fluid>{f}</Container>;
};

export default Test;

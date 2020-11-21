import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Loadable from 'react-loadable';
//import Sketch from 'react-p5';

function Loading() {
  return null;
}

export default () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const [dim, setDim] = useState({ w: 0, h: 0 });

  const Sketch = Loadable({
    loader: () => import('react-p5'),
    loading: Loading,
  });

  const stageCanvasRef = useRef(null);
  const initDimensions = () => {
    let h = 0;
    let w = 0;

    if (stageCanvasRef.current) {
      h = stageCanvasRef.current.offsetHeight;
      w = stageCanvasRef.current.offsetWidth;
    }

    setDim({ w, h });
  };

  // useEffect will run on stageCanvasRef value assignment
  useEffect(() => {
    // The 'current' property contains info of the reference:
    // align, title, ... , width, height, etc.
    initDimensions();

    window.addEventListener('resize', initDimensions);
    return () => {
      window.removeEventListener('resize', initDimensions);
    };
  }, [stageCanvasRef]);

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(dim.w, dim.h).parent(canvasParentRef);
  };

  let x = dim.w / 2;
  let y = dim.h / 2;
  let xVel = 3;

  const draw = (p5) => {
    p5.background(129, 71, 109);

    if (p5.mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }
    //const { width, height, background, ellipse } = p5;
    const d = p5.width / 10;
    const r = d / 2;
    p5.ellipse(x, y, d, d);
    p5.text(`${x + d}`, dim.w / 2, dim.h / 5);
    p5.line(x, 0, x, dim.h);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x += xVel;

    if (x + r >= dim.w || x <= r) {
      xVel *= -1;
    }
  };

  return (
    <div ref={stageCanvasRef} style={{ width: '100%', height: '100%' }}>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

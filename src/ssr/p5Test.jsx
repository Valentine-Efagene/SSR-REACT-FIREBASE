import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
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
  let b;

  const draw = (p5) => {
    let { mouseIsPressed, width } = p5;
    p5.background(129, 71, 109);

    b = new Bob(p5, x, y + 50);

    if (mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }

    b.display();
    //const { width, height, background, ellipse } = p5;
    const d = width / 10;
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

// Bob class, just like our regular Mover (position, velocity, acceleration, mass)
class Bob {
  // Constructor
  constructor(p5, x, y) {
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector();
    this.acceleration = p5.createVector();
    this.dragOffset = p5.createVector();
    this.dragging = false;
    this.p5 = p5;
    this.mass = 24;
  }

  // Draw the bob
  display() {
    let { p5, position, dragging, mass } = this;
    p5.stroke(0);
    p5.strokeWeight(2);
    //p5.fill(175);

    if (dragging) {
      p5.fill(50);
    }

    p5.ellipse(position.x, position.y, mass * 2, mass * 2);
  }
}

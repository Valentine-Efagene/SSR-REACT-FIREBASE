import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { useState, useEffect } from 'react';
import { Col, Form, Row, Button, Figure, Container } from 'react-bootstrap';

//import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';

import withToast from './withToast.jsx';

let currentTextPos = 0;
let currentImgPos = 0;

function Editor(props) {
  const { showSuccess, showError } = props;
  const [imgSrc, setImgSrc] = useState([]);
  const [sequence, setSequence] = useState('');
  const [text, setText] = useState([]);
  const [title, setTitle] = useState(null);
  const [imgDim, setImgDim] = useState([]);

  let imageInput = (
    <Form.File
      id="custom-file"
      label="Custom file input"
      custom
      onChange={(event) => {
        let fileName = event.target.files[0];
        //showSuccess(file.name);
        let reader = new FileReader();
        reader.readAsDataURL(fileName);
        reader.onload = () => {
          const file = reader.result;
          let img = new Image();
          img.onload = function () {
            let imd = imgDim;
            imd.push({ width: img.width, height: img.height });
            setImgDim(imd);
          };
          img.src = file;
          let ims = imgSrc;
          ims.push(file);
          setImgSrc(ims);
          let s = sequence;
          setSequence((s += '1'));
          const size = file.size ? file.size : 'NOT SUPPORTED';
          showSuccess(size);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }}
    />
  );

  let textArea = (
    <Form.Control
      as="textarea"
      rows={6}
      placeholder="Write with love"
      onBlur={(event) => {
        let t = text;
        t.push(event.target.value);
        setText(t);
        let s = sequence;
        setSequence((s += '0'));
        event.target.value = '';
      }}
    />
  );

  let textPos = 0;
  let imgPos = 0;

  let article = [...sequence].map((c) => {
    if (c === '0') {
      let val = text[textPos];

      let ret = (
        <p
          style={{
            background: 'beige',
            wordBreak: 'break-all',
            textAlign: 'left',
            whiteSpace: 'pre-line',
          }}
          onClick={() => {
            currentTextPos = textPos;
            textArea.value = text[currentTextPos];
          }}
        >
          {val}
        </p>
      );

      textPos++;
      return ret;
    } else {
      let ret = (
        <Figure>
          <Figure.Image
            width={imgDim[imgPos]?.width}
            height={imgDim[imgPos]?.height}
            alt="171x180"
            src={imgSrc[imgPos]}
            onClick={() => {
              currentImgPos = imgPos;
            }}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
      );
      imgPos++;
      return ret;
    }
  });

  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log('Anonymous ID: ');
      console.log(uid);
      // ...
    } else {
      console.log('Signed out');
    }
    // ...
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const firestore = firebase.firestore();
    firestore
      .collection('text')
      .add({
        text,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Container fluid>
      <div className="text-center">
        <h3>Create An Article</h3>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="createArticle.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="createArticle.ControlTextarea1">
                <Form.Label>Text</Form.Label>
                {textArea}
              </Form.Group>
              <Button variant="primary" type="submit">
                Post
              </Button>
            </Form>
          </Col>
          <Col xs lg="6">
            <h3>Preview</h3>
            <h5>{title}</h5>
            <div>{article}</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

const EditorWithToast = withToast(Editor);

export default EditorWithToast;

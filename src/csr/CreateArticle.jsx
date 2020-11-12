import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { useState, useEffect } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

//import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';

import withToast from './withToast.jsx';

function CreateArticle(props) {
  const { showSuccess, showError } = props;
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);

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
    <>
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
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Write with love"
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Post
              </Button>
            </Form>
          </Col>
          <Col xs lg="6">
            <h3>Preview</h3>
            <h5>{title}</h5>
            <div>
              <p
                style={{
                  background: 'beige',
                  wordBreak: 'break-all',
                  textAlign: 'left',
                  whiteSpace: 'pre-line',
                }}
              >
                {text}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

const CreateArticleWithToast = withToast(CreateArticle);

export default CreateArticleWithToast;

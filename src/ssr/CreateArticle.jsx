import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { useState, useEffect } from 'react';
import {
  Col,
  Form,
  Row,
  Button,
  Figure,
  Container,
  Modal,
} from 'react-bootstrap';

//import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';

import withToast from './withToast.jsx';

let currentPos = 0;
let modalText;

function CreateArticle(props) {
  //const { showSuccess, showError } = props;
  const [showTAM, setShowTAM] = useState(false);
  const [showIM, setShowIM] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [title, setTitle] = useState(null);

  let imageModal = (
    <Modal show={showIM} onHide={() => setShowIM(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              img.src = file;
              let ad = [...articleData];

              img.onload = function () {
                ad[currentPos] = {
                  type: 1,
                  source: file,
                  dimension: { width: img.width, height: img.height },
                };
                setArticleData(ad);
                setShowIM(false);
              };
              //const size = file.size ? file.size : 'NOT SUPPORTED';
              //showSuccess(size);
            };
            reader.onerror = function (error) {
              console.log('Error: ', error);
            };
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowIM(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );

  let textAreaModal = (
    <Modal show={showTAM} onHide={() => setShowTAM(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Title"
          onChange={(event) => {
            modalText = event.target.value;
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowTAM(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            let ad = articleData;
            ad[currentPos] = { type: 0, content: modalText };
            setArticleData(ad);
            setShowTAM(false);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );

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
          img.src = file;
          let ad = [...articleData];

          img.onload = function () {
            ad.push({
              type: 1,
              source: file,
              dimension: { width: img.width, height: img.height },
            });
            setArticleData(ad);
          };
          //const size = file.size ? file.size : 'NOT SUPPORTED';
          //showSuccess(size);
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
        let ad = [...articleData];
        ad.push({ type: 0, content: event.target.value });
        setArticleData(event.target.value === '' ? articleData : ad);
        event.target.value = '';
      }}
    />
  );

  let article = [...articleData].map((c, i) => {
    if (c.type == 0) {
      let val = c.content;

      let ret = (
        <p
          style={{
            background: 'beige',
            wordBreak: 'break-all',
            textAlign: 'left',
            whiteSpace: 'pre-line',
          }}
          position={i}
          onClick={(event) => {
            currentPos = event.target.getAttribute('position');
            setShowTAM(true);
          }}
        >
          {val}
        </p>
      );

      return ret;
    } else {
      let src = c.source;
      let dim = c.dimension;
      let ret = (
        <>
          <Figure.Image
            width={dim?.width}
            height={dim?.height}
            alt="171x180"
            position={i}
            src={src}
            onClick={(event) => {
              currentPos = event.target.getAttribute('position');
              setShowIM(true);
            }}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </>
      );

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
      //console.log('Anonymous ID: ');
      //console.log(uid);
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
            {textAreaModal}
            {imageModal}
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
              <Form.Group>
                <Figure>{imageInput}</Figure>
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

const CreateArticleWithToast = withToast(CreateArticle);

export default CreateArticleWithToast;

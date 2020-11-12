/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
import firebase from 'firebase';
import 'firebase/auth';
import React, { Component, useState, useEffect } from 'react';
import {
  Col,
  Card,
  Nav,
  Form,
  FormGroup,
  Image,
  FormControl,
  Button,
  ButtonToolbar,
  Alert,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

//import Spinner from './Spinner.jsx';
import withToast from './withToast.jsx';
import { setUser } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
//import img from './assets/images/home.png';
//import './assets/css/styles.css';

function LogIn(props) {
  const dispatch = useDispatch();
  var [loading, setLoading] = useState(false);
  var [showValidation, setShowVaidation] = useState(false);
  var user = useSelector((state) => state.user);

  function onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const prevUser = user;
    const value = naturalValue === undefined ? textValue : naturalValue;
    setUser({ ...prevUser, [name]: value });
  }

  function showValidation() {
    setShowVaidation(true);
  }

  function dismissValidation() {
    setShowVaidation(false);
  }

  function startLoading() {
    setLoading(true);
  }

  function stopLoading() {
    setLoading(false);
  }

  async function signOut(event) {
    event.preventDefault();
    const { showSuccess, showError } = props;
    startLoading();
    dispatch(logOut());
    stopLoading();
    showSuccess('Logged out');
  }

  async function signInWithEmail(email, password) {
    const { showError, showSuccess } = props;
    startLoading();
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    try {
    } catch (err) {
      showError(err.message);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      user.password === undefined ||
      user.email === undefined ||
      user.password === '' ||
      user.email === ''
    ) {
      showValidation();
    } else {
      dismissValidation();

      signInWithEmail(user.email, user.password);
    }
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch(setUser(user));
    } else {
      console.log('Signed out');
    }
    // ...
  });

  let spinner = null;

  if (loading) {
    spinner = <Spinner size={50} />;
  }

  let validationMessage;
  if (showValidation) {
    validationMessage = (
      <Alert variant="danger" onClose={dismissValidation}>
        All fields must be filled
      </Alert>
    );
  }

  let btn = '';

  if (useSelector((state) => state.email)) {
    btn = (
      <Button disabled={false} bsStyle="primary" onClick={signOut}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Button>
    );
  } else {
    btn = (
      <Button disabled={false} bsStyle="primary" type="submit">
        <FontAwesomeIcon icon={faSignInAlt} />
      </Button>
    );
  }

  if (noAccount) {
    btn = (
      <Button disabled={false} bsStyle="primary" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faUser} />
      </Button>
    );
  }

  const loggedInEmail = useSelector((state) => state.email);

  return (
    <Col className="col-centered" sm={12} md={6}>
      <Card>
        <Card.Header>
          <Card.Title className="text-center">Email Login</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form horizontal onSubmit={handleSubmit}>
            <FormGroup>
              <Col className="col-centered">
                <Button
                  variant="light"
                  style={{
                    border: 'none',
                  }}
                  disabled={loggedInEmail !== null}
                  onClick={() => {
                    setNoAccout(true);
                  }}
                >
                  Want to create an account?
                </Button>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col className="col-centered">
                <FormControl
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col className="col-centered">
                <FormControl
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col className="col-centered">
                <ButtonToolbar>{btn}</ButtonToolbar>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col className="col-centered">
                <Nav.Link href="/forgotpassword">Forgot password?</Nav.Link>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col className="col-centered">{validationMessage}</Col>
            </FormGroup>
          </Form>
          {spinner}
        </Card.Body>
        <Card.Footer>
          <Image className="footer-image" src={img} />
        </Card.Footer>
      </Card>
    </Col>
  );
}

const LoginWithToast = withToast(LogIn);
export default LoginWithToast;

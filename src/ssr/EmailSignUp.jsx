/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
import firebase from 'firebase';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
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
  faEnvelope,
  faSpinner,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Spinner from './Spinner.jsx';
import withToast from './withToast.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
//import img from '../assets/images/home.png';

function EmailSignUp(props) {
  const dispatch = useDispatch();
  var user = useSelector((state) => state.user);
  var [loading, setLoading] = useState(false);
  var [valid, setValid] = useState(false);

  //const footerImage = typeof window == 'undefined' ? './assets/img/home.png' : img;

  function onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const prevUser = user;
    const value = naturalValue === undefined ? textValue : naturalValue;
    dispatch(setUser({ ...prevUser, [name]: value }));
  }

  async function signOut(event) {
    event.preventDefault();
    const { showSuccess, showError } = props;
    setLoading(true);
    //---
    setLoading(false);
    showSuccess('Logged out');
  }

  async function signUpWithEmail(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      user.password === undefined ||
      user.email === undefined ||
      user.password === '' ||
      user.email === ''
    ) {
      setValid(false);
    } else {
      setValid(true);

      signUpWithEmail(user.email, user.password);
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

  if (loading && typeof window !== 'undefined') {
    spinner = <Spinner size={50} />;
  }

  let validationMessage;
  if (!valid) {
    validationMessage = (
      <Alert variant="danger">All fields must be filled</Alert>
    );
  }

  if (useSelector((state) => state.email)) {
    return (
      <Button disabled={false} bsStyle="primary" onClick={signOut}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Button>
    );
  }

  return (
    <Row className="justify-content-md-center">
      <Col className="col-centered" sm={12} md={6}>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">
              Email Sign Up <FontAwesomeIcon icon={faEnvelope} />
            </Card.Title>
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
                    disabled={user?.email !== null}
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
                  <ButtonToolbar>
                    <Button disabled={false} variant="primary" type="submit">
                      <FontAwesomeIcon icon={faUser} />
                    </Button>
                    <Button
                      disabled={false}
                      variant="primary"
                      onClick={() => {
                        setLoading(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faSpinner} />
                    </Button>
                  </ButtonToolbar>
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
            <Image className="footer-image" src={'./assets/img/home.png'} />
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

const EmailSignUpWithToast = withToast(EmailSignUp);
export default EmailSignUpWithToast;

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
import React, { Component, useState, useEffect } from 'react';
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
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//import Spinner from './Spinner.jsx';
import withToast from './withToast.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../redux/actions';
import wrapPath from './wrapPath.js';
//import img from './assets/images/home.png';
//import './assets/css/styles.css';

function LogIn(props) {
  const img = '';
  const dispatch = useDispatch();
  var [user, setUser] = useState({
    email: useSelector((state) => state.email),
  });
  var [loading, setLoading] = useState(false);
  var [showValidation, setShowVaidation] = useState(false);
  var [noAccount, setNoAccout] = useState(false);
  const loggedInEmail = useSelector((state) => state.email);

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      //uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      //document.getElementById('loader').style.display = 'none';
      //},
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    //signInFlow: 'redirect',
    //signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInSuccessUrl: wrapPath('/home'),
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    //tosUrl: '<your-tos-url>',
    // Privacy policy url.
    //privacyPolicyUrl: '<your-privacy-policy-url>',
  };

  let signInUI;

  if (typeof window !== 'undefined') {
    signInUI = (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }

  return (
    <Row className="justify-content-md-center">
      <Col className="col-centered" sm={12} md={6}>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">
              <FontAwesomeIcon icon={faUser} />
            </Card.Title>
          </Card.Header>
          <Card.Body>{signInUI}</Card.Body>
          <Card.Footer>
            <Image className="footer-image" src={img} />
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

const LoginWithToast = withToast(LogIn);
export default LoginWithToast;

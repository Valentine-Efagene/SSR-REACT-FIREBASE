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
  faPhoneAlt,
  faPhoneSquare,
  faEnvelope,
  faUser,
  faPhone,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';

import wrapPath from './wrapPath.js';

function SignUp(props) {
  const img = '';
  return (
    <Row className="justify-content-md-center">
      <Col className="col-centered" sm={12} md={6}>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">Sign Up</Card.Title>
          </Card.Header>
          <Button href={wrapPath('/signup-email')}>
            Email Sign Up <FontAwesomeIcon icon={faEnvelope} />
          </Button>
          <Button href={wrapPath('/signup-phone')}>
            Phone Sign Up <FontAwesomeIcon icon={faPhone} />
          </Button>
          <Card.Body></Card.Body>
          <Card.Footer>
            <Image className="footer-image" src={img} />
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default SignUp;

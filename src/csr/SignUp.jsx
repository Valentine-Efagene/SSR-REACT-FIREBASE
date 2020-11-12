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
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

function SignUp(props) {
  const img = '';
  return (
    <Row className="justify-content-md-center">
      <Col className="col-centered" sm={12} md={6}>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">Sign Up</Card.Title>
          </Card.Header>
          <Button>
            Sign up with Email <FontAwesomeIcon icon={faPhone} />
          </Button>
          <Button>
            Sign up with phone number <FontAwesomeIcon icon={faPhoneAlt} />
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

/* eslint-disable react/jsx-one-expression-per-line */
// import { useState } from 'react';

import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Contents from './Contents.jsx';
import wrapPath from './wrapPath.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        Full source code available at this{' '}
        <a href="https://github.com/Valentine-Efagene/MERN">
          Github repository
        </a>
      </p>
    </small>
  );
}

function NavBar({ user }) {
  let contactAdd = '';
  let update = '';
  const isLogged = false;

  if (isLogged) {
    update = (
      <LinkContainer to="/update">
        <NavLink>Update Details</NavLink>
      </LinkContainer>
    );
  }

  if (user) {
    contactAdd = (
      <LinkContainer to="/ContactAdd">
        <NavItem>Add Contact</NavItem>
        <Container fluid>
          <Contents />
        </Container>
      </LinkContainer>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href={wrapPath('/home')}>
        React-Firebase <FontAwesomeIcon color="orange" icon={faFire} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to={wrapPath('/home')}>
            <NavLink>Home</NavLink>
          </LinkContainer>
          <LinkContainer to={wrapPath('/redux-test')}>
            <NavLink>Redux Test</NavLink>
          </LinkContainer>
          <LinkContainer to={wrapPath('/p5-test')}>
            <NavLink>P5 Test</NavLink>
          </LinkContainer>
          <LinkContainer to={wrapPath('/about')}>
            <NavLink>
              <NavItem>About</NavItem>
            </NavLink>
          </LinkContainer>
          <LinkContainer to={wrapPath('/create-article')}>
            <NavLink>
              <NavItem>Create Article</NavItem>
            </NavLink>
          </LinkContainer>
          <LinkContainer to={wrapPath('/test')}>
            <NavLink>
              <NavItem>Test</NavItem>
            </NavLink>
          </LinkContainer>
          <LinkContainer to={wrapPath('/editor')}>
            <NavLink>
              <NavItem>Editor</NavItem>
            </NavLink>
          </LinkContainer>
          {update}
          {contactAdd}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

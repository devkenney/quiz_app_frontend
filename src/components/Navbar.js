import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function TheNavbar (props) {
  return (
    <Navbar bg="success" expand="lg" variant="light">
  <Navbar.Brand href="#home">Quizzzy</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/index">Home</Nav.Link>
      <Nav.Link href="/new">New</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
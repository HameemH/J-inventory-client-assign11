import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='background'  expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="" className='text-white'>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="login" className='text-white fw-bold'>Login</Nav.Link>
        <Nav.Link as={Link} to="registration" className='text-white fw-bold'>Registration</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
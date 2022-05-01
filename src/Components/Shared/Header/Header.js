import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import auth from './../../../firebse.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const[user] = useAuthState(auth);
  const handleLogout = () =>{
    signOut(auth);
}
    return (
        <div>
            <Navbar className='background'  expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="" className='text-white'>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       {
         user? <Nav.Link className='text-white fw-bold' onClick={handleLogout}>Log out</Nav.Link>: <Nav.Link as={Link} to="login" className='text-white fw-bold'>Login</Nav.Link>
       }
        <Nav.Link as={Link} to="registration" className='text-white fw-bold'>Registration</Nav.Link>
      {
        user?<Nav.Link as={Link} to="inventory" className='text-white fw-bold'>Inventory</Nav.Link>: null
      }
      {
        user?<Nav.Link as={Link} to="newitem" className='text-white fw-bold'>Add new Item</Nav.Link>: null
      }
      {
        user?<Nav.Link as={Link} to="myitems" className='text-white fw-bold'>My Items</Nav.Link>: null
      }
       <Nav.Link as={Link} to="blogs" className='text-white fw-bold'>Blogs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
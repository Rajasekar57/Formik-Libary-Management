import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to ="/home">Library Management Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/home">Home</Nav.Link>
            <Nav.Link as={Link} to ="/teacherslist">Mentor list</Nav.Link>
            <Nav.Link as={Link} to ="/studentslist">Article Readers</Nav.Link>
            <Nav.Link as={Link} to ="/dashboard">Books list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
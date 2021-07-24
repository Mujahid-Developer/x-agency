import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../Nav/Nav.css'

const Nav = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <nav>
                <a href="#" className="logo">X-Agency</a>
                    <ul className="nav-item">
                        <li><a href="">Services</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
            </nav> */}
        </div>
    );
};

export default Nav;
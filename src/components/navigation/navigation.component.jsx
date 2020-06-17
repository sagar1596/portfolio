import React from 'react';
import './navigation.styles.scss';

import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
    <Navbar className="header" collapseOnSelect fixed="top" expand="lg" bg="custom" variant="dark">
        <Navbar.Brand href="#home">Sagar Bhat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                
            </Nav>
            <Nav>
                <Nav.Link className="active" href="#home">Home</Nav.Link>
                <Nav.Link href="#exp">Experience</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;




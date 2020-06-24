import React from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
    <Navbar className="header" collapseOnSelect fixed="top" expand="lg" bg="custom" variant="dark">
        <Navbar.Brand href="#home">Sagar Bhat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                
            </Nav>
            <Nav>
                <Link onClick={_handleClick} className="nav-link active" to="/">Home</Link>
                <Link onClick={_handleClick} className="nav-link" to="/professional">Experience</Link>
                <Link onClick={_handleClick} className="nav-link" to="/skills">Skills</Link>
                <Link onClick={_handleClick} className="nav-link" to="/work">Work</Link>
                <Link onClick={_handleClick} className="nav-link" to="/about">Contact Me</Link>
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
)

const _handleClick = (e) => {
    Array.from(e.target.parentElement.children).forEach((el) => {
        el.classList.remove('active');
    })
    e.target.classList.add("active");
}

export default Navigation;



